import React from 'react';
import BaseGridView from './BaseGridView/BaseGridView';
import {getFavorites} from '../utils/api/actions';

export default class Favorites extends BaseGridView {
  getContent() {
    return getFavorites();
  }
}