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
      content: <Loader />
    };
  }

  async componentDidMount() {
    if (!this.props.token) {
      return;
    }

    const movie = await getMovie(this.movieId);

    if (movie !== null) {
      this.setState({content: this.renderMovie(movie)});
    } else {
      this.setState({content: <h1>Not Found</h1>});
    }
  }

  async handleClick(isPressed) {
    if (isPressed) {
      console.log('add to favorites ');

      const result = await addFavorites(this.movieId);
    } else {
      console.log('remove from favorites');
    }
  }

  renderMovie(movie) {
    return (
      <div>
        <MovieMenu>
          <Star pressed={false} handleClick={(isPressed) => this.handleClick(isPressed)}/>
        </MovieMenu>
          <div key={movie.id} className="movie-page">
          <h1>{movie.original_title}</h1>

          <img src={`${posterBaseUrl}${movie.poster_path}`}/> <br/>
          <p>{movie.overview}</p>
        </div>
      </div>
    );
  }

  render() {
    if (!this.props.token) {
      return <Redirect to="/login"/>
    }

    return this.state.content;
  }
}