import React from 'react';
import {Redirect} from 'react-router-dom';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    localStorage.removeItem('token');
  }

  render() {
    return <Redirect to="/login"/>
  }
}