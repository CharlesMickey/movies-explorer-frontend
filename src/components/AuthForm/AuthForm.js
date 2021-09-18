import React from "react";
import { Link } from "react-router-dom";
import { MESSAGE } from "../../utils/constants";
import logo from "../../images/imgs_svg/logo.svg";

function AuthForm({
  greeting,
  authLink,
  linkPath,
  signText,
  buttonName,
  signUp,
  margin,
  handleChangeInput,
  handleSubmit,
  errors,
  isValid,
}) {
  const [visible, setVisible] = React.useState({
    name: false,
    email: false,
    password: false,
  });
  const errorClassName = !visible
    ? `auth__input-error`
    : `auth__input-error auth__input-error_visible`;

  function onBlur(e) {
    const name = e.target.name;
    setVisible({ ...visible, [name]: true });
  }

  return (
    <section className="auth">
      <Link to="/">
        <img className="auth__logo" src={logo} alt="Логотип сайта Movies" />
      </Link>
      <h2 className="auth__greeting">{`${greeting}!`}</h2>
      <form className="auth__form" onSubmit={handleSubmit}>
        <fieldset className="auth__fieldset">
          {signUp && (
            <label className="auth__label">
              <p className="auth__input-name">Имя</p>
              <input
                onBlur={onBlur}
                className={
                  !errors.name ? "auth__input" : "auth__input error-color"
                }
                minLength={2}
                maxLength={30}
                type="text"
                name="name"
                pattern="[a-zA-ZА-Яа-яёЁ\s_-]+$"
                onChange={handleChangeInput}
                required
              />
              <span className={errorClassName} id="password-error">
                {visible.name &&
                  errors.name &&
                  `${errors.name}  ${MESSAGE.FORM.NAME}`}
              </span>
            </label>
          )}
          <label className="auth__label">
            <p className="auth__input-name">E-mail</p>
            <input
              onBlur={onBlur}
              className={
                !errors.email ? "auth__input" : "auth__input error-color"
              }
              onChange={handleChangeInput}
              type="email"
              name="email"
              pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              autoComplete="on"
              required
            />
            <span className={errorClassName} id="email-error">
              {visible.email &&
                errors.email &&
                `${errors.email}  ${MESSAGE.FORM.EMAIL}`}
            </span>
          </label>
          <label className="auth__label">
            <p className="auth__input-name">Пароль</p>
            <input
              onBlur={onBlur}
              className={
                !errors.password ? "auth__input" : "auth__input error-color"
              }
              autoComplete="current-password"
              minLength={8}
              type="password"
              name="password"
              onChange={handleChangeInput}
              required
            />
            <span className={errorClassName} id="password-error">
              {visible.password && errors.password}
            </span>
          </label>
        </fieldset>
        <button
          type="submit"
          disabled={!isValid}
          value="Отправить на сервер"
          id="auth__submit"
          className={
            isValid
              ? `auth__submit ${margin}`
              : `auth__submit_disabled auth__submit ${margin}`
          }
        >
          {buttonName}
        </button>
        <p className="auth__sign">
          {signText}
          <Link to={linkPath} className="auth__sign-link link">
            {authLink}
          </Link>
        </p>
      </form>
    </section>
  );
}

export default AuthForm;
