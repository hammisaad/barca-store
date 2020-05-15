import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherButtonProps }) => {
  return (
    <button className={`${isGoogleSignIn} custom-button`} {...otherButtonProps}>
      {children}
    </button>
  );
};

export default CustomButton;
