import React from "react";
import { Link } from "react-router-dom";

function NavAuth() {
  return (
    <nav className="navigation">
      <Link to="/signup" className="navigation__auth-signup link">
        Регистрация
      </Link>
      <Link to="/signin" className="navigation__auth-signin link">
        Войти
      </Link>
    </nav>
  );
}

export default NavAuth;
