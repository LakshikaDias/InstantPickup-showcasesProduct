import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

import LazyLoad from "react-lazyload"; // Import react lazyload

/**
 * App component
 *
 * @returns {JSX.Element} The render component
 * @component
 */

function App() {
  // Schema Markup
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Product Title",
    image: "product-image.jpg",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "8.99",
      availability: "InStock",
    },
  };
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="/">
              Product Showcase
            </a>
          </div>
        </nav>
      </header>
      <div className="container">
        <main>
          <section className="py-5">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  {/**
                   * Used LazyLoad component
                   */}
                  <LazyLoad height={200} once>
                    <img
                      src="product-image.jpg"
                      alt="Product-image"
                      className="img-fluid"
                    />
                  </LazyLoad>
                </div>
                <div className="col-lg-6">
                  <h2>Product Title</h2>
                  <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <button className="btn btn-success m-2">Buy Now</button>
                  <button className="btn btn-primary">Add To Cart</button>
                </div>
              </div>
            </div>
          </section>
          <section className="py-5 mb-5 bg-light">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h2>Additional Section 1</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="py-5 mb-5  bg-light">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h2>Additional Section 2</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p>© 2023 Product Showcase. All rights reserved.</p>
        </div>
      </footer>
      {/* Schema Markup */}
      <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
    </div>
  );
}

export default App;
