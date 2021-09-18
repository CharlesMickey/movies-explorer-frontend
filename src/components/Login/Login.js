import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import { useFormWithValidation } from "../validation/useFormWithValidation";
import Preloader from "../Preloader/Preloader";
function Login({ onLogin, isLoading }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(values);
  }

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <AuthForm
          greeting="Рады видеть"
          authLink="Регистрация"
          linkPath="/signup"
          signText="Ещё не зарегистрированы?"
          buttonName="Войти"
          margin="login__submit_marg_signin"
          signUp={false}
          handleChangeInput={handleChange}
          handleSubmit={handleSubmit}
          errors={errors}
          isValid={isValid}
        />
      )}
    </>
  );
}

export default Login;
