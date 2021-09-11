import React from "react";

function NotFound({ history }) {
  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>
      <p onClick={() => history.goBack()} className="not-found__link">
        Назад
      </p>
    </section>
  );
}

export default NotFound;
