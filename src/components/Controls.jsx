import React from "react";
import RangeControl from "./RangeControl";
import CheckBoxControl from "./CheckBoxControl";

const Controls = ({
  length,
  setLength,
  numberAllowed,
  setNumberAllowed,
  charAllowed,
  setCharAllowed,
}) => {
  return (
    <div className="flex text-sm gap-x-2">
      <RangeControl length={length} setLength={setLength} />

      <CheckBoxControl
        id="numberInput"
        checked={numberAllowed}
        onChange={() => setNumberAllowed((p) => !p)}
        label="Numbers"
      />

      <CheckBoxControl
        id="characterInput"
        checked={charAllowed}
        onChange={() => setCharAllowed((p) => !p)}
        label="Characters"
      />
    </div>
  );
};

export default Controls;
