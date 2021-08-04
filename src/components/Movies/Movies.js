import React from "react";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";

function Movies({ handelOpenBurger }) {
  return (
    <>
      <Header handelOpenBurger={handelOpenBurger} />
      <section className="movies">
        <SearchForm />
        <Preloader />
      </section>

      <Footer />
    </>
  );
}

export default Movies;
