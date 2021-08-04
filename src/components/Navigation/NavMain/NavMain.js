import React from "react";
import { Link, NavLink } from "react-router-dom";
import accIcon from "../../../images/imgs_svg/account_icon.svg";
import burgerIcon from "../../../images/imgs_svg/burger_icon.svg";

function NavMain({ handelOpenBurger }) {
  return (
    <nav className="navigation navigation__main_position">
      <ul className="navigation__main navigation__main_visible navigation__main_link_text">
        <li className="navigation__list">
          <NavLink
            to="/movies"
            className="navigation-main link"
            activeClassName="navigation__main_link_text_active"
          >
            Фильмы
          </NavLink>
        </li>
        <li className="navigation__list">
          <NavLink
            to="/saved-movies"
            className="navigation-main link"
            activeClassName="navigation__main_link_text_active"
          >
            Сохранённые фильмы
          </NavLink>
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
        onClick={handelOpenBurger}
        alt="Картинка для кнопки меню"
      />
    </nav>
  );
}

export default NavMain;
