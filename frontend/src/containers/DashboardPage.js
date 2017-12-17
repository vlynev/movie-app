import React from 'react';
import BaseGridView from './BaseGridView/BaseGridView';
import {getMovies} from '../utils/api/actions';

export default class Dashboard extends BaseGridView {
  getContent() {
    return getMovies();
  }
}