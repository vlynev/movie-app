import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './components/Header/Header';
import Login from './containers/LoginPage';
import Logout from './containers/LogoutPage';
import SignUp from './containers/SignUpPage';
import Dashboard from './containers/DashboardPage';
import Favorites from './containers/FavoritesPage';
import Movie from "./containers/Movie/MoviePage";
import {setVal, getVal} from './utils/storage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const token = getVal('token');

    return (
      <Router>
        <div>
          <Header />
          <div className="Wrapper">
            <Switch>
              <Route path="/login" component={Login}/>
              <Route path="/logout" component={Logout}/>
              <Route path="/sign-up" component={SignUp}/>
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