import React from "react";

function AboutProject() {
  return (
    <section id="about-project" className="about-project">
      <h2 className="about-project__title main-title">О проекте</h2>
      <div className="about-project__texts">
        <article >
          <h3 className="about-project__text-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </article>
        <article >
          <h3 className="about-project__text-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </article>
      </div>
      <div className="about-project__timeframe">
        <p className="about-project__timeframe-item about-project__timeframe-item_back_color">1 неделя</p>
        <p className="about-project__timeframe-item">4 недели</p>
        <p className="about-project__timeframe-note">Back-end</p>
        <p className="about-project__timeframe-note">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;
