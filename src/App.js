import React, { Component } from 'react';
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import Navbar from './components/Navbar/Navbar';
import { Redirect, Route, Switch } from "react-router-dom";
import Register from './components/Register';
import Login from './components/Login/Login';

class App extends Component {
    render() {
        return ( 

            <>
            < Navbar/>
            < Switch >

                < Route path="/home" component={Home}/> 
                < Route path="/register" component={Register} /> 
                < Route path="/login" component={Login} /> 
               <App Route path = "/movies"component = { Movies } />
              <Redirect exact from="/" to="/home" />
               
 </Switch>
                </>
           
        );
    }
}

export default App;