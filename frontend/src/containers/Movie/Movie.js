import React from 'react';
import './Movie.css';
import Loader from '../../components/Loader/Loader';
import config from '../../config';
import {getMovie} from '../../utils/api/actions';

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
    const movie = this.state.movie;

    if (!movie.id) {
      return <Loader />;
    }

    return (
      <div key={movie.id}>
        <h3>{movie.original_title}</h3>

        <img src={`${posterBaseUrl}${movie.poster_path}`}/> <br/>
        <p>{movie.overview}</p>
      </div>
    )
  }
}