// Vercel Serverless Function - Release Authorization Hold
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

    // Cancel the authorization hold (releases the funds)
    const paymentIntent = await stripe.paymentIntents.cancel(payment_intent_id)

    // Log the release for tracking
    console.log('Hold released:', {
      payment_intent_id,
      reservation_id,
      reason: reason || 'Customer arrived',
      released_at: new Date().toISOString()
    })

    res.status(200).json({
      success: true,
      message: 'Authorization hold released successfully',
      payment_intent_id: paymentIntent.id,
      status: paymentIntent.status
    })

  } catch (error) {
    console.error('Hold release error:', error)

    return res.status(500).json({
      error: 'Failed to release hold',
      details: process.env.NODE_ENV === 'development' ? error.message : 'Internal server error'
    })
  }
}