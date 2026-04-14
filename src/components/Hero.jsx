import { useEffect, useRef, useState } from "react";

function Hero() {
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // run only once (remove if you want repeat animation)
        }
      },
      {
        threshold: 0.2, // trigger when 20% visible
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      className={`section hero ${isVisible ? "animate" : ""}`}
      style={{
        backgroundImage: `
          url(${process.env.PUBLIC_URL}/assets/images/hero-bg-bottom.png),
          url(${process.env.PUBLIC_URL}/assets/images/hero-bg-top.png)
        `
      }}
    >

      <div className="container">

        <img
          src={`${process.env.PUBLIC_URL}/assets/images/shape-1.png`}
          width="61"
          height="61"
          alt="shape decoration"
          className="shape shape-1"
        />

        <img
          src={`${process.env.PUBLIC_URL}/assets/images/shape-2.png`}
          width="56"
          height="74"
          alt="shape decoration"
          className="shape shape-2"
        />

        <img
          src={`${process.env.PUBLIC_URL}/assets/images/shape-3.png`}
          width="57"
          height="72"
          alt="shape decoration"
          className="shape shape-3"
        />

        {/* HERO CONTENT */}
        <div className="hero-content">

          <p className="section-subtitle">
            Discover Bhutan With Local Experts
          </p>

          <h2 className="hero-title">
            Bhutan Exclusive Travel Experiences
          </h2>

          <p className="hero-text">
            Explore the Land of the Thunder Dragon with carefully crafted journeys,
            cultural discoveries, Himalayan landscapes, and authentic Bhutanese hospitality
            guided by trusted local specialists.
          </p>

          <div className="btn-group">

            <a href="#tours" className="btn btn-primary">
              Explore Tours
            </a>

            <a href="#about" className="btn btn-outline">
              Why Travel With Us
            </a>

          </div>

        </div>

        {/* HERO IMAGE */}
        <figure className="hero-banner">

          <img
            src={`${process.env.PUBLIC_URL}/assets/images/hero-banner.png`}
            width="686"
            height="812"
            loading="lazy"
            alt="Bhutan travel experience"
            className="w-100"
          />

        </figure>

      </div>

    </section>
  );
}

export default Hero;