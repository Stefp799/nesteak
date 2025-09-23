// Vercel Serverless Function - Create Authorization Hold
import Stripe from 'stripe'

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Production Demo Mode - simulate Stripe integration
    console.log('Processing reservation hold request')
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

    // Production Demo Mode - simulate Stripe response
    await new Promise(resolve => setTimeout(resolve, 1000)) // Simulate API delay

    const demoPaymentIntent = {
      id: `pi_demo_${Date.now()}`,
      client_secret: `pi_demo_${Date.now()}_secret_demo`,
      status: 'requires_capture',
      amount: totalHoldAmount * 100,
      currency: 'usd',
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
    }

    // Generate unique reservation ID
    const reservationId = `RES-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`

    // Return success response with demo data
    res.status(200).json({
      success: true,
      reservation_id: reservationId,
      client_secret: demoPaymentIntent.client_secret,
      payment_intent_id: demoPaymentIntent.id,
      hold_amount: totalHoldAmount,
      message: 'Production Demo: Reservation hold created successfully',
      demo_mode: true
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