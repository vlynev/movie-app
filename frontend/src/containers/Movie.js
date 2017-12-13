import React from 'react';
import '../components/Movie/Movie.css';
import config from '../config';
import {getMovie} from '../utils/api/actions';

const posterBaseUrl = config.posterBaseUrl;

export default class Movie extends React.Component {
  constructor(props) {
    super(props);

    this.movieId = this.props.match.params.id;

    this.state = {
      movie: {}
    }
  }

  async componentDidMount() {
    this.setState({movie: await getMovie(this.movieId)});
  }

  render() {
    return (
      <div key={this.state.movie.id}>
        <h3>{this.state.movie.original_title}</h3>
        <img src={`${posterBaseUrl}${this.state.movie.poster_path}`}/> <br/>
        <p>{this.state.movie.overview}</p>
      </div>
    )
  }
}