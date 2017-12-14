import React from 'react';
import './Movie.css';
import Loader from '../../components/Loader/Loader';
import config from '../../config';
import {getMovie, addFavorites} from '../../utils/api/actions';
import {Redirect} from 'react-router-dom';
import MovieMenu from '../../components/MovieMenu';
import Star from '../../components/Star/Star';

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
    if (!this.props.token) {return;}

    this.setState({movie: await getMovie(this.movieId)});
  }

  async handleClick(isPressed) {
    if (isPressed) {
      console.log('add to favorites ');

      //const result = await addFavorites(this.movieId);
      //console.log(result);
    } else {
      console.log('remove from favorites');
    }
  }

  render() {
    if (!this.props.token) {
      return <Redirect to="/login"/>
    }

    const movie = this.state.movie;

    if (!movie.id) {
      return <Loader />;
    }

    return (
      <div>
        <MovieMenu />
        <Star pressed={false} handleClick={(isPressed) => this.handleClick(isPressed)}/>
        <div key={movie.id} className="movie-page">
          <h1>{movie.original_title}</h1>

          <img src={`${posterBaseUrl}${movie.poster_path}`}/> <br/>
          <p>{movie.overview}</p>
        </div>
      </div>
    )
  }
}