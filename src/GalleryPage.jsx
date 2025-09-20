// Gallery Page
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

const VideoSection = () => (
  <section className="video-section">
    <div className="video-container">
      <div className="video-item">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nsrKIkprI9s"
          title="New England Steak and Seafood Video 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="video-item">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/v4TA3bePMlc"
          title="New England Steak and Seafood Video 2"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </section>
)

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState(0) // Start with first image showing

  const images = [
    { src: '/images/primerib.jpg', alt: 'Prime Rib' },
    { src: '/images/steamedclams.jpg', alt: 'Steamed Clams' },
    { src: '/images/tomahawk.jpg', alt: 'Tomahawk Steak' },
    { src: '/images/lobster.jpg', alt: 'Lobster' },
    { src: '/images/chickenparm.jpg', alt: 'Chicken Parmigiana' },
    { src: '/images/kingcut.jpg', alt: 'King Cut Prime Rib' },
    { src: '/images/primerib3.jpg', alt: 'Prime Rib Special' },
    { src: '/images/front.jpg', alt: 'Restaurant Front' }
  ]

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToImage = (index) => {
    setSelectedImage(index)
  }

  return (
    <section className="gallery-section">
      {/* Large Main Image Display */}
      <div className="gallery-main-display">
        <button className="gallery-nav-btn gallery-prev" onClick={prevImage}>‹</button>
        <div className="gallery-main-image-container">
          <img
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            className="gallery-main-image"
          />
          <div className="gallery-main-caption">
            {images[selectedImage].alt}
          </div>
        </div>
        <button className="gallery-nav-btn gallery-next" onClick={nextImage}>›</button>
      </div>

      {/* Thumbnail Grid */}
      <div className="gallery-thumbnails">
        {images.map((image, index) => (
          <div
            key={index}
            className={`gallery-thumbnail ${index === selectedImage ? 'active' : ''}`}
            onClick={() => goToImage(index)}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
    </section>
  )
}

function GalleryPage() {
  return (
    <div>
      <Navigation />
      <VideoSection />
      <GallerySection />
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

export default GalleryPage