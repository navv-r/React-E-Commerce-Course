import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose our <span className="purple">Library</span>?
          </h2>
          <div className="highlight__wrapper">
            <div className="highlight">
              <div className="highlight__img">
                <FontAwesomeIcon icon="bolt" />
              </div>
              <h3 className="highlight__subtitle">Fast & Easy Access</h3>
              <p className="highlight__para">
                Get access to your online purchases instantly through our
                user-friendly platform.
              </p>
            </div>
            <div className="highlight">
              <div className="highlight__img">
                <FontAwesomeIcon icon="book-open" />
              </div>
              <h3 className="highlight__subtitle">Largest Variety of Books</h3>
              <p className="highlight__para">
                Our expansive library has over 10,000 books in multiple genres.
              </p>
            </div>
            <div className="highlight">
              <div className="highlight__img">
                <FontAwesomeIcon icon="tags" />
              </div>
              <h3 className="highlight__subtitle">Affordable</h3>
              <p className="highlight__para">
                Enjoy discounted prices on thousands of books everyday.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
