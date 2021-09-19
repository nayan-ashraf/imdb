import React, { Component } from 'react';
import LogIn from './logIn.component';
import Movies from './movies';
import Navbar from './navbar';
import { Route, Switch } from 'react-router-dom';



class App extends Component {
    state = {  }
  
    render() { 
     
        return ( 
            <>
                 <Navbar />                  
            
              <Switch>
              <Route path = "/movies" component = { Movies } /> 
                  <Route path = "/logIn" component={LogIn}/>
                  <Route exact path="/" component={Movies}/>
                  
              </Switch>
             
              </>
         );
    }
}
 
export default App;