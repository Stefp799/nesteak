// Menus Page - New England Steak and Seafood
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navigation = () => (
  <nav>
    <div className="nav-container">
      <div className="logo">
        <Link to="/">
          <h1>NEW ENGLAND<span>STEAK AND SEAFOOD</span></h1>
        </Link>
      </div>
      <div className="nav-right">
        <div className="nav-menu">
          <Link to="/menus">MENUS</Link>
          <Link to="/gallery">GALLERY</Link>
          <Link to="/about">ABOUT</Link>
        </div>
        <button className="reservations-btn">RESERVATIONS</button>
      </div>
    </div>
  </nav>
)

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