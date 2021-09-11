import React from "react";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies({ notFound, isLoading, isLoggedIn, handelOpenBurger }) {
  const showMovies = [
    {
      id: 10,
      nameRU: "Фильм: Пи Джей Харви: A dog called money",
      duration: 80,
      img: "https://api.nomoreparties.co/uploads/maxresdefault_505b3fa578.jpeg",
    },
    {
      id: 5,
      nameRU: "Allison",
      duration: 35,
      img: "https://api.nomoreparties.co/uploads/maxresdefault_505b3fa578.jpeg",
    },
    {
      id: 3,
      nameRU: "James",
      duration: 46,
      img: "https://api.nomoreparties.co/uploads/maxresdefault_505b3fa578.jpeg",
    },
    {
      id: 11,
      nameRU: "Gregory",
      duration: 24,
      img: "https://api.nomoreparties.co/uploads/maxresdefault_505b3fa578.jpeg",
    },
  ];
  return (
    <>
      <Header isLoggedIn={isLoggedIn} handelOpenBurger={handelOpenBurger} />
      <section className="saved-movies">
        <SearchForm savedMovies={true} />
        {!notFound && isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList
            isNumberOfMoviesToRender={showMovies.length}
            showMovies={showMovies}
            cardLikeButtonClassName="element__like element__disabled"
          />
        )}
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
