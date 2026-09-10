import { useState } from "react";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("Home");

  const menuItems = [
    { name: "Home", icon: "🏠" },
    { name: "All Categories", icon: "▦" },
    { name: "My Closet", icon: "♧" },
    { name: "Favorites", icon: "♡" },
    { name: "Wishlist", icon: "🔖" },
    { name: "Profile", icon: "♙" },
  ];

  const categories = [
    { name: "Shirts", icon: "👔", className: "card-blue" },
    { name: "Tops", icon: "👚", className: "card-pink" },
    { name: "Pants", icon: "👖", className: "card-blue" },
    { name: "Kurtas", icon: "👗", className: "card-yellow" },
    { name: "Sarees", icon: "🥻", className: "card-pink" },
    { name: "Dresses", icon: "👗", className: "card-green" },
    { name: "Ethnic Wear", icon: "👘", className: "card-red" },
    { name: "Accessories", icon: "👜", className: "card-orange" },
  ];

  const renderHome = () => (
    <>
      <section className="hero">
        <div className="hero-content">
          <div className="script-text">Find Your</div>

          <h2>
            <span>Perfect</span> Outfit
          </h2>

          <p>
            From casual to traditional, we've got
            <br />
            every style you need!
          </p>

          <button className="explore-btn">
            Explore Now <span>→</span>
          </button>
        </div>

        <div className="categories">
          {categories.map((category) => (
            <div
              className={`category ${category.className}`}
              key={category.name}
              onClick={() => setActivePage("All Categories")}
            >
              <div className="clothing">{category.icon}</div>
              <span>{category.name} ♡</span>
            </div>
          ))}
        </div>
      </section>

      <section className="features">
        <div className="feature">
          <div className="feature-icon">♙</div>
          <h3>AI Suggestions</h3>
          <p>Just for you</p>
        </div>

        <div className="feature">
          <div className="feature-icon">✦</div>
          <h3>Trending Styles</h3>
          <p>Stay in trend</p>
        </div>

        <div className="feature">
          <div className="feature-icon">♡</div>
          <h3>Save Favorites</h3>
          <p>Build your collection</p>
        </div>

        <div className="feature">
          <div className="feature-icon">▱</div>
          <h3>Easy Shopping</h3>
          <p>At your fingertips</p>
        </div>
      </section>
    </>
  );

  const renderCategories = () => (
    <section className="page-section">
      <div className="page-title">
        <div className="script-text">Explore</div>
        <h2>All Categories</h2>
        <p>Choose a style that matches your vibe.</p>
      </div>

      <div className="big-category-grid">
        {categories.map((category) => (
          <div
            className={`big-category ${category.className}`}
            key={category.name}
          >
            <div className="big-category-icon">{category.icon}</div>
            <h3>{category.name}</h3>
            <button>Explore →</button>
          </div>
        ))}
      </div>
    </section>
  );

  const renderCloset = () => (
    <section className="page-section">
      <div className="page-title">
        <div className="script-text">Your Style</div>
        <h2>My Closet</h2>
        <p>Your personal wardrobe collection.</p>
      </div>

      <div className="empty-card">
        <div className="large-icon">♧</div>
        <h3>Your closet is waiting!</h3>
        <p>Add your favorite outfits and build your digital wardrobe.</p>
        <button className="explore-btn">Add Outfit +</button>
      </div>
    </section>
  );

  const renderFavorites = () => (
    <section className="page-section">
      <div className="page-title">
        <div className="script-text">Loved Styles</div>
        <h2>Favorites</h2>
        <p>Outfits you love, all in one place.</p>
      </div>

      <div className="empty-card">
        <div className="large-icon">♡</div>
        <h3>No favorites yet</h3>
        <p>Tap the heart on an outfit to save it here.</p>
        <button
          className="explore-btn"
          onClick={() => setActivePage("All Categories")}
        >
          Discover Styles →
        </button>
      </div>
    </section>
  );

  const renderWishlist = () => (
    <section className="page-section">
      <div className="page-title">
        <div className="script-text">Save For Later</div>
        <h2>Wishlist</h2>
        <p>Keep the outfits you want to shop later.</p>
      </div>

      <div className="empty-card">
        <div className="large-icon">🔖</div>
        <h3>Your wishlist is empty</h3>
        <p>Save something special and find it here later.</p>
        <button
          className="explore-btn"
          onClick={() => setActivePage("All Categories")}
        >
          Start Exploring →
        </button>
      </div>
    </section>
  );

  const renderProfile = () => (
    <section className="page-section">
      <div className="page-title">
        <div className="script-text">Hello, Fashionista</div>
        <h2>My Profile</h2>
        <p>Manage your StyleNest profile.</p>
      </div>

      <div className="profile-card">
        <div className="profile-big">●</div>
        <h2>StyleNest User</h2>
        <p>Fashion enthusiast</p>

        <div className="profile-info">
          <div>
            <strong>My Style</strong>
            <span>Casual & Traditional</span>
          </div>

          <div>
            <strong>Favorites</strong>
            <span>0 outfits</span>
          </div>

          <div>
            <strong>Wishlist</strong>
            <span>0 items</span>
          </div>
        </div>
      </div>
    </section>
  );

  const renderPage = () => {
    if (activePage === "Home") return renderHome();
    if (activePage === "All Categories") return renderCategories();
    if (activePage === "My Closet") return renderCloset();
    if (activePage === "Favorites") return renderFavorites();
    if (activePage === "Wishlist") return renderWishlist();
    if (activePage === "Profile") return renderProfile();
  };

  return (
    <div className="app">

      {/* SIDEBAR */}
      <aside className="sidebar">

        <div className="logo">
          <div className="hanger">♧</div>
          <h1>
            Style<span>Nest</span>
          </h1>
          <p>Wear Your Vibe ♥</p>
        </div>

        <nav>
          {menuItems.map((item) => (
            <div
              key={item.name}
              className={`nav-item ${
                activePage === item.name ? "active" : ""
              }`}
              onClick={() => setActivePage(item.name)}
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </div>
          ))}
        </nav>

        <div className="quote">
          <p>
            Style isn't just
            <br />
            what you wear,
            <br />
            it's how you feel.
          </p>
          <span>♥</span>
        </div>

      </aside>

      {/* MAIN */}
      <main className="main-content">

        {/* TOP BAR */}
        <div className="top-bar">
          <div className="search">
            🔍
            <input
              type="text"
              placeholder="Search for outfits, styles, or occasions..."
            />
          </div>

          <div className="top-icons">
            <button>☀️ ◐</button>
            <div className="profile">●</div>
          </div>
        </div>

        {/* DYNAMIC PAGE */}
        {renderPage()}

        <div className="style-story">
          Style
          <br />
          Your Story
          <span>♡</span>
        </div>

      </main>
    </div>
  );
}

export default App;