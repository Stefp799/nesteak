// Events Page
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
      backgroundImage: `url('/images/primeribparty.png')`
    }}>
      <div className="hero-overlay"></div>
    </div>
    <div className="hero-content">
      <div className="hero-text">
        <h1>EVENTS</h1>
      </div>
    </div>
  </section>
)

const EventsInfoSection = () => (
  <section className="menu-section-content">
    <div className="menu-category">
      <h2 className="menu-category-title">PRIVATE EVENTS</h2>
      <div className="hours-grid">
        <div className="hours-item">
          <div className="hours-item-header">
            <span className="hours-item-day">CORPORATE DINING</span>
            <span className="hours-item-time">Perfect for business meetings and client entertainment</span>
          </div>
        </div>
        <div className="hours-item">
          <div className="hours-item-header">
            <span className="hours-item-day">BIRTHDAY PARTIES</span>
            <span className="hours-item-time">Celebrate your special day with our signature prime rib</span>
          </div>
        </div>
        <div className="hours-item">
          <div className="hours-item-header">
            <span className="hours-item-day">REHEARSAL DINNERS</span>
            <span className="hours-item-time">Create memorable moments before your big day</span>
          </div>
        </div>
        <div className="hours-item">
          <div className="hours-item-header">
            <span className="hours-item-day">ANNIVERSARY CELEBRATIONS</span>
            <span className="hours-item-time">Honor your milestones in elegant style</span>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const CateringSection = () => (
  <section className="menu-section-content">
    <div className="menu-category">
      <h2 className="menu-category-title">CATERING SERVICES</h2>
      <div className="hours-grid">
        <div className="hours-item">
          <div className="hours-item-header">
            <span className="hours-item-day">OFF-SITE CATERING</span>
            <span className="hours-item-time">Bring our quality to your location</span>
          </div>
        </div>
        <div className="hours-item">
          <div className="hours-item-header">
            <span className="hours-item-day">HOLIDAY PARTIES</span>
            <span className="hours-item-time">Make your celebrations unforgettable</span>
          </div>
        </div>
        <div className="hours-item">
          <div className="hours-item-header">
            <span className="hours-item-day">WEDDING RECEPTIONS</span>
            <span className="hours-item-time">Your perfect day deserves perfect food</span>
          </div>
        </div>
        <div className="hours-item">
          <div className="hours-item-header">
            <span className="hours-item-day">CONTACT FOR PRICING</span>
            <span className="hours-item-time">508.478.0871 or 508.473.5079</span>
          </div>
        </div>
      </div>
    </div>
  </section>
)

function EventsPage() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <EventsInfoSection />
      <CateringSection />
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

export default EventsPage