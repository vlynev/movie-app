import React from 'react';
import '../components/Movie/Movie.css';

export default class Movie extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>{this.props.match.params.id}</h1>
    )
  }
}