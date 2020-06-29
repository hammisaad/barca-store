import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ label, handleChange, ...otherInputProps }) => {
  return (
    <div className="group">
      <input
        className="form-input"
        {...otherInputProps}
        onChange={handleChange}
      />
      {label ? (
        <label
          className={`${
            otherInputProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
