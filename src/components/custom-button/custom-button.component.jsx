import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, ...otherButtonProps }) => {
  return (
    <button className="custom-button" {...otherButtonProps}>
      {children}
    </button>
  );
};

export default CustomButton;
