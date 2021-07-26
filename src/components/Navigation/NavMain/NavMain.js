import React from "react";
import { Link } from "react-router-dom";
import accIcon from "../../../images/imgs_svg/account_icon.svg";
import burgerIcon from "../../../images/imgs_svg/burger_icon.svg"

function NavMain() {
  return (
    <nav className="navigation navigation__main_position">
      <ul className="navigation__main navigation__main_visible navigation__main_link_text">
        <li className="navigation__list">
          <Link to="/movies" className="navigation-main link navigation__main_link_text_active">
            Фильмы
          </Link>
        </li>
        <li className="navigation__list">
          <Link to="/saved-movies" className="navigation-main link">
            Сохранённые фильмы
          </Link>
        </li>
      </ul>
      <Link
        to="/profile"
        className="navigation__main navigation__main-account navigation__main_visible link"
      >
        <img
          className="navigation__main-icon"
          src={accIcon}
          alt="Символчное изображение человека"
        />
        Аккаунт
      </Link>
      <img
          className="navigation__main-burger link"
          src={burgerIcon}
          alt="Символчное изображение человека"
        />
    </nav>
  );
}

export default NavMain;
