import React from "react";

const RangeControl = ({ length, setLength }) => {
  return (
    <div className="flex items-center gap-x-1">
      <input
        type="range"
        min={6}
        max={100}
        value={length}
        className="cursor-pointer"
        onChange={(e) => setLength(Number(e.target.value))}
        aria-label="Password length"
      />
      <label className="text-white">Length: {length}</label>
    </div>
  );
};

export default RangeControl;
