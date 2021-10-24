import React from "react";

const Input = ({ type, id, value, name, placeholder, onChange, errors }) => {
  return (
    <>
      <input
        name={name}
        value={value}
        type={type}
        class="form-control shadow-none"
        id={id}
        autoComplete="off"
        placeholder={placeholder}
        style={{
          "border": "none",
          "outline": "none",
          "backgroundColor": "transparent",    
          "border-bottom": "2px solid gray",
        }}
        onChange={onChange}
        errors={errors}
      />
      {/* {errors[name] && <div className="alert alert-danger">{errors[name]}</div>} */}
    </>
  );
};

export default Input;
