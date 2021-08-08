import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({ cardLikeButtonClassName }) {
  const cards = [
    {
      id: 10,
      name: "Фильм: Пи Джей Харви: A dog called money",
      lastMessageAt: "20:45",
    },
    {
      id: 5,
      name: "Allison",
      lastMessageAt: "12:31",
    },
    {
      id: 3,
      name: "James",
      lastMessageAt: "07:40",
    },
    {
      id: 11,
      name: "Gregory",
      lastMessageAt: "20:45",
    },
  ];

  const classUl =
    cards.length < 4
      ? "elements__list"
      : "elements__list elements__list_grid_center";

  return (
    <section className="elements">
      <ul className={classUl}>
        {cards.map((card) => (
          <MoviesCard name={card.name} key={card.id} cardLikeButtonClassName={cardLikeButtonClassName} />
        ))}
      </ul>
      <div className="elements__more">
        <button className="elements__more-button link">Ещё</button>
      </div>
    </section>
  );
}

export default MoviesCardList;
