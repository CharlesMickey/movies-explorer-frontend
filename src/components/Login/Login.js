import React from "react";
import AuthForm from "../AuthForm/AuthForm";

function Login({ onLogin }) {
  const [stateInput, setStateInput] = React.useState({
    email: "",
    password: "",
  });

  function handleChangeInput(e) {
    const { name, value } = e.target;
    setStateInput({ ...stateInput, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(stateInput)
    onLogin(stateInput);
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
      handleChangeInput={handleChangeInput}
      handleSubmit={handleSubmit}
    />
  );
}

export default Login;
