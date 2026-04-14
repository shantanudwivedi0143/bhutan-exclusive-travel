function Blog() {

  return (

    <section id="blog" className="section blog">

      <div className="container">

        <p className="section-subtitle">
          Bhutan Travel Insights
        </p>

        <h2 className="h2 section-title">
          Latest Bhutan Travel Guides & Tips
        </h2>


        <ul className="blog-list">


          {/* BLOG 1 */}

          <li>

            <div className="blog-card">

              <figure className="card-banner">

                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/popular-1.jpg`}
                  width="740"
                  height="518"
                  loading="lazy"
                  alt="Best time to visit Bhutan"
                  className="img-cover"
                />

              </figure>


              <div className="card-content">

                <h3 className="card-title">
                  Best Time to Visit Bhutan: Complete Seasonal Guide
                </h3>

                <time dateTime="2026-01-12">
                  Jan 12 2026
                </time>

              </div>

            </div>

          </li>


          {/* BLOG 2 */}

          <li>

            <div className="blog-card">

              <figure className="card-banner">

                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/blog-2.jpg`}
                  width="740"
                  height="518"
                  loading="lazy"
                  alt="Tiger Nest Monastery travel guide"
                  className="img-cover"
                />

              </figure>


              <div className="card-content">

                <h3 className="card-title">
                  Tiger’s Nest Monastery Hike: What Travelers Should Know
                </h3>

                <time dateTime="2026-02-08">
                  Feb 08 2026
                </time>

              </div>

            </div>

          </li>


          {/* BLOG 3 */}

          <li>

            <div className="blog-card">

              <figure className="card-banner">

                <img
                  src={`${process.env.PUBLIC_URL}/assets/images/blog-3.jpg`}
                  width="740"
                  height="518"
                  loading="lazy"
                  alt="Bhutan travel cost guide"
                  className="img-cover"
                />

              </figure>


              <div className="card-content">

                <h3 className="card-title">
                  Bhutan Travel Cost Explained: Permits, Hotels & Packages
                </h3>

                <time dateTime="2026-03-04">
                  Mar 03 2026
                </time>

              </div>

            </div>

          </li>


        </ul>

      </div>

    </section>

  );

}

export default Blog;