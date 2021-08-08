import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import { useFormWithValidation } from "../validation/useFormWithValidation";

function Login({ onLogin }) {
  const { values, handleChange } = useFormWithValidation({});


  function handleSubmit(e) {
    e.preventDefault();
    console.log(values)
    onLogin(values);
  }

  return (
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
    />
  );
}

export default Login;
