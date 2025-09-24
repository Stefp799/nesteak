import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  try {
    // Get the last 10 payment intents
    const paymentIntents = await stripe.paymentIntents.list({
      limit: 10
    })

    const summary = paymentIntents.data.map(pi => ({
      id: pi.id.slice(-8), // Last 8 chars for easy identification
      amount: `$${pi.amount / 100}`,
      status: pi.status,
      created: new Date(pi.created * 1000).toLocaleString(),
      customer_name: pi.metadata.customer_name || 'N/A'
    }))

    res.status(200).json({
      success: true,
      recent_transactions: summary,
      status_counts: {
        requires_capture: summary.filter(s => s.status === 'requires_capture').length,
        requires_payment_method: summary.filter(s => s.status === 'requires_payment_method').length,
        incomplete: summary.filter(s => s.status === 'requires_payment_method').length
      }
    })

  } catch (error) {
    res.status(500).json({
      error: 'Failed to fetch Stripe status',
      details: error.message
    })
  }
}