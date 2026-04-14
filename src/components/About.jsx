function About() {

  return (

    <section id="about" className="section about">

      <div className="container">


        <div className="about-content">

          <p className="section-subtitle">
            About Bhutan Exclusive Travel
          </p>

          <h2 className="h2 section-title">
            Discover the Last Himalayan Kingdom with Local Experts
          </h2>

          <p className="about-text">
            Bhutan Exclusive Travel specializes in authentic Bhutan journeys,
            offering carefully designed cultural, spiritual, and nature-based
            experiences across the Himalayan kingdom with experienced local guides
            and personalized service.
          </p>


          <ul className="about-list">


            {/* FEATURE 1 */}

            <li className="about-item">

              <div className="about-item-icon">
                <ion-icon name="compass"></ion-icon>
              </div>

              <div className="about-item-content">

                <h3 className="h3 about-item-title">
                  Local Expert Guides
                </h3>

                <p className="about-item-text">
                  Travel with knowledgeable Bhutanese guides who share deep
                  insights into culture, monasteries, traditions, and hidden gems.
                </p>

              </div>

            </li>


            {/* FEATURE 2 */}

            <li className="about-item">

              <div className="about-item-icon">
                <ion-icon name="briefcase"></ion-icon>
              </div>

              <div className="about-item-content">

                <h3 className="h3 about-item-title">
                  Customized Travel Experiences
                </h3>

                <p className="about-item-text">
                  Flexible itineraries designed for cultural tours, trekking,
                  honeymoon journeys, and spiritual retreats across Bhutan.
                </p>

              </div>

            </li>


            {/* FEATURE 3 */}

            <li className="about-item">

              <div className="about-item-icon">
                <ion-icon name="umbrella"></ion-icon>
              </div>

              <div className="about-item-content">

                <h3 className="h3 about-item-title">
                  Safe & Seamless Travel Support
                </h3>

                <p className="about-item-text">
                  From permits and accommodations to transport and guides,
                  we ensure a smooth and comfortable Bhutan travel experience.
                </p>

              </div>

            </li>


          </ul>

        </div>


        <figure className="about-banner">

          <img
            src={`${process.env.PUBLIC_URL}/assets/images/about-banner.png`}
            width="756"
            height="842"
            loading="lazy"
            alt="Bhutan travel experience"
            className="w-100"
          />

        </figure>


      </div>

    </section>

  );

}

export default About;