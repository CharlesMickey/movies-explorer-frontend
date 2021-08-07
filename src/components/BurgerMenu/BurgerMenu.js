import React from "react";
import { Link, NavLink } from "react-router-dom";

import accIcon from "../../images/imgs_svg/account_icon.svg";

function BurgerMenu({ isOpen, onClose }) {
  return (
    <aside className={`burger-menu ${isOpen ? "burger-menu_opened" : ""}`}>
      <div className="burger-menu__container">
        <button
          type="button"
          onClick={onClose}
          className="burger-menu__button-close"
        />
        <ul className="burger-menu__navigation">
          <li className="burger-menu__list">
            <NavLink
              onClick={onClose}
              exact
              to="/"
              className="burger-menu__link link"
              activeClassName="burger-menu__link_text_active"
            >
              Главная
            </NavLink>
          </li>
          <li className="burger-menu__list">
            <NavLink
              onClick={onClose}
              to="/movies"
              className="burger-menu__link link"
              activeClassName="burger-menu__link_text_active"
            >
              Фильмы
            </NavLink>
          </li>
          <li className="burger-menu__list">
            <NavLink
              onClick={onClose}
              to="/saved-movies"
              className="burger-menu__link link"
              activeClassName="burger-menu__link_text_active"
            >
              Сохранённые фильмы
            </NavLink>
          </li>
        </ul>
        <Link
          onClick={onClose}
          to="/profile"
          className="burger-menu__link-account link"
        >
          <img
            className="burger-menu__icon"
            src={accIcon}
            alt="Символчное изображение человека"
          />
          Аккаунт
        </Link>
      </div>
    </aside>
  );
}

export default BurgerMenu;
