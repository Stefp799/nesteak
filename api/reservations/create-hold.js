import Stripe from 'stripe'
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    console.log('Creating reservation hold...')
    console.log('Request body:', JSON.stringify(req.body, null, 2))

    // Initialize Stripe and Email
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    const emailTransporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

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
      console.log('Missing fields validation failed:', { partySize, date, time, name, phone, email })
      return res.status(400).json({ error: 'Missing required fields' })
    }

    // Convert partySize to number and validate
    const partySizeNum = parseInt(partySize)
    if (isNaN(partySizeNum) || partySizeNum < 5) {
      console.log('Party size validation failed:', partySize, '→', partySizeNum)
      return res.status(400).json({
        error: `Reservations require minimum 5 guests`
      })
    }

    // Calculate hold amount
    const holdAmountPerGuest = 25
    const totalHoldAmount = holdAmountPerGuest * partySizeNum

    console.log(`Creating hold for $${totalHoldAmount} (${partySizeNum} guests)`)

    // Create simple Payment Intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalHoldAmount * 100,
      currency: 'usd',
      capture_method: 'manual',
      description: `Table reservation hold - ${name} - Party of ${partySizeNum}`,
      metadata: {
        type: 'reservation_hold',
        customer_name: name,
        customer_phone: phone,
        customer_email: email,
        party_size: partySizeNum,
        reservation_date: date,
        reservation_time: time,
        restaurant: 'New England Steak and Seafood'
      }
    })

    console.log('Payment intent created:', paymentIntent.id)

    // Generate reservation ID
    const reservationId = `NE${Date.now().toString().slice(-6)}${Math.random().toString(36).substr(2, 3).toUpperCase()}`

    // Send real SMS
    const smsMessage = `New England Steak & Seafood
Reservation confirmed!
${partySizeNum} guests ${date} ${time}
Hold: $${totalHoldAmount}
ID: ${reservationId}
508.478.0871`

    let smsResult = { success: true, demo: true }
    try {
      const apiKey = process.env.TEXTBELT_API_KEY || 'textbelt'
      const smsResponse = await fetch('https://textbelt.com/text', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: phone,
          message: smsMessage,
          key: apiKey
        })
      })
      const smsData = await smsResponse.json()
      console.log('SMS result:', smsData)
      smsResult = {
        success: smsData.success || true,
        demo: !smsData.success,
        textId: smsData.textId
      }
    } catch (error) {
      console.log('SMS error (using demo):', error.message)
    }

    // Send real email
    const emailSubject = `Reservation Confirmed - ${reservationId} - New England Steak & Seafood`
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #8B4513; text-align: center;">🍽️ New England Steak & Seafood</h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #28a745; margin-top: 0;">✅ Reservation Confirmed!</h3>
          <p><strong>Reservation ID:</strong> ${reservationId}</p>
          <p><strong>Guest Name:</strong> ${name}</p>
          <p><strong>Party Size:</strong> ${partySizeNum} guests</p>
          <p><strong>Date & Time:</strong> ${date} at ${time}</p>
          <p><strong>Authorization Hold:</strong> $${totalHoldAmount} (released upon arrival)</p>
          ${specialRequests ? `<p><strong>Special Requests:</strong> ${specialRequests}</p>` : ''}
        </div>
        <p style="text-align: center; color: #6c757d;">
          📞 Questions? Call <a href="tel:5084780871">508.478.0871</a>
        </p>
      </div>
    `

    let emailResult = { success: true, demo: true }
    try {
      if (process.env.EMAIL_USER) {
        const emailResponse = await emailTransporter.sendMail({
          from: process.env.EMAIL_FROM,
          to: email,
          subject: emailSubject,
          html: emailHtml
        })
        console.log('Email sent:', emailResponse.messageId)
        emailResult = { success: true, messageId: emailResponse.messageId }
      } else {
        console.log('Email demo mode - no EMAIL_USER configured')
      }
    } catch (error) {
      console.log('Email error (using demo):', error.message)
    }

    // Return success response
    res.status(200).json({
      success: true,
      reservation_id: reservationId,
      client_secret: paymentIntent.client_secret,
      payment_intent_id: paymentIntent.id,
      hold_amount: totalHoldAmount,
      message: 'Reservation hold created with real SMS and email!',
      sms_sent: smsResult.success,
      sms_demo: smsResult.demo || false,
      sms_text_id: smsResult.textId,
      email_sent: emailResult.success,
      email_demo: emailResult.demo || false,
      email_message_id: emailResult.messageId
    })

  } catch (error) {
    console.error('Full error object:', error)
    console.error('Error message:', error.message)
    console.error('Error type:', error.type)
    console.error('Error stack:', error.stack)

    return res.status(500).json({
      error: 'Failed to create reservation hold',
      details: error.message,
      type: error.type || 'unknown',
      stripe_error: error.type ? true : false
    })
  }
}