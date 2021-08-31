import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useFormWithValidation } from "../validation/useFormWithValidation";

function SearchForm({getMovies}) {
  const { values, handleChange, isValid } = useFormWithValidation({});
  const [isError, setIsError] = React.useState(false);
  const styleError = isError
    ? "form__error_visible form__error"
    : "form__error";

  function handleChangeInputSearch(e) {
    handleChange(e);
    setIsError(false);
  }

  function onSubmit(e) {
    if (e) {
      e.preventDefault();
    }

    if (!isValid) {
      setIsError(true);
    } else {
      setIsError(false);
      getMovies(values.input)
    }
    return;
  }

  return (
    <section className="search">
      <span className={styleError}>Нужно ввести ключевое слово</span>
      <form className="search__form form" noValidate onSubmit={onSubmit}>
        <div className="search__form-cont">
          <input
            className="search__input"
            type="text"
            name="input"
            placeholder="Фильм"
            required
            onChange={handleChangeInputSearch}
          />
          <button
            type="submit"
            value="Отправить на сервер"
            id="search__submit"
            className="search__submit link"

          />
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
