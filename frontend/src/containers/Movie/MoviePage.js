import React from 'react';
import {Redirect} from 'react-router-dom';

import Loader from '../../components/Loader/Loader';
import MoviePanel from '../../components/TopPanel/MoviePanel';
import FavoritesStar from '../../components/FavoritesStar/FavoritesStar';

import * as actions from '../../utils/api/actions';
import * as configuration from '../../utils/api/configuration';

import './MoviePage.css';

const posterBaseUrl = configuration.getBasePosterUrl(configuration.sizes.SINGLE_POSTER);

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

    const movie = await actions.getMovie(this.movieId);

    if (movie !== null) {
      this.setState({content: this.renderMovie(movie)});
    } else {
      this.setState({content: <h1>Not Found</h1>});
    }
  }

  async handleClick(isPressed) {
    if (isPressed) {
      console.log('add to favorites ');

      const result = await actions.addFavorites(this.movieId);
    } else {
      console.log('remove from favorites');
    }
  }

  renderMovie(movie) {
    return (
      <div>
        <MoviePanel movie={movie}>
          <FavoritesStar pressed={false} handleClick={(isPressed) => this.handleClick(isPressed)}/>
        </MoviePanel>
        <div key={movie.id} className="movie-page">
          <h1>{movie.original_title}</h1>
          <div>
            <div className="poster-container">
              <img src={`${posterBaseUrl}${movie.poster_path}`}/>
            </div>
            <div className="overview-container">
              <p>{movie.overview}</p>
            </div>
            <div className="clear"></div>
          </div>
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