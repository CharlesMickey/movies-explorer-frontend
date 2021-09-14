import React from "react";

function FilterCheckbox({isShortMovies, handelChangeCheckbox }) {
  function handleChange() {
    handelChangeCheckbox();
  }
  return (
    <label className="check">
      <input
        onChange={handleChange}
        checked={isShortMovies}
        type="checkbox"
        name="checkbox"
        className="invisible-checkbox"
      />
      <span className="visible-checkbox" />
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;
