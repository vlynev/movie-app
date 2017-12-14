import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {
  console.log(props)

  return (
    <div className="nav-bar text-left">
      <nav>
        <ul>
          <li className="Button"><Link to={"/"}>&larr;Back</Link></li>
          {props.children}
        </ul>
      </nav>
    </div>
  )
}
