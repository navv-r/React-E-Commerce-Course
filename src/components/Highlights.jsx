import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Highlight from "./UI/Highlight";

const Highlights = () => {
  return (
    <section id="highlights">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose our <span className="purple">Library</span>?
          </h2>
          <div className="highlight__wrapper">
            <Highlight
              icon={<FontAwesomeIcon icon="bolt" />}
              title="Fast & Easy Access"
              para="Get access to your online purchases instantly through our user-friendly platform."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="book-open" />}
              title="Largest Variety of Books"
              para="Our expansive library has over 10,000 books in multiple genres."
            />
            <Highlight
              icon={<FontAwesomeIcon icon="tags" />}
              title="Affordable"
              para="Enjoy discounted prices on thousands of books everyday."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
