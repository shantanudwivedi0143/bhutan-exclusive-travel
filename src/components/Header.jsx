import { useState } from "react";

function Header() {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => {
    setNavOpen(false);
  };

  return (
    <header className={`header ${navOpen ? "active" : ""}`}>

      {/* CUSTOM HEADER CONTAINER */}
        <div className="plane-animation">
    <img src="/assets/images/plane.png" alt="plane" className="plane" />
    <span className="smoke smoke-1"></span>
    <span className="smoke smoke-2"></span>
    <span className="smoke smoke-3"></span>
  </div>

      <div className="header-container">

        <div className="plane-animation">

        <img
            src="/assets/images/plane.png"
            alt="flying plane"
            className="plane"
        />

        <span className="smoke smoke-1"></span>
        <span className="smoke smoke-2"></span>
        <span className="smoke smoke-3"></span>

        </div>    
        {/* BRAND TITLE */}

        <div className="header-brand">
          <a href="#home">
            <h1 className="header-title">
              Bhutan Exclusive Travel
            </h1>
          </a>
        </div>


        {/* MOBILE MENU BUTTON */}

        <button
          className={`nav-toggle-btn ${navOpen ? "active" : ""}`}
          aria-label="Toggle Menu"
          onClick={() => setNavOpen(!navOpen)}
        >
          <ion-icon name="menu-outline" className="open"></ion-icon>
          <ion-icon name="close-outline" className="close"></ion-icon>
        </button>


        {/* NAVBAR */}

        <nav className={`navbar ${navOpen ? "active" : ""}`}>

          <ul className="navbar-list compact-nav">

            <li>
              <a href="#home" className="navbar-link" onClick={closeNav}>
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="navbar-link" onClick={closeNav}>
                About
              </a>
            </li>

            <li>
              <a href="#tours" className="navbar-link" onClick={closeNav}>
                Tours
              </a>
            </li>

            <li>
              <a href="#destination" className="navbar-link" onClick={closeNav}>
                Destinations
              </a>
            </li>

            <li>
              <a href="#blog" className="navbar-link" onClick={closeNav}>
                Travel Guide
              </a>
            </li>

            <li>
              <a href="#footer" className="navbar-link" onClick={closeNav}>
                Contact
              </a>
            </li>

          </ul>


          {/* CTA BUTTON */}

          <a
            href="#booking"
            className="btn btn-secondary compact-btn"
            onClick={closeNav}
          >
            Book Now
          </a>

        </nav>

      </div>

    </header>
  );
}

export default Header;