import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/imgs_svg/logo.svg";
import Navigation from "../Navigation/Navigation";

const isLoggedIn = true;

function Header() {
  return (
    <header className="header header-color">
      <Link to="/">
        <img
          className="header__logo"
          src={logo}
          alt="Логотип названия сайта Место"
        />
      </Link>
      <Navigation isLoggedIn={isLoggedIn} />
    </header>
  );
}

export default Header;
