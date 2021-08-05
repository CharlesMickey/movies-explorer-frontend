import React from "react";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies({ handelOpenBurger }) {
  const isLoading = true;
  return (
    <>
      <Header handelOpenBurger={handelOpenBurger} />
      <section className="saved-movies">
        <SearchForm />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList cardLikeButtonClassName="element__like element__disabled" />
        )}
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
