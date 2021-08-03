import React from "react";
import NavAuth from "./NavAuth/NavAuth";
import NavMain from "./NavMain/NavMain";

function Navigation({ isLoggedIn }) {
  return isLoggedIn ? <NavMain /> : <NavAuth />;
}

export default Navigation;
