import React from 'react';

import loadingIcon from './Loading_icon.gif';
import './Loader.css';

export default () => (
  <div className="loader-container">
    <img src={loadingIcon} />
  </div>
);