import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
  const token = localStorage.getItem('token');

  return (
    <div className="nav-bar text-center">
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