import React from "react";

import "./spinner.styles.scss";

const Spinner = () => {
  return (
    <div className="spinner">
      <h1 className="spinner__text">
        <span className="spinner__text__first">BARÇA</span>
        <span className="spinner__text__second">BARÇA</span>
        <span className="spinner__text__third">BARÇA</span>
      </h1>
    </div>
  );
};

export default Spinner;
