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
      content: <Loader />
    };
  }

  /* override this */
  getContent() {
    return Promise.resolve([]);
  }

  async componentDidMount() {
    if (!this.props.token) {
      return;
    }

    const data = await this.getContent();

    if (data.length > 0) {
      this.setState({content: data.map(this.renderMovieItem)});
    } else {
      this.setState({content: <h1>No Records</h1>});
    }
  }

  renderMovieItem(movie) {
    return (
      <div className="Grid-cell u-md-size1of4 movie-grid-item" key={movie.id}>
        <Link to={`/movie/${movie.id}`}>
          <img src={`${posterBaseUrl}${movie.poster_path}`}/> <br/>
          <h3>{movie.original_title}</h3>
        </Link>
      </div>
    )
  }

  render() {
    if (!this.props.token) {
      return <Redirect to="/login"/>
    }

    return (
      <div>
        <MainMenu />
        <div className="Panel">
          <div className="Grid Grid--alignCenter">
            {this.state.content}
          </div>
        </div>
      </div>
    );
  }
}