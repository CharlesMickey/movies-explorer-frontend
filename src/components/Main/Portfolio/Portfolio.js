import React from "react";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item link">
          <a
            href="https://github.com/CharlesMickey/how-to-learn"
            rel="noopener noreferrer"
            className="portfolio__item-link link"
            target="_blank"
          >
            Статичный сайт
          </a>
        </li>
        <li className="portfolio__item link">
          <a
            href="https://github.com/CharlesMickey/russian-travel"
            rel="noopener noreferrer"
            className="portfolio__item-link  link"
            target="_blank"
          >
            Адаптивный сайт
          </a>
        </li>
        <li className="portfolio__item link">
          <a
            href="https://github.com/CharlesMickey/react-mesto-api-full"
            rel="noopener noreferrer"
            className="portfolio__item-link  link"
            target="_blank"
          >
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
