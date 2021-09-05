import React from "react";
import { Link } from "react-router-dom";

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
  const [visible, setVisible] = React.useState({name: false, email: false, password: false});
  const errorClassName = !visible
    ? `auth__input-error`
    : `auth__input-error auth__input-error_visible`;

  function onBlur(e) {
    const name = e.target.name
    setVisible({...visible, [name]: true});
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
                className="auth__input"
                minLength={2}
                maxLength={30}
                type="text"
                name="name"
                onChange={handleChangeInput}
                required
              />
              <span className={errorClassName} id="password-error">
                {visible.name && errors.name}
              </span>
            </label>
          )}
          <label className="auth__label">
            <p className="auth__input-name">E-mail</p>
            <input
              onBlur={onBlur}
              className="auth__input"
              onChange={handleChangeInput}
              type="email"
              name="email"
              autoComplete="on"
              required
            />
            <span className={errorClassName} id="email-error">
              {visible.email && errors.email}
            </span>
          </label>
          <label className="auth__label">
            <p className="auth__input-name">Пароль</p>
            <input
            onBlur={onBlur}
              className="auth__input"
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
          className={isValid ? `auth__submit ${margin}` : `auth__submit_disabled auth__submit ${margin}`}
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
