import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./withSpinner.styles";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent />
    );
  };
  return Spinner;
};

export default WithSpinner;
