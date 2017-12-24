import React from 'react';
import { withRouter } from "react-router-dom";

import './BackArrow.css';

const Back = ({ history }) => {
  if (history.length) {
    return (
      <span className="back-arrow" onClick={history.goBack}>
        &larr;
      </span>
    );
  }
};

export default withRouter(Back);