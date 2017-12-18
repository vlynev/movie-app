import React from 'react';
import { withRouter } from "react-router-dom";

import './BackArrow.css';

const Back = ({ history }) => {
  const to = history.length > 1 ? history.goBack : history.go('/');

  return (
    <span className="back-arrow" onClick={to}>
      &larr;
    </span>
  );
};

export default withRouter(Back);