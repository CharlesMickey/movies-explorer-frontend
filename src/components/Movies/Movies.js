import React from "react";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";

function Movies({
  showSavedMovies,
  createMovie,
  notFound,
  handelChangeCheckbox,
  isLoading,
  isLoggedIn,
  getMovies,
  showMovies,
  handelOpenBurger,
  isNumberOfMoviesToAdd,
  isNumberOfMoviesToRender,
  moreMoviesRender,
  isShortMovies,
  deleteMovie,
}) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} handelOpenBurger={handelOpenBurger} />
      <section className="movies">
        <SearchForm
          handelChangeCheckbox={handelChangeCheckbox}
          getMovies={getMovies}
          place={localStorage.movies}
          isShortMovies={isShortMovies}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            deleteMovie={deleteMovie}
            path="movies"
            showSavedMovies={showSavedMovies}
            createMovie={createMovie}
            movies={true}
            isNumberOfMoviesToAdd={isNumberOfMoviesToAdd}
            isNumberOfMoviesToRender={isNumberOfMoviesToRender}
            moreMoviesRender={moreMoviesRender}
            notFound={notFound}
            showMovies={showMovies}
            cardLikeButtonClassName="element__like"
          />
        )}
      </section>

      <Footer />
    </>
  );
}

export default Movies;
