import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import { useFormWithValidation } from "../validation/useFormWithValidation";

function Register({ register }) {
  const { values, handleChange, errors } = useFormWithValidation({});

  function handleSubmit(e) {
    e.preventDefault();
    console.log(values);
    register(values);
  }
  return (
    <AuthForm
      greeting={"Добро пожаловать"}
      authLink="Войти"
      linkPath="/signin"
      signText="Уже зарегистрированы?"
      buttonName="Зарегистрироваться"
      margin=""
      signUp={true}
      handleChangeInput={handleChange}
      handleSubmit={handleSubmit}
      errors={errors}
    />
  );
}

export default Register;
