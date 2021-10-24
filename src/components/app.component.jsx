import React, { Component } from "react";
import LogIn from "./logIn.component";
import Movies from "./movies";
import Navbar from "./navbar.component";
import { Route, Switch } from "react-router-dom";
import SignUp from "./signup.component";
import Logout from "./logout.component";
import AddMovies from "./addMovies.component";
import ProtectedRoute from './common/protectedRoute';

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Navbar />        

        <Switch>
          <ProtectedRoute path="/movies" component={Movies} />
          <ProtectedRoute path="/add-movie" component={AddMovies} />
          <Route path="/logIn" component={LogIn} />
          <Route path="/logOut" component={Logout} />
          <Route path="/signUp" component={SignUp} />
          <Route exact path="/" component={Movies} />
        </Switch>
      </>
    );
  }
}

export default App;
