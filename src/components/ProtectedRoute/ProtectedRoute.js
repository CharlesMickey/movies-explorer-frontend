import React from "react";
import { Redirect, Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...props }) => {
  return (
    <Route>
         {
        props.isLoggedIn === false && <Redirect to="/" />
      }
      {
        props.isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={props.path} />
        )
      }

    </Route>
  );
};

export default ProtectedRoute;
