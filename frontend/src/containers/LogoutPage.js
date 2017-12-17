import React from 'react';
import {Redirect} from 'react-router-dom';
import * as storage from '../utils/storage';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    storage.clearVal('token');
  }

  render() {
    return <Redirect to="/login"/>
  }
}