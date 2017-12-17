import React from 'react';
import BackArrow from '../BackArrow/BackArrow';
import './TopPanel.css';

export default (props) => {
  const child = props.children ? <div className="menu-item right">{props.children}</div> : '';

  return (
    <div className="nav-bar text-left top-panel movie-panel">
      <div className="menu-item">
        <BackArrow to="/"/>
      </div>
      {child}
      <div className="clear"></div>
    </div>
  )
}
