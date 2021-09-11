import React from "react";
import NavAuth from "./NavAuth/NavAuth";
import NavMain from "./NavMain/NavMain";

function Navigation({ handelOpenBurger, isLoggedIn }) {
  return isLoggedIn ? (
    <NavMain handelOpenBurger={handelOpenBurger} />
  ) : (
    <NavAuth />
  );
}

export default Navigation;
