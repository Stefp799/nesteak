import Stripe from 'stripe'

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    // Get payment intents that are awaiting capture (authorization holds)
    const paymentIntents = await stripe.paymentIntents.list({
      limit: 50,
      expand: ['data.payment_method']
    })

    // Filter for active reservation holds
    const activeReservations = paymentIntents.data
      .filter(pi =>
        pi.status === 'requires_capture' &&
        pi.metadata.type === 'reservation_hold'
      )
      .map(pi => ({
        payment_intent_id: pi.id,
        reservation_id: pi.metadata.reservation_id || 'N/A',
        customer_name: pi.metadata.customer_name,
        customer_phone: pi.metadata.customer_phone,
        customer_email: pi.metadata.customer_email,
        party_size: pi.metadata.party_size,
        reservation_date: pi.metadata.reservation_date,
        reservation_time: pi.metadata.reservation_time,
        special_requests: pi.metadata.special_requests,
        hold_amount: pi.amount / 100,
        created_at: new Date(pi.created * 1000).toISOString(),
        status: pi.status
      }))
      .sort((a, b) => new Date(a.reservation_date + ' ' + a.reservation_time) - new Date(b.reservation_date + ' ' + b.reservation_time))

    res.status(200).json({
      success: true,
      reservations: activeReservations,
      count: activeReservations.length
    })

  } catch (error) {
    console.error('Error fetching active reservations:', error)
    res.status(500).json({
      error: 'Failed to fetch active reservations',
      details: error.message
    })
  }
}