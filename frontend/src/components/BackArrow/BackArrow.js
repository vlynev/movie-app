import React from 'react';
import {Link} from 'react-router-dom';
import './BackArrow.css';

export default (props) => {
  return (
    <span className="back-arrow">
      <Link to={props.to}>&larr;</Link>
    </span>
  )
}
