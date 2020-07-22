import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ label, handleChange, ...otherInputProps }) => {
  return (
    <div className="group">
      {label ? <label className="form-input-label">{label}</label> : null}
      <input
        className="form-input"
        {...otherInputProps}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormInput;
