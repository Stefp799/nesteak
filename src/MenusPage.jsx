// Menus Page - New England Steak and Seafood
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
      backgroundImage: `url('/images/steamedclams.jpg')`
    }}>
      <div className="hero-overlay"></div>
    </div>
    <div className="hero-content">
      <div className="hero-text">
        <h1>MENUS</h1>
      </div>
    </div>
  </section>
)

const MenuBand = ({ activeMenu, setActiveMenu }) => (
  <section className="menu-band">
    <div className="menu-band-content">
      <div
        className={`menu-band-item ${activeMenu === 'lunch' ? 'active' : ''}`}
        onClick={() => setActiveMenu('lunch')}
      >
        LUNCH
      </div>
      <div
        className={`menu-band-item ${activeMenu === 'dinner' ? 'active' : ''}`}
        onClick={() => setActiveMenu('dinner')}
      >
        DINNER
      </div>
      <div
        className={`menu-band-item ${activeMenu === 'wines' ? 'active' : ''}`}
        onClick={() => setActiveMenu('wines')}
      >
        DRINKS
      </div>
    </div>
  </section>
)

const LunchSection = () => (
  <section id="lunch" className="menu-section-content">
    <div className="menu-category">
      <h2 className="menu-category-title">STARTERS</h2>
      <div className="menu-items-grid">
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">FLASH FRIED CALAMARI</span>
            <span className="menu-item-price">$20.00</span>
          </div>
          <div className="menu-item-description">lightly breaded, hot peppers, lemon butter, marinara sauce</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">CLASSIC SHRIMP COCKTAIL</span>
            <span className="menu-item-price">$21.00</span>
          </div>
          <div className="menu-item-description">cocktail sauce, horseradish, lemon (gf)</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">FRIED MOZZARELLA</span>
            <span className="menu-item-price">$14.00</span>
          </div>
          <div className="menu-item-description">breaded whole milk mozzarella, marinara sauce, shaved parmesan</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">CRISPY CHICKEN FINGERS</span>
            <span className="menu-item-price">$16.00</span>
          </div>
          <div className="menu-item-description">choose dipping sauce: tomato, cayenne, honey mustard</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">THREE CHEESE NACHOS</span>
            <span className="menu-item-price">$17.00</span>
          </div>
          <div className="menu-item-description">crispy tortilla chips, molten baked cheese, sliced jalapeño peppers, shredded lettuce, chopped tomatoes & scallions, sour cream & salsa on the side</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">POTATO SKINS</span>
            <span className="menu-item-price">$18.00</span>
          </div>
          <div className="menu-item-description">western potato wedges, three cheeses, crushed bacon, green onions, sour cream</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">BUFFALO WINGS</span>
            <span className="menu-item-price">$20.00</span>
          </div>
          <div className="menu-item-description">crispy seasoned wing sauce tossed, served with house-made blue cheese dressing (choose bone-in or boneless chicken)</div>
        </div>
      </div>
    </div>

    <div className="menu-category">
      <h2 className="menu-category-title">ENTREES</h2>
      <div className="menu-items-grid">
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">SPINACH, CHEESE RAVIOLI</span>
            <span className="menu-item-price">$18.00</span>
          </div>
          <div className="menu-item-description">choice of scampi butter or tomato sauce</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">CHICKEN PARMIGIANA</span>
            <span className="menu-item-price">$22.00</span>
          </div>
          <div className="menu-item-description">breaded chicken breast, tomato sauce, blended cheese, choice of pasta</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">PASTA & MEATBALLS</span>
            <span className="menu-item-price">$18.00</span>
          </div>
          <div className="menu-item-description">choice of linguine or rigatoni</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">LINGUINE ALFREDO</span>
            <span className="menu-item-price">$15.00</span>
          </div>
          <div className="menu-item-description">parmesan cream sauce | add chicken cutlet 8</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">NY SIRLOIN</span>
            <span className="menu-item-price">$24.00</span>
          </div>
          <div className="menu-item-description">10oz hand cut steak, sourdough toast, choice of potato & house vegetable</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">SALISBURY STEAK</span>
            <span className="menu-item-price">$20.00</span>
          </div>
          <div className="menu-item-description">10oz chopped sirloin, mushroom sauce, choice of potato & house vegetable</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">CRUMB CRUSTED HADDOCK</span>
            <span className="menu-item-price">$23.00</span>
          </div>
          <div className="menu-item-description">buttery crumb baked, tartar sauce | add Newburg sauce 3</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">CAJUN GRILLED HADDOCK</span>
            <span className="menu-item-price">$23.00</span>
          </div>
          <div className="menu-item-description">house blackened seasoning, fresh lemon, cocktail sauce</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">GRILLED HADDOCK</span>
            <span className="menu-item-price">$23.00</span>
          </div>
          <div className="menu-item-description">dipped in Italian crumbs & grilled | add Newburg sauce 3</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">STUFFED DOVER SOLE</span>
            <span className="menu-item-price">$23.00</span>
          </div>
          <div className="menu-item-description">scallop & crab stuffing, Newburg sauce</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">FISH & CHIPS</span>
            <span className="menu-item-price">$23.00</span>
          </div>
          <div className="menu-item-description">corn flour breaded haddock, crispy chips, tartar or cocktail sauce</div>
        </div>
      </div>
    </div>

    <div className="menu-category">
      <h2 className="menu-category-title">SOUPS & SALADS</h2>
      <div className="menu-items-grid">
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">SOUP DU JOUR</span>
            <span className="menu-item-price">$8.00</span>
          </div>
          <div className="menu-item-description">prepared fresh daily</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">FRENCH ONION</span>
            <span className="menu-item-price">$11.00</span>
          </div>
          <div className="menu-item-description">bone broth, crostini, gruyere cheese crust</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">NEW ENGLAND CLAM CHOWDER</span>
            <span className="menu-item-price">$12.00</span>
          </div>
          <div className="menu-item-description">a New England staple</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">SEAFOOD CHOWDER</span>
            <span className="menu-item-price">$19.00</span>
          </div>
          <div className="menu-item-description">clams, scallops, lobster, fish</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">CAESAR</span>
            <span className="menu-item-price">$16.00</span>
          </div>
          <div className="menu-item-description">crisp romaine, pecorino romano, house croutons, creamy Caesar dressing | add anchovies 2 | add breaded chicken 8 | add steak tips 11 | add grilled shrimp 9</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">TOSSED GREENS</span>
            <span className="menu-item-price">$15.00</span>
          </div>
          <div className="menu-item-description">red onions, cucumbers, tomatoes, fresh greens (gf) | add Cajun chicken 8 | add tuna salad 5 | add steak tips 11 | add grilled shrimp 9</div>
        </div>
      </div>
    </div>

    <div className="menu-category">
      <h2 className="menu-category-title">SANDWICHES</h2>
      <div className="menu-items-grid">
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">STEAK HOUSE BURGER</span>
            <span className="menu-item-price">$16.00</span>
          </div>
          <div className="menu-item-description">1/2lb hand made burger, lettuce, tomatoes, brioche bun | add American cheese 1 | add house cheese blend 3 | add bacon 2 | add caramelized onions 4</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">HOT PASTRAMI</span>
            <span className="menu-item-price">$16.00</span>
          </div>
          <div className="menu-item-description">house-made mustard, brioche bun | add cheese 1</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">CRISPY CHICKEN | GRILLED CHICKEN</span>
            <span className="menu-item-price">$16.00</span>
          </div>
          <div className="menu-item-description">choose hand breaded or char grilled chicken breast, lettuce, tomatoes, brioche bun | add cheese 1 | add bacon 2 | add caramelized onions 4</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">TUNA SALAD</span>
            <span className="menu-item-price">$16.00</span>
          </div>
          <div className="menu-item-description">house made white albacore, lettuce, tomatoes, brioche bun</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">CRISPY FISH SANDWICH</span>
            <span className="menu-item-price">$17.00</span>
          </div>
          <div className="menu-item-description">8oz fresh haddock, lettuce, tomatoes, tartar sauce, brioche bun</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">TURKEY CLUB</span>
            <span className="menu-item-price">$16.00</span>
          </div>
          <div className="menu-item-description">roasted turkey breast, lettuce, tomatoes, bacon, mayonnaise, choice of bread</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">TURKEY MELT | HAM & CHEESE MELT</span>
            <span className="menu-item-price">$16.00</span>
          </div>
          <div className="menu-item-description">smoked turkey or ham, melted monterey jack cheese, grilled bread</div>
        </div>
      </div>
    </div>
  </section>
)

const DinnerSection = () => (
  <section className="menu-section-content">
    <div className="menu-category">
      <h2 className="menu-category-title">APPETIZERS</h2>
      <div className="menu-items-grid">
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">FLASH FRIED CALAMARI</span>
            <span className="menu-item-price">$20.00</span>
          </div>
          <div className="menu-item-description">lightly breaded, hot peppers, lemon butter, marinara sauce</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">LOCAL OYSTERS</span>
            <span className="menu-item-price">$3.00</span>
          </div>
          <div className="menu-item-description">chef's daily selection, cocktail sauce, lemon (gf)</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">STEAMED SOFT SHELL CLAMS</span>
            <span className="menu-item-price">$16.00</span>
          </div>
          <div className="menu-item-description">broth, butter (gf)</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">CLASSIC SHRIMP COCKTAIL</span>
            <span className="menu-item-price">$21.00</span>
          </div>
          <div className="menu-item-description">cocktail sauce, lemon (gf)</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">COCONUT SHRIMP</span>
            <span className="menu-item-price">$21.00</span>
          </div>
          <div className="menu-item-description">shredded coconut crusted jumbo shrimp, raspberry plum sauce</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">NOVA LOX</span>
            <span className="menu-item-price">$20.00</span>
          </div>
          <div className="menu-item-description">smoked salmon, capers, shredded lettuce, red onion, cream cheese, toast points (gf)</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">EGGPLANT CAPRESE</span>
            <span className="menu-item-price">$15.00</span>
          </div>
          <div className="menu-item-description">breaded eggplant, chopped tomato, basil, mozzarella, balsamic glaze</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">CRISPY CHICKEN FINGERS</span>
            <span className="menu-item-price">$16.00</span>
          </div>
          <div className="menu-item-description">choose dipping sauce: tomato, cayenne, honey mustard</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">FRIED MOZZARELLA</span>
            <span className="menu-item-price">$14.00</span>
          </div>
          <div className="menu-item-description">breaded whole milk mozzarella, marinara sauce, shaved parmesan</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">THREE CHEESE NACHOS</span>
            <span className="menu-item-price">$17.00</span>
          </div>
          <div className="menu-item-description">crispy tortilla chips, molten baked cheese, sliced jalapeño peppers, shredded lettuce, chopped tomatoes & scallions, sour cream & salsa on the side | add Cajun chicken 8</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">HOUSE-MADE MEATBALL</span>
            <span className="menu-item-price">$14.00</span>
          </div>
          <div className="menu-item-description">one) beef & veal blended meatball, marinara, blended cheese, fresh basil</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">POTATO SKINS</span>
            <span className="menu-item-price">$18.00</span>
          </div>
          <div className="menu-item-description">western potato wedges, three cheeses, crushed bacon, green onions, sour cream</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">BUFFALO WINGS</span>
            <span className="menu-item-price">$20.00</span>
          </div>
          <div className="menu-item-description">choose bone-in or boneless chicken) crispy seasoned wing sauce tossed, served with house-made blue cheese dressing</div>
        </div>
      </div>
    </div>

    <div className="menu-category">
      <h2 className="menu-category-title">SOUPS & SALADS</h2>
      <div className="menu-items-grid">
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">SOUP DU JOUR</span>
            <span className="menu-item-price">$11.00</span>
          </div>
          <div className="menu-item-description">prepared fresh daily</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">CAESAR</span>
            <span className="menu-item-price">$16.00</span>
          </div>
          <div className="menu-item-description">crisp romaine, pecorino romano, house croutons, creamy Caesar dressing | add anchovies 2 | add breaded chicken 8 | add steak tips 12 | add grilled shrimp 12</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">FRENCH ONION</span>
            <span className="menu-item-price">$11.00</span>
          </div>
          <div className="menu-item-description">bone broth, crostini, gruyere cheese crust</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">TOSSED GREENS</span>
            <span className="menu-item-price">$15.00</span>
          </div>
          <div className="menu-item-description">red onions, cucumbers, tomatoes, fresh greens (gf) | add Cajun chicken 8 | add tuna salad 5 | add steak tips 12 | add grilled shrimp 12</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">NEW ENGLAND CLAM CHOWDER</span>
            <span className="menu-item-price">$12.00</span>
          </div>
          <div className="menu-item-description">a New England staple</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name"></span>
            <span className="menu-item-price"></span>
          </div>
          <div className="menu-item-description"></div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">SEAFOOD CHOWDER</span>
            <span className="menu-item-price">$19.00</span>
          </div>
          <div className="menu-item-description">clams, scallops, lobster, fish</div>
        </div>
      </div>
    </div>

    <div className="menu-category">
      <h2 className="menu-category-title">STEAKS AND SMOKE</h2>
      <div className="menu-items-grid">
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">THE PRIME RIB</span>
            <span className="menu-item-price">$32.00</span>
          </div>
          <div className="menu-item-description">house-favorite! slow roasted, au jus | 5oz Flintstone cut 27 | 20oz king cut 40 | 14oz queen cut 34 (gf)</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">FILET MIGNON</span>
            <span className="menu-item-price">$38.00</span>
          </div>
          <div className="menu-item-description">center cut beef tenderloin | 8oz 46 | 6oz 38 (gf)</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">SIRLOIN</span>
            <span className="menu-item-price">$30.00</span>
          </div>
          <div className="menu-item-description">New York sirloin, sauteed mushrooms | 16oz 39 | 12oz 34 (gf)</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">BBQ BABY BACK RIBS</span>
            <span className="menu-item-price">$32.00</span>
          </div>
          <div className="menu-item-description">slow smoked pork spare ribs, house bbq sauce | (full) 32 | (half) 24</div>
        </div>
      </div>
    </div>

    <div className="menu-category">
      <h2 className="menu-category-title">MAIN PLATES</h2>
      <div className="menu-items-grid">
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">CHICKEN STIR FRY</span>
            <span className="menu-item-price">$27.00</span>
          </div>
          <div className="menu-item-description">chicken breast, ginger, garlic, broccoli, mushrooms, onions, peppers, pineapple, cashew nuts, sesame seeds, house rice</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">VEAL OR CHICKEN PARMIGIANA</span>
            <span className="menu-item-price">$32.00</span>
          </div>
          <div className="menu-item-description">veal cutlet or breaded chicken breast, house tomato sauce, baked blended cheese, choose pasta (veal) 32 | (chicken) 27</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">LINGUINE ALFREDO</span>
            <span className="menu-item-price">$20.00</span>
          </div>
          <div className="menu-item-description">garlic, olive oil, pecorino romano, pepper, cream, fresh herbs | add chicken & broccoli 8 | add shrimp 12</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">SPINACH, CHEESE & ROASTED GARLIC RAVIOLI</span>
            <span className="menu-item-price">$24.00</span>
          </div>
          <div className="menu-item-description">choose scampi butter or house tomato sauce</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">PASTA & MEATBALLS</span>
            <span className="menu-item-price">$22.00</span>
          </div>
          <div className="menu-item-description">house-made jumbo pork, beef & veal meatballs, tomato sauce, pecorino romano, choose pasta</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">CHICKEN OR BEEF KABOBS</span>
            <span className="menu-item-price">$29.00</span>
          </div>
          <div className="menu-item-description">grilled chicken or sirloin tips, onions, peppers, mushrooms, tomatoes, house rice 27 | 29</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">STEAK HOUSE BURGER</span>
            <span className="menu-item-price">$21.00</span>
          </div>
          <div className="menu-item-description">1/2lb hand-made burger, brioche bun, french fries 18 | add American cheese 1 | add house cheese blend 3 | add caramelized onions 4 | add applewood smoked bacon 2</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">CRISPY FISH SANDWICH</span>
            <span className="menu-item-price">$21.00</span>
          </div>
          <div className="menu-item-description">8oz fresh haddock, lettuce, tomatoes, tartar sauce, brioche bun, french fries</div>
        </div>
      </div>
    </div>

    <div className="menu-category">
      <h2 className="menu-category-title">SEAFARE CLASSICS</h2>
      <div className="menu-items-grid">
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">LIVE LOBSTER DINNER</span>
            <span className="menu-item-price">MKT</span>
          </div>
          <div className="menu-item-description">while they last) 1 1/2lb Maine lobster (baked, stuffed or boiled), drawn butter, fresh lemon</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">LAZY MAN'S LOBSTER CASSEROLE</span>
            <span className="menu-item-price">$44.00</span>
          </div>
          <div className="menu-item-description">Maine lobster, cracker crumbs, butter, fresh herbs</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">PAN SEARED SALMON</span>
            <span className="menu-item-price">$32.00</span>
          </div>
          <div className="menu-item-description">north atlantic caught, sesame crust, scampi butter (gf)</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">STUFFED DOVER SOLE</span>
            <span className="menu-item-price">$30.00</span>
          </div>
          <div className="menu-item-description">scallop & crab stuffing, Newburg sauce</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">GRILLED HADDOCK</span>
            <span className="menu-item-price">$28.00</span>
          </div>
          <div className="menu-item-description">Italian breaded or Cajun seasoned, choose tartar, cocktail or Newburg sauce (+3)</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">BAKED ATLANTIC HADDOCK</span>
            <span className="menu-item-price">$28.00</span>
          </div>
          <div className="menu-item-description">cracker crumbs, garlic butter, white wine, fresh herbs | add Newburg sauce (+3)</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">BAKED STUFFED SHRIMP</span>
            <span className="menu-item-price">$33.00</span>
          </div>
          <div className="menu-item-description">butter crumb stuffed jumbo shrimp (five), garlic, wine</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">BAKED BAY SCALLOPS</span>
            <span className="menu-item-price">$30.00</span>
          </div>
          <div className="menu-item-description">local bay scallops, butter crumb baked en casserole, fresh herbs</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">FISH & CHIPS</span>
            <span className="menu-item-price">$28.00</span>
          </div>
          <div className="menu-item-description">corn flour breaded haddock, crispy chips, tartar or cocktail sauce</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">FRIED BAY SCALLOPS</span>
            <span className="menu-item-price">$30.00</span>
          </div>
          <div className="menu-item-description">hand breaded scallops, crispy fries, tartar or cocktail sauce</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">SEAFOOD SINATRA</span>
            <span className="menu-item-price">$30.00</span>
          </div>
          <div className="menu-item-description">lobster, shrimp, scallops, garlic, red peppers, creamy wine sauce, linguine</div>
        </div>
        <div className="menu-item">
          <div className="menu-item-header">
            <span className="menu-item-name">SEAFOOD FRADIAVOLO</span>
            <span className="menu-item-price">$30.00</span>
          </div>
          <div className="menu-item-description">lobster, shrimp, scallops, garlic, red peppers, jalapeños, green onion, basil, tomatoes, white wine, linguine</div>
        </div>
      </div>
    </div>
  </section>
)

const WinesSection = () => (
  <section id="wines" className="menu-section-content">
    <div className="menu-category">
      <h2 className="menu-category-title">WHITE WINES</h2>
      <div className="wine-items-grid">
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">CAVA, CODORNIU</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-label">GLASS</div>
                <div className="wine-price-value">$6</div>
              </div>
              <div className="wine-price-column">
                <div className="wine-price-label">BOTTLE</div>
                <div className="wine-price-value">$18</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">Sparkling, Spain</div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">PROSECCO, MIONETTO</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-label">GLASS</div>
                <div className="wine-price-value">$8</div>
              </div>
              <div className="wine-price-column">
                <div className="wine-price-label">BOTTLE</div>
                <div className="wine-price-value">$24</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">Sparkling, Italy</div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">RIESLING, BEX</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-label">GLASS</div>
                <div className="wine-price-value">$7</div>
              </div>
              <div className="wine-price-column">
                <div className="wine-price-label">BOTTLE</div>
                <div className="wine-price-value">$21</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">Germany</div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">RIESLING, CHATEAU ST. MICHELLE</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-label">GLASS</div>
                <div className="wine-price-value">$8</div>
              </div>
              <div className="wine-price-column">
                <div className="wine-price-label">BOTTLE</div>
                <div className="wine-price-value">$24</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">Washington</div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">MOSCATO, SMOKING LOON</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-label">GLASS</div>
                <div className="wine-price-value">$8</div>
              </div>
              <div className="wine-price-column">
                <div className="wine-price-label">BOTTLE</div>
                <div className="wine-price-value">$24</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">California</div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">PINOT GRIGIO, CASALETTO</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-label">GLASS</div>
                <div className="wine-price-value">$7</div>
              </div>
              <div className="wine-price-column">
                <div className="wine-price-label">BOTTLE</div>
                <div className="wine-price-value">$21</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">delle Venezie</div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">PINOT GRIGIO, ECCO DOMANI</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-label">GLASS</div>
                <div className="wine-price-value">$8</div>
              </div>
              <div className="wine-price-column">
                <div className="wine-price-label">BOTTLE</div>
                <div className="wine-price-value">$24</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">delle Venezie</div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">SAUVIGNON BLANC, FLINT AND STEEL</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-label">GLASS</div>
                <div className="wine-price-value">$10</div>
              </div>
              <div className="wine-price-column">
                <div className="wine-price-label">BOTTLE</div>
                <div className="wine-price-value">$30</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">Napa</div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">SAUVIGNON BLANC, VILLA MARIA</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-label">GLASS</div>
                <div className="wine-price-value">$9</div>
              </div>
              <div className="wine-price-column">
                <div className="wine-price-label">BOTTLE</div>
                <div className="wine-price-value">$28</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">Marlborough</div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">CHARDONNAY, MATCHBOOK</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-label">GLASS</div>
                <div className="wine-price-value">$9</div>
              </div>
              <div className="wine-price-column">
                <div className="wine-price-label">BOTTLE</div>
                <div className="wine-price-value">$28</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">California</div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">CHARDONNAY, KENDALL-JACKSON</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-label">GLASS</div>
                <div className="wine-price-value">$10</div>
              </div>
              <div className="wine-price-column">
                <div className="wine-price-label">BOTTLE</div>
                <div className="wine-price-value">$30</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">Napa</div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">CHARDONNAY, THE ARSONIST</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-label">GLASS</div>
                <div className="wine-price-value">$12</div>
              </div>
              <div className="wine-price-column">
                <div className="wine-price-label">BOTTLE</div>
                <div className="wine-price-value">$34</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">"Scored 91 Points, Robert Parker, Wine Advocate" Dunnigan Hills</div>
        </div>
      </div>
    </div>

    <div className="menu-category">
      <h2 className="menu-category-title">RED WINES</h2>
      <div className="wine-items-grid">
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">RED BLEND, TINTO REY</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-label">GLASS</div>
                <div className="wine-price-value">$10</div>
              </div>
              <div className="wine-price-column">
                <div className="wine-price-label">BOTTLE</div>
                <div className="wine-price-value">$30</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">"Scored 91 Points, Robert Parker, Wine Advocate" Dunnigan Hills</div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">RED BLEND, TORMARESCA NEPRICA</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-label">GLASS</div>
                <div className="wine-price-value">$9</div>
              </div>
              <div className="wine-price-column">
                <div className="wine-price-label">BOTTLE</div>
                <div className="wine-price-value">$28</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">Italy</div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">PINOT NOIR, NEILSON</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-label">GLASS</div>
                <div className="wine-price-value">$10</div>
              </div>
              <div className="wine-price-column">
                <div className="wine-price-label">BOTTLE</div>
                <div className="wine-price-value">$30</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">Santa Barbara</div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">PINOT NOIR, AQUINAS</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-label">GLASS</div>
                <div className="wine-price-value">$10</div>
              </div>
              <div className="wine-price-column">
                <div className="wine-price-label">BOTTLE</div>
                <div className="wine-price-value">$30</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">Napa</div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">CHIANTI CLASSICO, VICCHIOMAGGI0</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-label">GLASS</div>
                <div className="wine-price-value">$8</div>
              </div>
              <div className="wine-price-column">
                <div className="wine-price-label">BOTTLE</div>
                <div className="wine-price-value">$24</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">Tuscany</div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">ZINFANDEL, FOUR VINES 'TRUANT'</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-label">GLASS</div>
                <div className="wine-price-value">$10</div>
              </div>
              <div className="wine-price-column">
                <div className="wine-price-label">BOTTLE</div>
                <div className="wine-price-value">$30</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">California</div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">MALBEC, ANTIGAL UNO</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-label">GLASS</div>
                <div className="wine-price-value">$10</div>
              </div>
              <div className="wine-price-column">
                <div className="wine-price-label">BOTTLE</div>
                <div className="wine-price-value">$30</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">Mendoza</div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">MERLOT, 14 HANDS</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-label">GLASS</div>
                <div className="wine-price-value">$8</div>
              </div>
              <div className="wine-price-column">
                <div className="wine-price-label">BOTTLE</div>
                <div className="wine-price-value">$21</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">Washington</div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">MERLOT, NOBLE VINE 181</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-label">GLASS</div>
                <div className="wine-price-value">$8</div>
              </div>
              <div className="wine-price-column">
                <div className="wine-price-label">BOTTLE</div>
                <div className="wine-price-value">$24</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">Lodi</div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">CABERNET SAUVIGNON, MATCHBOOK</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-label">GLASS</div>
                <div className="wine-price-value">$9</div>
              </div>
              <div className="wine-price-column">
                <div className="wine-price-label">BOTTLE</div>
                <div className="wine-price-value">$28</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">California</div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">CABERNET SAUVIGNON, AVALON</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-label">GLASS</div>
                <div className="wine-price-value">$12</div>
              </div>
              <div className="wine-price-column">
                <div className="wine-price-label">BOTTLE</div>
                <div className="wine-price-value">$34</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">Napa</div>
        </div>
      </div>
    </div>

    <div className="menu-category">
      <h2 className="menu-category-title">SPECIAL SELECT</h2>
      <div className="wine-items-grid">
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">CHARDONNAY, STAG'S LEAP "KARIA"</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-label">BOTTLE</div>
                <div className="wine-price-value">$60</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">Napa</div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">CABERNET SAUVIGNON, STAG'S LEAP 'ARTEMIS'</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-label">BOTTLE</div>
                <div className="wine-price-value">$80</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">Napa</div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">CABERNET SAUVIGNON, ARCUDI BLACK SEARS VINEYARD</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-label">BOTTLE</div>
                <div className="wine-price-value">$150</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">Napa. Originally from Mendon, MA, Anthony Arcudi's wine bridges the so-called gap between the old and new worlds, striking the balance of finesse and structure. It shows a very complex nose of blackberry pie, cassis and dried spices. Vibrant, pure and full bodied with dark fruits throughout the broad palate, supported by a long finish of substantial fine tannins for which Howell Mountain Cabernet is known.</div>
        </div>
      </div>
    </div>

    <div className="menu-category">
      <h2 className="menu-category-title">PORTS</h2>
      <div className="wine-items-grid">
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">GRAHAM'S 6 GRAPES</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-label">GLASS</div>
                <div className="wine-price-value">$6</div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">GRAHAM'S 10 YEAR TAWNY</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-label">GLASS</div>
                <div className="wine-price-value">$9</div>
              </div>
            </div>
          </div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">GRAHAMS 20 YEAR TAWNY</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-label">GLASS</div>
                <div className="wine-price-value">$12</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="menu-category">
      <h2 className="menu-category-title">SPECIALTY COCKTAILS</h2>
      <div className="wine-items-grid">
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">JACK FROST MARTINI</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-value">$12</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">Tito's Handmade Vodka, Blue Curacao, Triple Sec, Splash of Sour Mix</div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">CANDY CANE MARTINI</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-value">$12</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">Stoli Vanilla Vodka, Chocolate Liqueur, Peppermint Schnapps</div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">ESPRESSO MARTINI</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-value">$13</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">Vanilla Vodka, Double Espresso Vodka, ChocoLat Chocolate Liqueur, Espresso Shot</div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">SUNSET BAY MARTINI</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-value">$12</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">Malibu, Parrot Bay Passion Fruit, Orange Juice, Pineapple Juice, Splash of Grenadine</div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">PINK CADILLAC</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-value">$12</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">Absolut Citron, Peachtree Schnapps, Cranberry Juice, Pineapple Juice, Splash of Sweet & Sour Mix</div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">ALMOND JOY</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-value">$12</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">Ciroc Coconut Vodka, ChocoLat Chocolate Liqueur, Disaronno Amaretto</div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">LEMON DROPKICK</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-value">$11</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">Absolut Citron, Limoncello, Splash of Sweet & Sour Mix, Sugar Rim</div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">BLOOD ORANGE MARTINI</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-value">$12</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">Stoli Orange Vodka, Monin Blood Orange Syrup, Triple Sec, Orange Juice</div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">GRAPEFRUIT SPRITZ</span>
            <div className="wine-pricing">
              <div className="wine-price-column">
                <div className="wine-price-value">$11</div>
              </div>
            </div>
          </div>
          <div className="menu-item-description">Tito's Handmade Vodka, Elderflower Liqueur, Grapefruit Juice, Splash of Soda Water</div>
        </div>
      </div>
    </div>

    <div className="menu-category">
      <h2 className="menu-category-title">BOTTLED BEER</h2>
      <div className="wine-items-grid">
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">BUD</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">BUD LIGHT</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">COORS LIGHT</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">MILLER LITE</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">CORONA</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">SAM ADAMS BOSTON LAGER</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">MIKE'S HARD LEMONADE</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">O'DOULS NA</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">ST. PAULIE GIRL NA</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">HEINEKEN</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">STELLA ARTOIS</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="wine-item-header">
            <span className="wine-item-name">ANGRY ORCHARD</span>
          </div>
        </div>
      </div>
    </div>
  </section>
)

function MenusPage() {
  const [activeMenu, setActiveMenu] = useState('lunch')

  return (
    <div>
      <Navigation />
      <HeroSection />
      <MenuBand activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div>
        {activeMenu === 'lunch' && <LunchSection />}
        {activeMenu === 'dinner' && <DinnerSection />}
        {activeMenu === 'wines' && <WinesSection />}
      </div>
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

export default MenusPage