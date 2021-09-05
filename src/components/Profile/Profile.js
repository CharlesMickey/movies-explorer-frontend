import React from "react";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../validation/useFormWithValidation";
import Preloader from "../Preloader/Preloader";

function Profile({ updateUserInfo, isLoading, isLoggedIn, signOut, handelOpenBurger }) {
  const currentUser = React.useContext(CurrentUserContext);
  const { setValues, values, handleChange, } =
    useFormWithValidation({ name: currentUser.name, email: currentUser.email });
  const firstName = currentUser.name && currentUser.name.split(" ")[0];
  React.useEffect(() => {
    const { name, email } = currentUser;
    setValues({ name, email });
  }, [currentUser, setValues]);

  function handleSubmit(e) {
    e.preventDefault()
    updateUserInfo({ name: values.name, email: values.email })
  }

  return (
    <>
      {isLoading && <Preloader />}
      {!isLoading && (
        <>
          <Header isLoggedIn={isLoggedIn} handelOpenBurger={handelOpenBurger} />
          <section className="profile">
            <h2 className="profile__greeting">{`Привет, ${firstName}!`}</h2>
            <form onSubmit={handleSubmit} className="profile__form">
              <fieldset className="profile__set">
                <label className="profile__label">
                  Имя
                  <input
                    autoComplete="on"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Имя"
                    value={values.name || ""}
                    onChange={handleChange}
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
                    autoComplete="on"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={values.email || ""}
                    onChange={handleChange}
                    className="profile__input"
                    required
                  />
                  <span className="" id="password-error"></span>
                </label>
              </fieldset>
              <button
                type="submit"
                value="Отправить на сервер"
                className="profile__button"
                // onClick={updateUserInfo}
              >
                Редактировать
              </button>
              <button
                className="profile__button-out"
                value="Выйти из аккаунта"
                type="button"
                onClick={signOut}
              >
                Выйти из аккаунта
              </button>
            </form>
          </section>
        </>
      )}
    </>
  );
}

export default Profile;
