// Vercel Serverless Function - Create Authorization Hold
const Stripe = require('stripe')

// Initialize Stripe with secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16'
})

module.exports = async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
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
    const minimumPartySize = parseInt(process.env.VITE_MINIMUM_PARTY_SIZE) || 5
    if (parseInt(partySize) < minimumPartySize) {
      return res.status(400).json({
        error: `Reservations require minimum ${minimumPartySize} guests`
      })
    }

    // Calculate hold amount
    const holdAmountPerGuest = parseInt(process.env.VITE_HOLD_AMOUNT_PER_GUEST) || 25
    const totalHoldAmount = holdAmountPerGuest * parseInt(partySize)

    // Create a test payment method for demo purposes
    const paymentMethod = await stripe.paymentMethods.create({
      type: 'card',
      card: {
        number: '4242424242424242',
        exp_month: 12,
        exp_year: 2025,
        cvc: '123',
      },
      billing_details: {
        name: name
      }
    })

    // Create Payment Intent for authorization hold
    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalHoldAmount * 100, // Stripe uses cents
      currency: 'usd',
      payment_method: paymentMethod.id,
      capture_method: 'manual', // This creates an authorization hold
      confirm: true, // Confirm the payment immediately
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
        restaurant: process.env.VITE_RESTAURANT_NAME || 'New England Steak and Seafood',
        created_at: new Date().toISOString()
      }
    })

    // Generate unique reservation ID
    const reservationId = `RES-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`

    // Return success response with client secret for frontend
    res.status(200).json({
      success: true,
      reservation_id: reservationId,
      client_secret: paymentIntent.client_secret,
      payment_intent_id: paymentIntent.id,
      hold_amount: totalHoldAmount,
      message: 'Reservation hold created successfully'
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
      details: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    })
  }
}