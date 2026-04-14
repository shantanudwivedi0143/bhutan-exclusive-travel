import { useRef } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

function Destination() {
  const ref = useRef(null);
  const isVisible = useScrollReveal(ref);

  return (
    <section
    id="destination"
      ref={ref}
      className={`destination ${isVisible ? "animate" : ""}`}
    >

      <div className="container">

        <p className="section-subtitle">
          Explore Bhutan
        </p>

        <h2 className="h2 section-title">
          Top Bhutan Travel Destinations
        </h2>

        <ul className="destination-list">

          {/* PARO */}
          <li className="w-50">

            <a href="#tours" className="destination-card">

              <figure className="card-banner">

                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/destination-1.jpg`}
                  width="1140"
                  height="1100"
                  loading="lazy"
                  alt="Paro Bhutan"
                  className="img-cover"
                />

              </figure>

              <div className="card-content">

                <p className="card-subtitle">
                  Gateway Valley
                </p>

                <h3 className="h3 card-title">
                  Paro
                </h3>

              </div>

            </a>

          </li>

          {/* THIMPHU */}
          <li className="w-50">

            <a href="#tours" className="destination-card">

              <figure className="card-banner">

                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/destination-2.jpg`}
                  width="1140"
                  height="1100"
                  loading="lazy"
                  alt="Thimphu Bhutan"
                  className="img-cover"
                />

              </figure>

              <div className="card-content">

                <p className="card-subtitle">
                  Capital City
                </p>

                <h3 className="h3 card-title">
                  Thimphu
                </h3>

              </div>

            </a>

          </li>

          {/* PUNAKHA */}
          <li>

            <a href="#tours" className="destination-card">

              <figure className="card-banner">

                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/destination-3.jpg`}
                  width="1110"
                  height="480"
                  loading="lazy"
                  alt="Punakha Bhutan"
                  className="img-cover"
                />

              </figure>

              <div className="card-content">

                <p className="card-subtitle">
                  River Valley
                </p>

                <h3 className="h3 card-title">
                  Punakha
                </h3>

              </div>

            </a>

          </li>

          {/* BUMTHANG */}
          <li>

            <a href="#tours" className="destination-card">

              <figure className="card-banner">

                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/destination-4.jpg`}
                  width="1110"
                  height="480"
                  loading="lazy"
                  alt="Bumthang Bhutan"
                  className="img-cover"
                />

              </figure>

              <div className="card-content">

                <p className="card-subtitle">
                  Spiritual Region
                </p>

                <h3 className="h3 card-title">
                  Bumthang
                </h3>

              </div>

            </a>

          </li>

          {/* PHOBJIKHA VALLEY */}
          <li>

            <a href="#tours" className="destination-card">

              <figure className="card-banner">

                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/destination-5.jpg`}
                  width="1110"
                  height="480"
                  loading="lazy"
                  alt="Phobjikha Valley Bhutan"
                  className="img-cover"
                />

              </figure>

              <div className="card-content">

                <p className="card-subtitle">
                  Nature Sanctuary
                </p>

                <h3 className="h3 card-title">
                  Phobjikha Valley
                </h3>

              </div>

            </a>

          </li>

        </ul>

      </div>
    </section>
  );
}

export default Destination;