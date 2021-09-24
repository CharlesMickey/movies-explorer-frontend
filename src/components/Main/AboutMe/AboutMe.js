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
            Я живу в Санкт-Петербурге, закончил факультет ЕГиТ ЛГУ им. А.С.
            Пушкина. У меня есть супруга и дочь. Люблю писать код под музыку, а ещё
            увлекаюсь настольными играми. В 2020 году
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
    </section>
  );
}

export default AboutMe;
