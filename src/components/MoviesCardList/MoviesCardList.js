import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  createMovie,
  path,
  deleteMovie,
  movies,
  notFound,
  showMovies,
  showSavedMovies,
  cardLikeButtonClassName,
  isNumberOfMoviesToAdd,
  isNumberOfMoviesToRender,
  moreMoviesRender,
}) {
  const classUl =
    showMovies.length < 4
      ? "elements__list"
      : "elements__list elements__list_grid_center";

  let moviesRender = [...showMovies];
  moviesRender.length = isNumberOfMoviesToRender;
  const moreButtonVisible = moviesRender.length < showMovies.length;

  function handleMore() {
    return moreMoviesRender(isNumberOfMoviesToAdd + isNumberOfMoviesToRender);
  }

  return (
    <section className="elements">
      {!notFound && (
        <ul className={classUl}>
          {moviesRender.map((card) => (
            <MoviesCard
              showSavedMovies={showSavedMovies}
              createMovie={createMovie}
              card={card}
              path={path}
              deleteMovie={deleteMovie}
              key={card.id || card._id}
              cardLikeButtonClassName={cardLikeButtonClassName}
            />
          ))}
        </ul>
      )}
      {notFound && <p className="elements__not-found">Ничего не найдено</p>}
      {movies && moreButtonVisible && (
        <div className="elements__more">
          <button onClick={handleMore} className="elements__more-button link">
            Ещё
          </button>
        </div>
      )}
    </section>
  );
}

export default MoviesCardList;
