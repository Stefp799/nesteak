import React, { useState, useEffect } from 'react'

function StaffPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [password, setPassword] = useState('')
  const [activeReservations, setActiveReservations] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [messageType, setMessageType] = useState('') // 'success' or 'error'

  const handleLogin = (e) => {
    e.preventDefault()
    if (password === 'staff2024') {
      setIsLoggedIn(true)
      setMessage('')
      fetchActiveReservations()
    } else {
      setMessage('Incorrect password')
      setMessageType('error')
    }
  }

  const fetchActiveReservations = async () => {
    try {
      const apiUrl = import.meta.env.DEV
        ? 'http://localhost:3001/api/reservations/active'
        : '/api/reservations/active'

      const response = await fetch(apiUrl)

      if (response.status === 404) {
        // Endpoint not found - probably old server version
        setMessage('Reservation list feature requires server restart. Please restart the backend server.')
        setMessageType('error')
        setActiveReservations([])
        return
      }

      const data = await response.json()

      if (response.ok) {
        setActiveReservations(data.reservations)
      } else {
        setMessage('Failed to load reservations')
        setMessageType('error')
      }
    } catch (error) {
      setMessage(`Error loading reservations: ${error.message}`)
      setMessageType('error')
    }
  }

  const handleAction = async (action, reservation) => {
    setIsLoading(true)
    setMessage('')

    try {
      const endpoint = action === 'show'
        ? '/api/reservations/release-hold'
        : '/api/reservations/capture-hold'

      const reason = action === 'show'
        ? 'Customer arrived - released by staff'
        : 'No-show - charged by staff'

      // Use localhost:3001 in development, relative path in production
      const apiUrl = import.meta.env.DEV
        ? `http://localhost:3001${endpoint}`
        : endpoint

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          payment_intent_id: reservation.payment_intent_id,
          reservation_id: reservation.reservation_id,
          reason: reason
        })
      })

      const data = await response.json()

      if (response.ok) {
        setMessage(data.message)
        setMessageType('success')
        // Refresh the reservations list
        fetchActiveReservations()
      } else {
        setMessage(data.error || 'Operation failed')
        setMessageType('error')
      }
    } catch (error) {
      setMessage(`Error: ${error.message}`)
      setMessageType('error')
    } finally {
      setIsLoading(false)
    }
  }


  // Login Screen
  if (!isLoggedIn) {
    return (
      <div className="staff-login-container">
        <div className="staff-login-card">
          <div className="staff-login-header">
            <div className="staff-login-icon">🍽️</div>
            <h2 className="staff-login-title">
              New England Steak & Seafood
            </h2>
            <p className="staff-login-subtitle">
              Staff Dashboard
            </p>
          </div>

          <div className="staff-login-form-card">
            <form className="staff-login-form" onSubmit={handleLogin}>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="staff-login-input"
                placeholder="Enter staff password"
              />

              <button
                type="submit"
                className="staff-login-button"
              >
                Log In
              </button>
            </form>

            {message && messageType === 'error' && (
              <div className="staff-login-error">
                <span className="staff-login-error-icon">❌</span>
                <span className="staff-login-error-text">{message}</span>
              </div>
            )}
          </div>

          <div className="staff-login-footer">
            <p className="staff-login-footer-text">
              Staff access only • Authorized personnel
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="staff-dashboard-container">
      <div className="staff-dashboard-card">
        <div className="staff-dashboard-header">
          <h1 className="staff-dashboard-title">
            🍽️ Staff Dashboard
          </h1>
          <p className="staff-dashboard-description">
            Active Reservations ({activeReservations.length})
          </p>
        </div>


        {message && (
          <div className={`staff-message ${
            messageType === 'success' ? 'staff-message-success' : 'staff-message-error'
          }`}>
            <div className="staff-message-icon">
              {messageType === 'success' ? '✅' : '❌'}
            </div>
            <div className="staff-message-text">{message}</div>
          </div>
        )}

        <div className="staff-reservations-list">
          {activeReservations.length === 0 ? (
            <div className="staff-no-reservations">
              No active reservations found.
            </div>
          ) : (
            activeReservations.map((reservation) => (
              <div key={reservation.payment_intent_id} className="staff-reservation-card">
                <div className="staff-reservation-info">
                  <div className="staff-reservation-main">
                    <h3 className="staff-reservation-name">{reservation.customer_name}</h3>
                    <p className="staff-reservation-details">
                      {reservation.party_size} guests • {reservation.reservation_date} at {reservation.reservation_time} • 📞 {reservation.customer_phone} • 📧 {reservation.customer_email}
                    </p>
                    {reservation.special_requests && (
                      <p className="staff-reservation-requests">
                        📝 {reservation.special_requests}
                      </p>
                    )}
                  </div>
                  <div className="staff-reservation-amount">
                    <span className="staff-hold-amount">${reservation.hold_amount}</span>
                    <span className="staff-hold-label">Hold</span>
                  </div>
                </div>

                <div className="staff-reservation-actions">
                  <button
                    onClick={() => handleAction('show', reservation)}
                    disabled={isLoading}
                    className="staff-action-button staff-button-show"
                  >
                    {isLoading ? '...' : '✅ SHOWED'}
                  </button>
                  <button
                    onClick={() => handleAction('no-show', reservation)}
                    disabled={isLoading}
                    className="staff-action-button staff-button-no-show"
                  >
                    {isLoading ? '...' : '❌ CHARGE'}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default StaffPage