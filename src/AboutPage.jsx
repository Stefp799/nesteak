// About Page
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
          <Link to="/reservations" className="reservations-btn">RESERVATIONS</Link>
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
        <h1>ABOUT US</h1>
      </div>
    </div>
  </section>
)

const ContactSection = () => (
  <section className="menu-section-content">
    <div className="menu-category">
      <h2 className="menu-category-title">CONTACT</h2>
      <div className="hours-grid">
        <div className="hours-item">
          <div className="hours-item-header">
            <span className="hours-item-day">RESTAURANT</span>
            <span className="hours-item-time">New England Steak and Seafood</span>
          </div>
        </div>
        <div className="hours-item">
          <div className="hours-item-header">
            <span className="hours-item-day">ADDRESS</span>
            <span className="hours-item-time">Rt. 16, Mendon MA</span>
          </div>
        </div>
        <div className="hours-item">
          <div className="hours-item-header">
            <span className="hours-item-day">PHONE</span>
            <span className="hours-item-time">508.478.0871 or 508.473.5079</span>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const HoursSection = () => (
  <section className="menu-section-content">
    <div className="menu-category">
      <h2 className="menu-category-title">HOURS</h2>
      <div className="hours-grid">
        <div className="hours-item">
          <div className="hours-item-header">
            <span className="hours-item-day">SATURDAY</span>
            <span className="hours-item-time">4:00 PM - 10:00 PM</span>
          </div>
        </div>
        <div className="hours-item">
          <div className="hours-item-header">
            <span className="hours-item-day">SUNDAY</span>
            <span className="hours-item-time">12:00 PM - 9:00 PM</span>
          </div>
        </div>
        <div className="hours-item">
          <div className="hours-item-header">
            <span className="hours-item-day">MONDAY</span>
            <span className="hours-item-time">4:00 PM - 9:00 PM</span>
          </div>
        </div>
        <div className="hours-item">
          <div className="hours-item-header">
            <span className="hours-item-day">TUESDAY</span>
            <span className="hours-item-time">CLOSED</span>
          </div>
        </div>
        <div className="hours-item">
          <div className="hours-item-header">
            <span className="hours-item-day">WEDNESDAY</span>
            <span className="hours-item-time">11:30 AM - 9:00 PM</span>
          </div>
        </div>
        <div className="hours-item">
          <div className="hours-item-header">
            <span className="hours-item-day">THURSDAY</span>
            <span className="hours-item-time">11:30 AM - 9:00 PM</span>
          </div>
        </div>
        <div className="hours-item">
          <div className="hours-item-header">
            <span className="hours-item-day">FRIDAY</span>
            <span className="hours-item-time">11:30 AM - 10:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  </section>
)

function AboutPage() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <ContactSection />
      <HoursSection />
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

export default AboutPage