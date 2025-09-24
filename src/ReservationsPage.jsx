// Reservations Page - New England Steak and Seafood
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { getStripe, STRIPE_CONFIG, calculateHoldAmount, formatCurrency } from './utils/stripe.js'
import { reservationService } from './services/reservationService.js'
import PaymentForm from './components/PaymentForm.jsx'

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <img src="/images/nelogo100.png" alt="New England Steak and Seafood" />
          </Link>
        </div>
        <div className="nav-right">
          <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
            <Link to="/menus" onClick={() => setIsMenuOpen(false)}>MENUS</Link>
            <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>GALLERY</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>ABOUT</Link>
          </div>
          <button
            className="hamburger-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

const HeroSection = () => (
  <section className="hero-section">
    <div className="hero-bg" style={{
      backgroundImage: `url('/images/front.jpg')`
    }}>
      <div className="hero-overlay"></div>
    </div>
    <div className="hero-content">
      <div className="hero-text">
        <h1>RESERVE YOUR TABLE</h1>
        <div style={{ marginTop: '1rem' }}></div>
        <h2>SECURE YOUR SPOT</h2>
      </div>
    </div>
  </section>
)

const ReservationForm = () => {
  const [formData, setFormData] = useState({
    partySize: '5', // Default to minimum party size
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    specialRequests: '',
    smsConsent: false
  })

  const [isProcessing, setIsProcessing] = useState(false)
  const [reservationStep, setReservationStep] = useState('form') // 'form', 'payment', 'confirmation'
  const [paymentData, setPaymentData] = useState(null)

  const timeSlots = [
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'
  ]

  const partySize = parseInt(formData.partySize)
  const isEligibleForReservation = partySize >= STRIPE_CONFIG.minimumPartySize
  const holdAmount = calculateHoldAmount(partySize)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!isEligibleForReservation) {
      alert(`Reservations are available for parties of ${STRIPE_CONFIG.minimumPartySize} or more. For smaller parties, please call us directly at 508.478.0871`)
      return
    }

    // Move to payment step
    setReservationStep('payment')
  }

  const handlePaymentSuccess = async (paymentMethod) => {
    console.log('handlePaymentSuccess called with:', paymentMethod)
    setIsProcessing(true)

    try {
      // Create authorization hold via API
      console.log('Calling API with formData:', formData)
      const holdResult = await reservationService.createReservationHold(formData)

      // Confirm payment with Stripe
      const paymentIntent = await reservationService.confirmPayment(
        holdResult.client_secret,
        paymentMethod
      )

      // Store payment data for confirmation
      setPaymentData({
        reservation_id: holdResult.reservation_id,
        payment_intent_id: paymentIntent.id,
        hold_amount: holdResult.hold_amount
      })

      setReservationStep('confirmation')
    } catch (error) {
      console.error('Payment error:', error)
      alert(`Payment failed: ${error.message}`)
      setReservationStep('form')
    } finally {
      setIsProcessing(false)
    }
  }

  const handlePaymentError = (error) => {
    alert(`Payment error: ${error}`)
    setReservationStep('form')
  }

  const simulateReservationProcess = async () => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000))

    // In a real implementation, this would:
    // 1. Check availability
    // 2. Create payment intent for authorization hold
    // 3. Store reservation details
    // 4. Send confirmation email/SMS
    console.log('Reservation processed:', {
      ...formData,
      holdAmount,
      timestamp: new Date().toISOString()
    })
  }

  return (
    <section className="reservation-section">
      <div className="reservation-container">
        <div className="reservation-form-wrapper">
          <h2 className="reservation-title">MAKE A RESERVATION</h2>
          <p className="reservation-subtitle">Book your table for an unforgettable dining experience</p>

          {reservationStep === 'form' && (
            <div className="guarantee-info">
              <div className="guarantee-card">
                <h3>🛡️ Table Guarantee System</h3>
                <p>For parties of {STRIPE_CONFIG.minimumPartySize} or more, we require a courtesy hold of <strong>{formatCurrency(STRIPE_CONFIG.holdAmountPerGuest)} per guest</strong> to secure your table.</p>
                <ul>
                  <li>✅ Hold is <strong>released when you arrive</strong></li>
                  <li>✅ <strong>Cancel up to 24 hours</strong> before - no charge</li>
                  <li>✅ Think of it as us <strong>saving your seat</strong></li>
                </ul>
                {isEligibleForReservation && (
                  <p className="total-hold">Total hold for your party: <strong>{formatCurrency(holdAmount)}</strong></p>
                )}
              </div>
            </div>
          )}

          {reservationStep === 'payment' && (
            <div className="payment-step">
              <h3>💳 Payment Authorization</h3>
              <div className="reservation-summary">
                <h4>Reservation Summary:</h4>
                <p><strong>Party Size:</strong> {formData.partySize} guests</p>
                <p><strong>Date & Time:</strong> {formData.date} at {formData.time}</p>
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Phone:</strong> {formData.phone}</p>
              </div>

              <PaymentForm
                onPaymentSuccess={handlePaymentSuccess}
                onPaymentError={handlePaymentError}
                holdAmount={holdAmount}
                isProcessing={isProcessing}
                setIsProcessing={setIsProcessing}
              />

              <button
                onClick={() => setReservationStep('form')}
                className="back-button"
              >
                ← Back to Form
              </button>
            </div>
          )}

          {reservationStep === 'confirmation' && paymentData && (
            <div className="confirmation-message">
              <h3>🎉 Reservation Confirmed!</h3>
              <p>Thank you, {formData.name}! Your table for {formData.partySize} guests on {formData.date} at {formData.time} is confirmed.</p>

              <div className="reservation-details">
                <p><strong>Reservation ID:</strong> {paymentData.reservation_id}</p>
                <p><strong>Hold Amount:</strong> {formatCurrency(paymentData.hold_amount)} (released upon arrival)</p>
                <p><strong>Status:</strong> Authorization Hold Active</p>
              </div>

              <div className="next-steps">
                <h4>What's Next:</h4>
                <ul>
                  <li>✅ Confirmation email sent to {formData.email}</li>
                  <li>📱 SMS reminder 24 hours before your reservation</li>
                  <li>🏪 Hold will be released when you arrive</li>
                  <li>📞 Cancel up to 24 hours before - no charge</li>
                </ul>
              </div>

              <button onClick={() => {
                setReservationStep('form')
                setFormData({partySize: '5', date: '', time: '', name: '', phone: '', email: '', specialRequests: ''})
                setPaymentData(null)
              }}>
                Make Another Reservation
              </button>
            </div>
          )}

          {reservationStep === 'form' && (

          <form onSubmit={handleSubmit} className="reservation-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="partySize">PARTY SIZE</label>
                <select
                  id="partySize"
                  value={formData.partySize}
                  onChange={(e) => setFormData({...formData, partySize: e.target.value})}
                  className="form-select"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="7">7 Guests</option>
                  <option value="8">8 Guests</option>
                  <option value="9+">9+ Guests</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="date">DATE</label>
                <input
                  type="date"
                  id="date"
                  value={formData.date}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="time">PREFERRED TIME</label>
              <div className="time-slots">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    className={`time-slot ${formData.time === time ? 'selected' : ''}`}
                    onClick={() => setFormData({...formData, time: time})}
                  >
                    {time}
                    <span className="availability">✓ Available</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">FULL NAME</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="form-input"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">PHONE NUMBER</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="form-input"
                  placeholder="(508) 123-4567"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">EMAIL ADDRESS</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="form-input"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="specialRequests">SPECIAL REQUESTS (OPTIONAL)</label>
              <textarea
                id="specialRequests"
                value={formData.specialRequests}
                onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                className="form-textarea"
                placeholder="Anniversary dinner, dietary restrictions, preferred seating..."
                rows="3"
              />
            </div>

            <div className="form-group sms-consent">
              <div className="sms-consent-box">
                <input
                  type="checkbox"
                  id="smsConsent"
                  checked={formData.smsConsent || false}
                  onChange={(e) => setFormData({...formData, smsConsent: e.target.checked})}
                  required
                />
                <label htmlFor="smsConsent" className="sms-consent-label">
                  I consent to receive SMS text messages from New England Steak & Seafood for reservation confirmations, reminders, and updates.
                  Message and data rates may apply. Reply STOP to opt out at any time.
                  <br />
                  <small>By providing your phone number, you agree to receive SMS communications from us at (833) 722-3840.
                  <a href="/terms" target="_blank" style={{color: '#8B4513', textDecoration: 'underline'}}> View full SMS terms & privacy policy.</a></small>
                </label>
              </div>
            </div>

            <button type="submit" className="reserve-button" disabled={isProcessing}>
              {isProcessing ? 'Processing...' :
               isEligibleForReservation ? `SECURE TABLE (${formatCurrency(holdAmount)} hold)` :
               'RESERVE YOUR TABLE'}
            </button>

            {!isEligibleForReservation && (
              <p className="form-note warning">
                ⚠️ Parties under {STRIPE_CONFIG.minimumPartySize} guests: Please call 508.478.0871 directly
              </p>
            )}

            <p className="form-note">
              * Table guarantee holds are released when you arrive
            </p>
          </form>
          )}
        </div>

        <div className="reservation-info">
          <div className="info-card">
            <h3>RESERVATION HOURS</h3>
            <div className="hours-list">
              <div className="hour-item">
                <span>Wednesday</span>
                <span>11:30 AM - 9:00 PM</span>
              </div>
              <div className="hour-item">
                <span>Thursday</span>
                <span>11:30 AM - 9:00 PM</span>
              </div>
              <div className="hour-item">
                <span>Friday</span>
                <span>11:30 AM - 10:00 PM</span>
              </div>
              <div className="hour-item">
                <span>Saturday</span>
                <span>4:00 PM - 10:00 PM</span>
              </div>
              <div className="hour-item">
                <span>Sunday</span>
                <span>12:00 PM - 9:00 PM</span>
              </div>
              <div className="hour-item">
                <span>Monday</span>
                <span>4:00 PM - 9:00 PM</span>
              </div>
              <div className="hour-item closed">
                <span>Tuesday</span>
                <span>CLOSED</span>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h3>CONTACT US</h3>
            <div className="contact-info">
              <p><strong>Phone:</strong> 508.478.0871</p>
              <p><strong>Address:</strong> Route 16, Mendon MA</p>
              <p><strong>Email:</strong> info@nesteak.com</p>
            </div>
            <p className="contact-note">
              For parties of 9 or more, please call directly to discuss availability and special arrangements.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ReservationsPage() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <ReservationForm />
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <h3>New England Steak and Seafood</h3>
          </div>
          <div className="footer-right">
            <p>Rt. 16, Mendon MA</p>
            <p>508.478.0871 or 508.473.5079</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ReservationsPage