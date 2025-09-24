import Stripe from 'stripe'

export default async function handler(req, res) {
  try {
    // Test if Stripe can initialize
    if (!process.env.STRIPE_SECRET_KEY) {
      return res.status(500).json({
        error: 'STRIPE_SECRET_KEY not found',
        env_keys: Object.keys(process.env).filter(key => key.includes('STRIPE'))
      })
    }

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

    // Test creating a simple payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 2500, // $25.00
      currency: 'usd',
      capture_method: 'manual'
    })

    res.status(200).json({
      success: true,
      payment_intent_id: paymentIntent.id,
      status: paymentIntent.status,
      message: 'Stripe test successful'
    })

  } catch (error) {
    res.status(500).json({
      error: 'Stripe test failed',
      details: error.message,
      type: error.type
    })
  }
}