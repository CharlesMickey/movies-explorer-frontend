import React from "react";
import AuthForm from "../AuthForm/AuthForm";

function Login() {
  return (
    <AuthForm
      greeting="Рады видеть"
      authLink="Регистрация"
      linkPath="/signup"
      signText="Ещё не зарегистрированы?"
      buttonName="Войти"
      margin = "auth__submit_marg_sinin"
      signUp={false}

    />
  );
}

export default Login;
