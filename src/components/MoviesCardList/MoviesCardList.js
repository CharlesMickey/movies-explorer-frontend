import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ cardLikeButtonClassName }) {
  const cards = [1, 2, 3, 4];

  const classUl =
    cards.length < 4
      ? "elements__list"
      : "elements__list elements__list_grid_center";

  return (
    <section className="elements">
      <ul className={classUl}>
        {cards.map(() => (
          <MoviesCard cardLikeButtonClassName={cardLikeButtonClassName} />
        ))}
      </ul>
      <div className="elements__more">
        <button className="elements__more-button link">
          Ещё
        </button>
      </div>
    </section>
  );
}

export default MoviesCardList;
