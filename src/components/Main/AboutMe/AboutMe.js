import React from "react";

import studentPhoto from "../../../images/photo-stydent.jpg";

function AboutMe() {
  return (
    <section id="about-me" className="about-me">
      <h2 className="main-title">Студент</h2>
      <section className="about-me__info">
        <div className="about-me__info-container">
          <h3 className="about-me__name">Артур</h3>
          <p className="about-me__subtitle">Фронтенд-разработчик, 33 года</p>
          <p className="about-me__summary">
            Я живу в Санкт_Петербурге, закончил факультет ЕГиТ ЛГУ им. А.С.
            Пушкина. У меня есть жена и дочь. Я люблю слушать музыку, а ещё
            увлекаюсь настольными играми. Недавно начал кодить. В 2020 году
            решил изменить жизнь. Прошел курсы по HTML и CSS на Coursera. После
            прошел курс по Веб-разработке от Я.Практикума.
          </p>
          <ul className="about-me__social-list">
            <li className="about-me__social-item">
              <a
                href="https://t.me/CharlesMickey"
                rel="noopener noreferrer"
                className="link"
                target="_blank"
              >
                Телеграм
              </a>
            </li>
            <li className="about-me__social-item">
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
        <img
          className="about-me__photo"
          src={studentPhoto}
          alt="Фотография студента"
        />
      </section>
      <section className="about-me__portfolio">
        <h3 className="about-me__portfolio-title">Портфолио</h3>
        <ul className="about-me__portfolio-list">
          <li className="about-me__portfolio-item link">
            <a
              href="https://github.com/CharlesMickey/how-to-learn"
              rel="noopener noreferrer"
              className="about-me__portfolio-item-link link"
              target="_blank"
            >
              Статичный сайт
            </a>
          </li>
          <li className="about-me__portfolio-item link">
            <a
              href="https://github.com/CharlesMickey/russian-travel"
              rel="noopener noreferrer"
              className="link"
              target="_blank"
            >
              Адаптивный сайт
            </a>
          </li>
          <li className="about-me__portfolio-item link">
            <a
              href="https://github.com/CharlesMickey/react-mesto-api-full"
              rel="noopener noreferrer"
              className="link"
              target="_blank"
            >
              Одностраничное приложение
            </a>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default AboutMe;
