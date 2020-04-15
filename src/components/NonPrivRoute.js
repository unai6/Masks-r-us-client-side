import React from "react";
import { Route, Redirect } from "react-router-dom";
import {needAuth} from '../lib/Auth-provider'



function NonPrivRoute({ component: Component, isLoggedin, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        !isLoggedin ? <Component {...props} /> : <Redirect to='/user' />
      }
    />
  );
}

export default needAuth(NonPrivRoute);
