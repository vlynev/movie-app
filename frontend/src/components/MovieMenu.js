import React from 'react';
import {Link} from 'react-router-dom';

export default () => {
  return (
    <div className="nav-bar text-left">
      <nav>
        <ul>
          <li className="Button"><Link to={"/"}>&larr;Back</Link></li>
        </ul>
      </nav>
    </div>
  )
}
