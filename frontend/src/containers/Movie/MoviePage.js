import React from 'react';
import {Redirect} from 'react-router-dom';

import Loader from '../../components/Loader/Loader';
import MoviePanel from '../../components/TopPanel/MoviePanel';
import FavoritesStar from '../../components/FavoritesStar/FavoritesStar';

import * as actions from '../../utils/api/actions';
import * as configuration from '../../utils/api/configuration';

import './MoviePage.css';

const posterBaseUrl = configuration.getBasePosterUrl(configuration.poster_sizes.SINGLE);
const backdropUrl = configuration.getBackdropUrl(configuration.backdrop_sizes.DEFAULT);

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

    console.log(`${backdropUrl}${movie.backdrop_path}`);

    if (movie !== null) {
      this.setState({content: this.renderMovie(movie)});
    } else {
      this.setState({content: <h1>Not Found</h1>});
    }
  }

  async handleClick(isPressed) {
    if (isPressed) {
      const result = await actions.addFavorites(this.movieId);

      console.log(`add to favorites ${result}`);
    } else {
      const result = await actions.removeFavorites(this.movieId);

      console.log(`remove from favorites ${result}`);
    }
  }

  renderMovie(movie) {
    return (
      <div>
        <MoviePanel movie={movie}>
          <FavoritesStar pressed={movie.in_favorites} handleClick={(isPressed) => this.handleClick(isPressed)}/>
        </MoviePanel>
        <div className="Panel">
          <div className="Grid Grid--alignCenter">
            <div key={movie.id} className="movie-page Grid-cell">
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