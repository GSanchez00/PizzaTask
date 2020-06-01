import React from 'react';
import {Route, Redirect} from 'react-router-dom'

export default function PrivateRoute({ isAuthenticated, children, ...rest }) {
    console.log("*****PrivateRoute******");
    
    return (
      <Route
        {...rest}
        render={({ location }) =>
          isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login"/*,
                state: { from: location }*/
              }}
            />
          )
        }
      />
    );
  }