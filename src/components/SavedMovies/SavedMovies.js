import React from "react";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";

function SavedMovies() {
  return (
    <>
      <Header />
      <section className="saved-movies">
        <SearchForm />
        <Preloader />
      </section>
      <Footer />
    </>
  );
}

export default SavedMovies;
