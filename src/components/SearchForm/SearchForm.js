import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <div className="search__form-cont">
          <input
            className="search__input"
            type="text"
            name="input"
            placeholder="Фильм"
          />
          <button
            type="submit"
            value="Отправить на сервер"
            id="search__submit"
            className="search__submit"
          />
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
