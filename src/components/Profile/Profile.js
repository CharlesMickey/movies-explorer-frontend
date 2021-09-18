import React from "react";
import Header from "../Header/Header";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useFormWithValidation } from "../validation/useFormWithValidation";
import { MESSAGE } from "../../utils/constants";
import Preloader from "../Preloader/Preloader";

function Profile({
  updateUserInfo,
  isLoading,
  isLoggedIn,
  signOut,
  handelOpenBurger,
}) {
  const currentUser = React.useContext(CurrentUserContext);
  const { setValues, values, handleChange, errors, isValid } =
    useFormWithValidation({ name: currentUser.name, email: currentUser.email });

  const firstName = currentUser.name && currentUser.name.split(" ")[0];
  const defaultName = currentUser.name === values.name ? false : true;
  const defaultEmail = currentUser.email === values.email ? false : true;

  React.useEffect(() => {
    const { name, email } = currentUser;
    setValues({ name, email });
  }, [currentUser, setValues]);

  function handleSubmit(e) {
    e.preventDefault();
    updateUserInfo({ name: values.name, email: values.email });
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
                    pattern="[a-zA-ZА-Яа-яёЁ\s_-]+$"
                    placeholder="Имя"
                    value={values.name || ""}
                    onChange={handleChange}
                    className={
                      !errors.name
                        ? "profile__input"
                        : "profile__input error-color"
                    }
                    minLength={2}
                    maxLength={30}
                    required
                  />
                </label>
                <span
                  className="auth__input-error auth__input-error_visible"
                  id="email-error"
                >
                  {errors.name && `${errors.name} ${MESSAGE.FORM.NAME}`}
                </span>
                <label className="profile__label">
                  Email
                  <input
                    autoComplete="on"
                    type="email"
                    name="email"
                    id="email"
                    pattern="[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    placeholder="Email"
                    value={values.email || ""}
                    onChange={handleChange}
                    className={
                      !errors.email
                        ? "profile__input"
                        : "profile__input error-color"
                    }
                    required
                  />
                </label>
                <span
                  className="auth__input-error auth__input-error_visible"
                  id="email-error"
                >
                  {errors.email && `${errors.email}  ${MESSAGE.FORM.EMAIL}`}
                </span>
              </fieldset>
              <button
                type="submit"
                value="Отправить на сервер"
                className="profile__button"
                disabled={!isValid || (!defaultName && !defaultEmail)}
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
