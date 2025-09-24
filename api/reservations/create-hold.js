import Stripe from 'stripe'

// Simple SMS function
async function sendSMS(to, message) {
  try {
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
    console.log('SMS result:', result)
    return { success: true, demo: !result.success }
  } catch (error) {
    console.log('SMS error (using demo mode):', error.message)
    return { success: true, demo: true }
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    console.log('Creating reservation hold with SMS...')

    // Initialize Stripe
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

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

    // Validate party size
    if (parseInt(partySize) < 5) {
      return res.status(400).json({
        error: `Reservations require minimum 5 guests`
      })
    }

    // Calculate hold amount
    const holdAmountPerGuest = 25
    const totalHoldAmount = holdAmountPerGuest * parseInt(partySize)

    console.log(`Creating hold for $${totalHoldAmount} (${partySize} guests)`)

    // Create Payment Intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalHoldAmount * 100,
      currency: 'usd',
      capture_method: 'manual',
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

    console.log('Payment intent created:', paymentIntent.id)

    // Generate reservation ID
    const reservationId = `NE${Date.now().toString().slice(-6)}${Math.random().toString(36).substr(2, 3).toUpperCase()}`

    // Send confirmation SMS
    const confirmationMessage = `New England Steak & Seafood
Reservation confirmed!
${partySize} guests ${date} ${time}
Hold: $${totalHoldAmount}
ID: ${reservationId}
508.478.0871`

    const smsResult = await sendSMS(phone, confirmationMessage)

    // Return success response
    res.status(200).json({
      success: true,
      reservation_id: reservationId,
      client_secret: paymentIntent.client_secret,
      payment_intent_id: paymentIntent.id,
      hold_amount: totalHoldAmount,
      message: 'Stripe payment intent created with SMS notification!',
      sms_sent: smsResult.success,
      sms_demo: smsResult.demo || false,
      email_sent: false,
      email_demo: true
    })

  } catch (error) {
    console.error('Reservation hold error:', error)

    return res.status(500).json({
      error: 'Failed to create reservation hold',
      details: error.message
    })
  }
}