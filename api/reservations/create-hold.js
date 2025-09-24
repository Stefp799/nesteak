import Stripe from 'stripe'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    console.log('Creating reservation hold...')
    console.log('Request body:', JSON.stringify(req.body, null, 2))

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

    // Create simple Payment Intent (working version)
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

    // SMS notification (simple fetch - no complex dependencies)
    const smsMessage = `New England Steak & Seafood
Reservation confirmed!
${partySizeNum} guests ${date} ${time}
Hold: $${totalHoldAmount}
ID: ${reservationId}
508.478.0871`

    // Simple SMS sending with Textbelt
    let smsResult = { success: true, demo: true }
    if (process.env.TEXTBELT_API_KEY) {
      try {
        const smsResponse = await fetch('https://textbelt.com/text', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            phone: phone,
            message: smsMessage,
            key: process.env.TEXTBELT_API_KEY
          })
        })
        const smsData = await smsResponse.json()
        console.log('SMS API response:', smsData)
        smsResult = { success: smsData.success || false, demo: false, textId: smsData.textId }
      } catch (error) {
        console.log('SMS error:', error.message)
        smsResult = { success: false, demo: true, error: error.message }
      }
    } else {
      console.log('No TEXTBELT_API_KEY - SMS demo mode')
    }

    // Return success response
    res.status(200).json({
      success: true,
      reservation_id: reservationId,
      client_secret: paymentIntent.client_secret,
      payment_intent_id: paymentIntent.id,
      hold_amount: totalHoldAmount,
      message: 'Reservation hold created with SMS notification!',
      sms_sent: smsResult.success,
      sms_demo: smsResult.demo,
      sms_text_id: smsResult.textId,
      email_sent: false,
      email_demo: true
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