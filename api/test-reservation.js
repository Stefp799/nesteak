export default async function handler(req, res) {
  try {
    // Test the create-hold endpoint with sample data
    const testData = {
      partySize: 6,
      date: '2025-01-15',
      time: '7:00 PM',
      name: 'Test Customer',
      phone: '5551234567',
      email: 'test@example.com',
      specialRequests: 'Test reservation'
    }

    const response = await fetch('https://nesteak.vercel.app/api/reservations/create-hold', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    })

    const responseText = await response.text()

    res.status(200).json({
      status_code: response.status,
      response_headers: Object.fromEntries(response.headers.entries()),
      response_body: responseText,
      is_json: (() => {
        try {
          JSON.parse(responseText)
          return true
        } catch {
          return false
        }
      })()
    })

  } catch (error) {
    res.status(500).json({
      error: 'Test failed',
      details: error.message
    })
  }
}