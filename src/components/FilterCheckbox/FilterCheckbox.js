import React from "react";

function FilterCheckbox({handelChangeCheckbox}) {
  function handleChange() {
    handelChangeCheckbox()

}
  return (
    <label className="check">
      <input onChange={handleChange} type="checkbox" name="checkbox" className="invisible-checkbox" />
      <span className="visible-checkbox" />
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;
