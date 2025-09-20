// Reservations Page - New England Steak and Seafood
import { Link } from 'react-router-dom'
import { useState } from 'react'

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
            <Link to="/reservations" onClick={() => setIsMenuOpen(false)}>RESERVATIONS</Link>
          </div>
          <button className="reservations-btn">RESERVATIONS</button>
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
    partySize: '2',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    specialRequests: ''
  })

  const timeSlots = [
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM',
    '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Demo Mode: Reservation system would process booking here!')
  }

  return (
    <section className="reservation-section">
      <div className="reservation-container">
        <div className="reservation-form-wrapper">
          <h2 className="reservation-title">MAKE A RESERVATION</h2>
          <p className="reservation-subtitle">Book your table for an unforgettable dining experience</p>

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

            <button type="submit" className="reserve-button">
              RESERVE YOUR TABLE
            </button>

            <p className="form-note">
              * Reservations are confirmed within 2 hours during business hours
            </p>
          </form>
        </div>

        <div className="reservation-info">
          <div className="info-card">
            <h3>RESERVATION HOURS</h3>
            <div className="hours-list">
              <div className="hour-item">
                <span>Wednesday - Thursday</span>
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