import Stripe from 'stripe'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    console.log('Simple hold test...')

    // Initialize Stripe
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

    const {
      partySize,
      date,
      time,
      name,
      phone,
      email
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

    // Create simple Payment Intent
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
        restaurant: 'New England Steak and Seafood'
      }
    })

    console.log('Payment intent created:', paymentIntent.id)

    // Generate reservation ID
    const reservationId = `NE${Date.now().toString().slice(-6)}${Math.random().toString(36).substr(2, 3).toUpperCase()}`

    // Return success response
    res.status(200).json({
      success: true,
      reservation_id: reservationId,
      client_secret: paymentIntent.client_secret,
      payment_intent_id: paymentIntent.id,
      hold_amount: totalHoldAmount,
      message: 'Simple Stripe payment intent created successfully!',
      sms_sent: false,
      email_sent: false
    })

  } catch (error) {
    console.error('Simple hold error:', error)

    return res.status(500).json({
      error: 'Failed to create reservation hold',
      details: error.message
    })
  }
}