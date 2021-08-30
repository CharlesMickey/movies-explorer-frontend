import React from "react";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";

function Movies({ getMovies, handelOpenBurger }) {
  const isLoading = false;
  return (
    <>
      <Header handelOpenBurger={handelOpenBurger} />
      <section className="movies">
        <SearchForm getMovies={getMovies}/>
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList cardLikeButtonClassName="element__like" />
        )}
      </section>

      <Footer />
    </>
  );
}

export default Movies;
