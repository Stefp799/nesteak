export default async function handler(req, res) {
  try {
    // Test with EXACT frontend data format from your console log
    const frontendData = {
      partySize: "7",  // String, not number
      date: "2025-09-26",
      time: "7:00 PM",
      name: "Stefano Piardi",
      phone: "508-320-2399",
      email: "piardis@gmail.com",
      specialRequests: ""
    }

    console.log('Testing with frontend data format:', frontendData)

    const response = await fetch('https://nesteak.vercel.app/api/reservations/create-hold', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(frontendData)
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
      })(),
      parsed_response: (() => {
        try {
          return JSON.parse(responseText)
        } catch {
          return null
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