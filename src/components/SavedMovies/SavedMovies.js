import React from "react";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies({
  deleteMovie,
  handelChangeCheckbox,
  isShortMovies,
  getMovies,
  notFound,
  isLoading,
  isLoggedIn,
  handelOpenBurger,
  showSavedMovies,
}) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} handelOpenBurger={handelOpenBurger} />
      <section className="saved-movies">
        <SearchForm
          handelChangeCheckbox={handelChangeCheckbox}
          isShortMovies={isShortMovies}
          savedMovies={true}
          place={localStorage.savedMovies}
          getMovies={getMovies}
        />
        {!notFound && isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            path="savedMovies"
            deleteMovie={deleteMovie}
            notFound={notFound}
            isNumberOfMoviesToRender={showSavedMovies.length}
            showMovies={showSavedMovies}
            cardLikeButtonClassName="element__like element__disabled"
          />
        )}
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
