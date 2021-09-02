import React from "react";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";

function Movies({
  notFound,
  handelChangeCheckbox,
  isLoading,
  isLoggedIn,
  getMovies,
  showMovies,
  handelOpenBurger,
}) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} handelOpenBurger={handelOpenBurger} />
      <section className="movies">
        <SearchForm
          handelChangeCheckbox={handelChangeCheckbox}
          getMovies={getMovies}
        />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            movies={true}
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
