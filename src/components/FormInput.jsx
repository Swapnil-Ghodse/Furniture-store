import React from "react";

function FormInput({label, name, type, placeholder, defaultValue, size}) {
  return (
    <>
      <label className="form-control">
        <div className="label">
          <span className="label-text">{label}</span>
        </div>
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          defaultValue={defaultValue}
          className={`input input-bordered ${size}`}
        />
      </label>
    </>
  );
}

export default FormInput;
