import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './components/Header/Header';
import LoginPage from './containers/LoginPage';
import LogoutPage from './containers/LogoutPage';
import SignUpPage from './containers/SignUpPage';
import DashboardPage from './containers/DashboardPage';
import FavoritesPage from './containers/FavoritesPage';
import MoviePage from "./containers/Movie/MoviePage";

import * as storage from './utils/storage';

import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const token = storage.getVal('token');

    return (
      <Router>
        <div>
          <Header />
          <div className="Wrapper">
            <Switch>
              <Route path="/login" component={LoginPage}/>
              <Route path="/logout" component={LogoutPage}/>
              <Route path="/sign-up" component={SignUpPage}/>
              <Route path="/favorites" component={(routeProps) => <FavoritesPage {...routeProps} token={token}/>}/>
              <Route path="/movie/:id" component={(routeProps) => <MoviePage {...routeProps} token={token}/>}/>
              <Route path="/" component={(routeProps) => <DashboardPage {...routeProps} token={token}/>}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}