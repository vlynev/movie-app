import React from 'react';
import {Redirect} from 'react-router-dom';
import {setVal, getVal, clearVal} from '../utils/storage';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    clearVal('token');
  }

  render() {
    return <Redirect to="/login"/>
  }
}