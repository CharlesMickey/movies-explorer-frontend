import React from "react";

function Footer() {
  return (
    <section className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h2>
      <div className="footer__row footer__columns">
        <p className="footer__year">&copy; 2021</p>
        <ul className="footer__links">
          <li className="footer__link">
            <a
              href="https://praktikum.yandex.ru"
              rel="noopener noreferrer"
              className="link"
              target="_blank"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__link">
            <a
              href="https://t.me/CharlesMickey"
              rel="noopener noreferrer"
              className="link"
              target="_blank"
            >
              Телеграм
            </a>
          </li>
          <li className="footer__link">
            <a
              href="https://github.com/CharlesMickey"
              rel="noopener noreferrer"
              className="link"
              target="_blank"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Footer;
