import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import verMasTarde from './ver-mas-tarde.svg';

export default () => {
  const token = localStorage.getItem('token');

  return (
    <header className="HeaderLogin">
      <div className="HeaderLogin-content">
        <div className="HeaderLogin-logo">
          <figure>
            <img className="Header-logoImage" src={verMasTarde} alt="Paga+Tarde" />
          </figure>
          <h1 className="HeaderLogin-title">Paga+Tarde</h1></div>
      </div>
      <div className="nav-bar">
        <nav>
          <ul>
            <li className="Button"><Link to={"/"}>Home</Link></li>
            <li className="Button"><Link to={"/favorites"}>Favorites</Link></li>
            {
              token ?
                (<li className="Button"><Link to={"/logout"}>Logout</Link></li>) :
                (<li className="Button"><Link to={"/login"}>Login</Link></li>)
            }
          </ul>
        </nav>
      </div>

    </header>
  )
}