import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './components/Header/Header';
import Login from './containers/Login';
import SignUp from './containers/SignUp';
import Dashboard from './containers/Dashboard';
import Favorites from './containers/Favorites';
import Movie from "./containers/Movie";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.token = localStorage.getItem('token');
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="Wrapper">
            <Switch>
              <Route path="/login" component={Login}/>
              <Route path="/users/sign_up" component={SignUp}/>
              <Route path="/favorites" component={(routeProps) => <Favorites {...routeProps} token={this.token}/>}/>
              <Route path="/movie/:id" component={(routeProps) => <Movie {...routeProps} token={this.token}/>}/>
              <Route path="/" component={(routeProps) => <Dashboard {...routeProps} token={this.token}/>}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}