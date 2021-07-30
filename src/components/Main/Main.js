import React from "react";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";
import AboutMe from "./AboutMe/AboutMe";
import AboutProject from "./AboutProject/AboutProject";
import NavTab from "./NavTab/NavTab";
import Promo from "./Promo/Promo";
import Techs from "./Techs/Techs";

function Main() {
  const headerColor = "header-color";
  return (
    <>
      <Header headerColor={headerColor} />
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Footer />
    </>
  );
}

export default Main;
