import React from "react";

import Header from "../Header/Header";
import AboutProject from "./AboutProject/AboutProject";
import NavTab from "./NavTab/NavTab";
import Promo from "./Promo/Promo";
import Techs from "./Techs/Techs";

function Main() {
  return (
    <>
      <Header />
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
    </>
  );
}

export default Main;
