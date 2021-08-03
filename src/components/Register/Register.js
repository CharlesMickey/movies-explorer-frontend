import React from "react";
import AuthForm from "../AuthForm/AuthForm";

function Register() {
  return (
    <AuthForm
      greeting={"Добро пожаловать"}
      authLink="Войти"
      linkPath="/signin"
      signText="Уже зарегистрированы?"
      buttonName="Зарегистрироваться"
      margin=""
      signUp={true}
    />
  );
}

export default Register;
