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
}) {
  return (
    <section className="auth">
      <img className="auth__logo" src={logo} alt="Логотип сайта Movies" />
      <h2 className="auth__greeting">{`${greeting}!`}</h2>
      <form className="auth__form">
        <fieldset className="auth__fieldset">
          {signUp && (
            <label className="auth__label">
              <p className="auth__input-name">Имя</p>
              <input
                className="auth__input"
                minLength={2}
                maxLength={30}
                type="text"
                name="name"
                required
              />
              <span className="auth__input-error" id="name-error">
                Что-то пошло не так...
              </span>
            </label>
          )}
          <label className="auth__label">
            <p className="auth__input-name">E-mail</p>
            <input className="auth__input" type="email" name="email" required />
            <span className="auth__input-error" id="email-error">
              Что-то пошло не так...
            </span>
          </label>
          <label className="auth__label">
            <p className="auth__input-name">Пароль</p>
            <input
              className="auth__input"
              maxLength={8}
              type="password"
              name="password"
              required
            />
            <span className="auth__input-error" id="password-error">
              Что-то пошло не так...
            </span>
          </label>
        </fieldset>
        <button
          type="submit"
          value="Отправить на сервер"
          id="auth__submit"
          className={`auth__submit ${margin}`}
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
