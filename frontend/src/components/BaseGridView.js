import React from 'react';
import config from '../config';
import {Redirect, Link} from 'react-router-dom';
import Loader from './Loader/Loader'
import MainMenu from './MainMenu';

const posterBaseUrl = config.posterBaseUrl;

export default class BaseGridView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
    };
  }

  /* override this */
  getContent() {
    return Promise.resolve([]);
  }

  async componentDidMount() {
    if (!this.props.token) {return;}

    const data = await this.getContent();
    const movies = data.map((movie) => {
      return (
        <div className="Grid-cell u-md-size1of4 movie-grid-item" key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <img src={`${posterBaseUrl}${movie.poster_path}`}/> <br/>
            <h3>{movie.original_title}</h3>
          </Link>
        </div>
      )
    });

    this.setState({movies: movies});
  }

  render() {
    if (!this.props.token) {
      return <Redirect to="/login"/>
    }

    let content = this.state.movies;

    if (this.state.movies.length == 0) {
      content = <Loader />
    }

    return (
      <div>
        <MainMenu />
        <div className="Panel">
          <div className="Grid Grid--alignCenter">
            {content}
          </div>
        </div>
      </div>
    );
  }
}