import React from "react";
import "./error.css";

const Error = () => {
  return (
    <div className="container">
      <section class="page_404">
        <div className="gif">
          <div className="error_heading">404</div>
        </div>
        <div className="error_details">
          <div className="error_details_heading">Looks like you're lost</div>
          <div className="error_details_small">
            The page you are looking for not available!
          </div>
          <div className="error_details_button">
            <div className="error_button">Go to Home</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
