import React from "react";

const CheckBoxControl = ({ id, checked, onChange, label }) => {
  return (
    <div className="flex items-center gap-x-1">
      <input type="checkbox" checked={checked} id={id} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default CheckBoxControl;
