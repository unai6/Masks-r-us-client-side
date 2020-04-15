import React from "react";
import { Route, Redirect } from "react-router-dom";
import { needAuth } from "../lib/Auth-provider";

function PrivateRoute({ component: Component, isLoggedin, ...rest }) {

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedin ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  );
}

export default needAuth(PrivateRoute);
