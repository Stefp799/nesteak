export default async function handler(req, res) {
  try {
    console.log('DEBUG: Method:', req.method)
    console.log('DEBUG: Headers:', JSON.stringify(req.headers, null, 2))
    console.log('DEBUG: Body:', JSON.stringify(req.body, null, 2))

    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' })
    }

    // Test with the exact data format from frontend
    const {
      partySize,
      date,
      time,
      name,
      phone,
      email,
      specialRequests
    } = req.body

    res.status(200).json({
      success: true,
      debug: 'Data received successfully',
      received_data: {
        partySize,
        date,
        time,
        name,
        phone,
        email,
        specialRequests
      },
      partySize_type: typeof partySize,
      partySize_parsed: parseInt(partySize),
      validation_checks: {
        has_partySize: !!partySize,
        has_date: !!date,
        has_time: !!time,
        has_name: !!name,
        has_phone: !!phone,
        has_email: !!email
      }
    })

  } catch (error) {
    console.error('Debug endpoint error:', error)
    res.status(500).json({
      error: 'Debug failed',
      details: error.message,
      stack: error.stack
    })
  }
}