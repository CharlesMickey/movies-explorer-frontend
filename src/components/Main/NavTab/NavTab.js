import React from "react";

function NavTab() {
  return (
    <section className="nav-tab">
      <div className="nav-tab__list">
        <a href="#about-project" className="nav-tab__list-element link">
          О проекте
        </a>
        <a href="#techs" className="nav-tab__list-element link">
          Технологии
        </a>
        <a href="#about-me" className="nav-tab__list-element link">
          Студент
        </a>
      </div>
    </section>
  );
}

export default NavTab;
