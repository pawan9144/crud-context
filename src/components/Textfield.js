import React from "react";
const TextField = ({ label, inputProps, onChange, value, name }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...inputProps} onChange={onChange} value={value} name={name} />
    </div>
  );
};
export default TextField;
