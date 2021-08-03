import React from "react";
import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";

function Profile() {
  const isLoading = false;
  const name = "Инесса";
  return (
    <>
      <Header />
      <section className="profile">
        <h2 className="profile__greeting">{`Привет, ${name}!`}</h2>
        <form className="profile__form">
          <fieldset className="profile__set">
            <label className="profile__label">
              Имя
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Имя"
                className="profile__input"
                minLength={2}
                maxLength={30}
                required
              />
              <span className="" id="email-error"></span>
            </label>
            <label className="profile__label">
              Email
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="profile__input"
                required
              />
              <span className="" id="password-error"></span>
            </label>
          </fieldset>
          <button type="submit" value="Отправить на сервер" className="profile__button">
            Редактировать
          </button>
          <button className="profile__button-out" value="Выйти из аккаунта" type="button">
            Выйти из аккаунта
          </button>
        </form>
        {isLoading && <Preloader />}
      </section>
    </>
  );
}

export default Profile;
