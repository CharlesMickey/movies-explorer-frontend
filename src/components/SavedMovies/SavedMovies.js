import React from "react";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies({ isLoading, isLoggedIn, handelOpenBurger }) {
  const showMovies =  [
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
  return (
    <>
      <Header isLoggedIn={isLoggedIn} handelOpenBurger={handelOpenBurger} />
      <section className="saved-movies">
        <SearchForm />
        {isLoading ? (
          <Preloader />
        ) : (
          <MoviesCardList  showMovies={showMovies} cardLikeButtonClassName="element__like element__disabled" />
        )}
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
