function Footer() {
  return (
   <footer
  id="footer"
  className="footer"
  style={{
    backgroundImage: "url('/assets/images/footer-bg.png')",
    borderTopLeftRadius: "40px",
    borderTopRightRadius: "40px",
    overflow: "hidden"
  }}
>

      <div className="container">

        {/* FOOTER TOP */}
        <div className="footer-top">


          {/* BHUTAN DESTINATIONS */}

          <ul className="footer-list">

            <li>
              <p className="footer-list-title">
                Top Bhutan Destinations
              </p>
            </li>

            <li>
              <a href="#destination" className="footer-link">
                Paro Valley
              </a>
            </li>

            <li>
              <a href="#destination" className="footer-link">
                Thimphu City
              </a>
            </li>

            <li>
              <a href="#destination" className="footer-link">
                Punakha Dzong
              </a>
            </li>

            <li>
              <a href="#destination" className="footer-link">
                Bumthang Valley
              </a>
            </li>

            <li>
              <a href="#destination" className="footer-link">
                Phobjikha Valley
              </a>
            </li>

          </ul>


          {/* TOUR TYPES */}

          <ul className="footer-list">

            <li>
              <p className="footer-list-title">
                Tour Categories
              </p>
            </li>

            <li>
              <a href="#tours" className="footer-link">
                Cultural Tours
              </a>
            </li>

            <li>
              <a href="#tours" className="footer-link">
                Trekking Adventures
              </a>
            </li>

            <li>
              <a href="#tours" className="footer-link">
                Festival Tours
              </a>
            </li>

            <li>
              <a href="#tours" className="footer-link">
                Honeymoon Tours
              </a>
            </li>

            <li>
              <a href="#tours" className="footer-link">
                Luxury Bhutan Travel
              </a>
            </li>

          </ul>


          {/* QUICK LINKS */}

          <ul className="footer-list">

            <li>
              <p className="footer-list-title">
                Quick Links
              </p>
            </li>

            <li>
              <a href="#about" className="footer-link">
                About Us
              </a>
            </li>

            <li>
              <a href="#destination" className="footer-link">
                Destinations
              </a>
            </li>

            <li>
              <a href="#tours" className="footer-link">
                Tour Packages
              </a>
            </li>

            <li>
              <a href="#blog" className="footer-link">
                Travel Guides
              </a>
            </li>

            <li>
              <a href="#contact" className="footer-link">
                Contact
              </a>
            </li>

          </ul>


          {/* NEWSLETTER */}

          <div className="footer-list">

            <p className="footer-list-title">
              Bhutan Travel Newsletter
            </p>

            <p className="newsletter-text">
              Get Bhutan travel tips, festival updates, and special tour offers directly in your inbox.
            </p>

            <form className="newsletter-form">

              <input
                type="email"
                name="email"
                required
                placeholder="Your email address"
                className="newsletter-input"
              />

              <button
                type="submit"
                className="btn btn-primary"
              >
                Subscribe
              </button>

            </form>

          </div>

        </div>


        {/* FOOTER BOTTOM */}

        <div className="footer-bottom">

          <a href="#" className="logo">
            Bhutan Exclusive Travel
          </a>

          <p className="copyright">
            © {new Date().getFullYear()} Bhutan Exclusive Travel. All Rights Reserved
          </p>


          {/* SOCIAL ICONS */}

          <ul className="social-list">

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-youtube"></ion-icon>
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </li>

          </ul>

        </div>

      </div>

    </footer>
  );
}

export default Footer;