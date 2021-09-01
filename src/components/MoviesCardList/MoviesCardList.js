import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ showMovies, cardLikeButtonClassName }) {
  const classUl =
    showMovies.length < 4
      ? "elements__list"
      : "elements__list elements__list_grid_center";

  return (
    <section className="elements">
      <ul className={classUl}>
        {showMovies.map((card) => (
          <MoviesCard
            duration={card.duration}
            img={card.img}
            name={card.nameRU}
            key={card.id}
            cardLikeButtonClassName={cardLikeButtonClassName}
          />
        ))}
      </ul>
      <div className="elements__more">
        <button className="elements__more-button link">Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
