import React from 'react';
import {Link} from 'react-router-dom';
import './TopPanel.css';

export default () => {
  const token = localStorage.getItem('token');

  return (
    <div className="nav-bar text-center top-panel main-panel">
      <nav>
        <ul>
          <li className="Button"><Link to={"/"}>Home</Link></li>
          <li className="Button"><Link to={"/favorites"}>Favorites</Link></li>

          <li className="Button">
            {
              token ?
                (<Link to={"/logout"}>Logout</Link>) :
                (<Link to={"/login"}>Login</Link>)
            }
          </li>
        </ul>
      </nav>
    </div>
  )
}