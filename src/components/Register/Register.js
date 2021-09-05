import React from "react";
import AuthForm from "../AuthForm/AuthForm";
import Preloader from "../Preloader/Preloader";
import { useFormWithValidation } from "../validation/useFormWithValidation";

function Register({ register, isLoading }) {
  const { values, handleChange, errors, isValid } = useFormWithValidation({
    name: "",
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(values);
    register(values);
  }
  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
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
          isValid={isValid}
          isLoading={isLoading}
        />
      )}
    </>
  );
}

export default Register;
