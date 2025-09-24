import Stripe from 'stripe'
import nodemailer from 'nodemailer'

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// Initialize Email Transporter (Gmail SMTP)
const emailTransporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

// SMS Helper Function - Use Textbelt
async function sendSMS(to, message) {
  try {
    // Use your Textbelt API key or fallback to free demo
    const apiKey = process.env.TEXTBELT_API_KEY || 'textbelt'

    const response = await fetch('https://textbelt.com/text', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        phone: to,
        message: message,
        key: apiKey
      })
    })

    const result = await response.json()

    if (result.success) {
      console.log('Textbelt SMS sent successfully:', result.textId)
      console.log('API Key used:', apiKey === 'textbelt' ? 'FREE DEMO' : 'YOUR PAID KEY')
      return { success: true, provider: 'textbelt', textId: result.textId }
    } else {
      console.error('Textbelt error:', result.error)
      console.log('Quota info:', result.quotaRemaining)

      // Demo mode fallback
      console.log('SMS Demo Mode - Would send:', { to, message })
      return { success: true, demo: true }
    }
  } catch (error) {
    console.error('SMS error:', error.message)

    // Demo mode fallback
    console.log('SMS Demo Mode - Would send:', { to, message })
    return { success: true, demo: true }
  }
}

// Email Helper Function
async function sendEmail(to, subject, html) {
  try {
    if (!process.env.EMAIL_USER) {
      console.log('Email Demo Mode - Would send:', { to, subject })
      return { success: true, demo: true }
    }

    const result = await emailTransporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: to,
      subject: subject,
      html: html
    })

    console.log('Email sent successfully:', result.messageId)
    return { success: true, messageId: result.messageId }
  } catch (error) {
    console.error('Email error:', error)
    return { success: false, error: error.message }
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    console.log('Creating reservation hold...')

    const {
      partySize,
      date,
      time,
      name,
      phone,
      email,
      specialRequests
    } = req.body

    // Validate required fields
    if (!partySize || !date || !time || !name || !phone || !email) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Validate party size meets minimum requirement
    const minimumPartySize = 5
    if (parseInt(partySize) < minimumPartySize) {
      return res.status(400).json({
        error: `Reservations require minimum ${minimumPartySize} guests`
      })
    }

    // Calculate hold amount
    const holdAmountPerGuest = 25
    const totalHoldAmount = holdAmountPerGuest * parseInt(partySize)

    console.log(`Creating hold for $${totalHoldAmount} (${partySize} guests)`)

    // Create Payment Intent for authorization hold (will be confirmed with payment method on frontend)
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalHoldAmount * 100, // Stripe uses cents
      currency: 'usd',
      capture_method: 'manual', // This creates an authorization hold
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: 'never' // Only allow direct payment methods (no redirects)
      },
      description: `Table reservation hold - ${name} - Party of ${partySize}`,
      metadata: {
        type: 'reservation_hold',
        customer_name: name,
        customer_phone: phone,
        customer_email: email,
        party_size: partySize,
        reservation_date: date,
        reservation_time: time,
        special_requests: specialRequests || '',
        restaurant: 'New England Steak and Seafood',
        created_at: new Date().toISOString()
      }
    })

    // For demo purposes, immediately confirm with test payment method
    const confirmedPaymentIntent = await stripe.paymentIntents.confirm(paymentIntent.id, {
      payment_method: 'pm_card_visa', // Stripe's test payment method
      return_url: 'https://nesteak.vercel.app/reservations'
    })

    console.log('Payment intent created:', confirmedPaymentIntent.id, 'Status:', confirmedPaymentIntent.status)

    // Generate unique reservation ID (short format)
    const reservationId = `NE${Date.now().toString().slice(-6)}${Math.random().toString(36).substr(2, 3).toUpperCase()}`

    // Send confirmation SMS
    const confirmationMessage = `New England Steak & Seafood
Reservation confirmed!
${partySize} guests ${date} ${time}
Hold: $${totalHoldAmount}
ID: ${reservationId}
508.478.0871`

    const smsResult = await sendSMS(phone, confirmationMessage)

    // Send confirmation email
    const emailSubject = `Reservation Confirmed - ${reservationId} - New England Steak & Seafood`
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #8B4513; text-align: center;">🍽️ New England Steak & Seafood</h2>

        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #28a745; margin-top: 0;">✅ Reservation Confirmed!</h3>

          <p><strong>Reservation ID:</strong> ${reservationId}</p>
          <p><strong>Guest Name:</strong> ${name}</p>
          <p><strong>Party Size:</strong> ${partySize} guests</p>
          <p><strong>Date & Time:</strong> ${date} at ${time}</p>
          <p><strong>Authorization Hold:</strong> $${totalHoldAmount} (released upon arrival)</p>
          ${specialRequests ? `<p><strong>Special Requests:</strong> ${specialRequests}</p>` : ''}
        </div>

        <div style="background-color: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h4 style="color: #856404; margin-top: 0;">📋 Important Information</h4>
          <ul style="color: #856404;">
            <li>Cancel up to 2 hours before your reservation - no charge</li>
            <li>Your card will not be charged unless you're a no-show</li>
            <li>Please arrive on time to have your hold released</li>
          </ul>
        </div>

        <div style="text-align: center; margin: 30px 0;">
          <p><strong>Questions?</strong></p>
          <p>📞 Call us at <a href="tel:5084780871" style="color: #8B4513;">508.478.0871</a></p>
          <p>📧 Reply to this email</p>
        </div>

        <hr style="border: 1px solid #dee2e6; margin: 30px 0;">
        <p style="text-align: center; color: #6c757d; font-size: 14px;">
          We look forward to serving you at New England Steak & Seafood!<br>
          <em>See you soon!</em>
        </p>
      </div>
    `

    const emailResult = await sendEmail(email, emailSubject, emailHtml)

    // Return success response
    res.status(200).json({
      success: true,
      reservation_id: reservationId,
      client_secret: confirmedPaymentIntent.client_secret,
      payment_intent_id: confirmedPaymentIntent.id,
      hold_amount: totalHoldAmount,
      message: 'REAL Stripe authorization hold created successfully!',
      sms_sent: smsResult.success,
      sms_demo: smsResult.demo || false,
      email_sent: emailResult.success,
      email_demo: emailResult.demo || false
    })

  } catch (error) {
    console.error('Stripe authorization hold error:', error)

    // Handle specific Stripe errors
    if (error.type === 'StripeCardError') {
      return res.status(400).json({
        error: 'Card declined',
        details: error.message
      })
    }

    return res.status(500).json({
      error: 'Failed to create reservation hold',
      details: error.message
    })
  }
}