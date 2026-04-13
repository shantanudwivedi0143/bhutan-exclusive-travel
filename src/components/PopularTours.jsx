function PopularTours() {

  return (

    <section id="tours" className="section popular">

      <div className="container">

        <p className="section-subtitle">
          Bhutan Tour Packages
        </p>

        <h2 className="h2 section-title">
          Most Popular Bhutan Experiences
        </h2>


        <ul className="popular-list">


          {/* TOUR 1 */}

          <li>

            <div className="popular-card">

              <figure className="card-banner">

                <img
                  src="./assets/images/popular-1.jpg"
                  width="740"
                  height="518"
                  loading="lazy"
                  alt="Paro Thimphu Punakha Bhutan Tour"
                  className="img-cover"
                />

              </figure>


              <div className="card-content">

                <div className="card-rating">

                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>

                  <data value="5">(5)</data>

                </div>


                <p className="card-subtitle">
                  Cultural Journey
                </p>

                <h3 className="h3 card-title">
                  Paro – Thimphu – Punakha Tour
                </h3>

                <p className="card-text">
                  Discover Bhutan’s iconic valleys, monasteries, fortresses, and Himalayan landscapes.
                </p>

              </div>

            </div>

          </li>


          {/* TOUR 2 */}

          <li>

            <div className="popular-card">

              <figure className="card-banner">

                <img
                  src="./assets/images/popular-2.jpg"
                  width="740"
                  height="518"
                  loading="lazy"
                  alt="Tiger Nest Monastery Bhutan Tour"
                  className="img-cover"
                />

              </figure>


              <div className="card-content">

                <div className="card-rating">

                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>

                  <data value="5">(5)</data>

                </div>


                <p className="card-subtitle">
                  Signature Experience
                </p>

                <h3 className="h3 card-title">
                  Tiger’s Nest Monastery Experience
                </h3>

                <p className="card-text">
                  Hike to Bhutan’s most sacred cliffside monastery and explore Paro valley highlights.
                </p>

              </div>

            </div>

          </li>


          {/* TOUR 3 */}

          <li>

            <div className="popular-card">

              <figure className="card-banner">

                <img
                  src="./assets/images/popular-3.jpg"
                  width="740"
                  height="518"
                  loading="lazy"
                  alt="Bumthang Spiritual Tour Bhutan"
                  className="img-cover"
                />

              </figure>


              <div className="card-content">

                <div className="card-rating">

                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star"></ion-icon>
                  <ion-icon name="star-outline"></ion-icon>

                  <data value="4">(4)</data>

                </div>


                <p className="card-subtitle">
                  Spiritual Discovery
                </p>

                <h3 className="h3 card-title">
                  Bumthang Cultural & Spiritual Tour
                </h3>

                <p className="card-text">
                  Visit Bhutan’s sacred temples and experience authentic traditions in the spiritual heartland.
                </p>

              </div>

            </div>

          </li>


        </ul>

      </div>

    </section>

  );

}

export default PopularTours;