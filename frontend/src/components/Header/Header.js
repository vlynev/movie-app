import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import verMasTarde from './ver-mas-tarde.svg';

export default () => (
  <header className="HeaderLogin">
    <div className="HeaderLogin-content">
      <div className="HeaderLogin-logo">
        <figure>
          <img className="Header-logoImage" src={verMasTarde} alt="Paga+Tarde" />
        </figure>
        <h1 className="HeaderLogin-title">Paga+Tarde</h1></div>
    </div>
    <nav>
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/login"}>Login</Link></li>
        <li><Link to={"/movie/11"}>Movie</Link></li>
        <li><Link to={"/favorites"}>Favorites</Link></li>
      </ul>
    </nav>
  </header>
)