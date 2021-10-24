import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { getCurrentUser } from '../../services/user-service';


const ProtectedRoute = ({ component: Component, path, ...rest}) => {
        return ( 
                <Route 
                        {...rest}
                        exact
                        path = { path }
                        render={(props) => (
                                (getCurrentUser())?
                                <Component {...props}  />: <Redirect to='/logIn'/>
                        )}
                />
         );
}
 
export default ProtectedRoute;