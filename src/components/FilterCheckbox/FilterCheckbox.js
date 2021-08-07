import React from "react";

function FilterCheckbox() {
  return (
    <label className="check">
      <input type="checkbox" name="checkbox" className="invisible-checkbox" />
      <span className="visible-checkbox" />
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;
