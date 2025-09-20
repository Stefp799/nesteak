// Grill 23 & Bar Steakhouse Website
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
      backgroundImage: `url('/images/primerib3.jpg')`
    }}>
      <div className="hero-overlay"></div>
    </div>
    <div className="hero-content">
      <div className="hero-text">
        <h1>METRO WEST PREMIER</h1>
        <h2>STEAKHOUSE</h2>
      </div>
    </div>
  </section>
)

const WhiteSection = () => (
  <section className="white-section">
    <div className="white-content">
      <div className="text-content">
        <h2 className="white-headline">SOME THINGS JUST GET BETTER WITH AGE</h2>
        <p>New England Steak and Seafood has been owned and operated by the Quirk family since 1956. For over 69 years we have been providing the area with unsurpassed excellence, in casual dining, in a quaint Old New England atmosphere.</p>
      </div>
    </div>
  </section>
)

const ImageDividerSection = () => {
  const images = [
    { src: '/images/primerib.jpg', alt: 'Prime Rib' },
    { src: '/images/steamedclams.jpg', alt: 'Steamed Clams' },
    { src: '/images/tomahawk.jpg', alt: 'Tomahawk Steak' },
    { src: '/images/lobster.jpg', alt: 'Lobster' },
    { src: '/images/chickenparm.jpg', alt: 'Chicken Parmigiana' },
    { src: '/images/kingcut.jpg', alt: 'King Cut Prime Rib' }
  ]
  return (
    <section className="image-divider">
      <div className="image-grid">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image.src} alt={image.alt} />
            <div className="overlay"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

const MenuSection = () => (
  <section className="menu-section">
    <div className="menu-content">
      <div className="menu-text">
        <div className="menu-header">OUR MENUS</div>
        <div className="menu-main">
          <h2>OUR LEGENDARY TAKE ON<br />STEAKHOUSE STANDARDS</h2>
        </div>
        <Link to="/menus" className="menu-btn">VIEW THE MENUS</Link>
      </div>
    </div>
  </section>
)

function App() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <WhiteSection />
      <ImageDividerSection />
      <MenuSection />
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

export default App