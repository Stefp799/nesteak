// Vercel Serverless Function - Capture Authorization Hold (for no-shows)
import Stripe from 'stripe'

// Initialize Stripe with secret key
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16'
})

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { payment_intent_id, reservation_id, reason } = req.body

    // Validate required fields
    if (!payment_intent_id) {
      return res.status(400).json({ error: 'Payment intent ID required' })
    }

    // Capture the authorization hold (charges the customer)
    const paymentIntent = await stripe.paymentIntents.capture(payment_intent_id)

    // Log the capture for tracking
    console.log('Hold captured:', {
      payment_intent_id,
      reservation_id,
      reason: reason || 'No-show policy enforcement',
      captured_at: new Date().toISOString(),
      amount: paymentIntent.amount / 100
    })

    res.status(200).json({
      success: true,
      message: 'Authorization hold captured successfully',
      payment_intent_id: paymentIntent.id,
      amount_captured: paymentIntent.amount / 100,
      status: paymentIntent.status
    })

  } catch (error) {
    console.error('Hold capture error:', error)

    return res.status(500).json({
      error: 'Failed to capture hold',
      details: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    })
  }
}