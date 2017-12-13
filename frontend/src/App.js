import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './components/Header/Header';
import Login from './containers/Login';
import Logout from './containers/Logout';
import SignUp from './containers/SignUp';
import Dashboard from './containers/Dashboard';
import Favorites from './containers/Favorites';
import Movie from "./containers/Movie/Movie";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const token = localStorage.getItem('token');

    return (
      <Router>
        <div>
          <Header />
          <div className="Wrapper">
            <Switch>
              <Route path="/login" component={Login}/>
              <Route path="/logout" component={Logout}/>
              <Route path="/users/sign_up" component={SignUp}/>
              <Route path="/favorites" component={(routeProps) => <Favorites {...routeProps} token={token}/>}/>
              <Route path="/movie/:id" component={(routeProps) => <Movie {...routeProps} token={token}/>}/>
              <Route path="/" component={(routeProps) => <Dashboard {...routeProps} token={token}/>}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}