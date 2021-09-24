import React from "react";
import parserDuration from "../../utils/parserDuration.js";

function MoviesCard({
  isAllSavedMovies,
  card,
  createMovie,
  path,
  deleteMovie,
  cardLikeButtonClassName,
}) {
  const [isLoading, setIsLoading] = React.useState(false);
  const movie =
    path === "movies"
      ? isAllSavedMovies.find((movie) => movie.movieId === card.movieId)
      : false;

   function handelClick() {
    setIsLoading(true);
    if (path === "savedMovies") {
      return deleteMovie(card._id).finally(() => setIsLoading(false));
    } else if (movie) {
      return deleteMovie(movie._id).finally(() => setIsLoading(false));
    } else {
      return createMovie(card).finally(() => setIsLoading(false));
    }
  }
  return (
    <li className="element">
      <a href={card.trailer} rel="noopener noreferrer" target="_blank">
        <img className="element__image" src={card.image} alt={card.nameRU} />
      </a>
      <div className="element__card">
        <div className="element__likes-group">
          <h2 className="element__title">{card.nameRU}</h2>
          {
            <button
              type="button"
              onClick={handelClick}
              className={`link ${cardLikeButtonClassName} ${
                (movie && "element__like_active") || ""
              } ${isLoading && `element__like element__like_loading `}`}
            ></button>
          }
        </div>
        <p className="element__duration">{parserDuration(card.duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;
