import React from 'react';
import {Redirect, Link} from 'react-router-dom';

import Loader from '../../components/Loader/Loader'
import MainMenu from '../../components/TopPanel/MainPanel';

import * as configuration from '../../utils/api/configuration';

import './BaseGridView.css';

const posterBaseUrl = configuration.getBasePosterUrl(configuration.poster_sizes.GRID);

export default class BaseGridView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: <Loader />
    };
  }

  /**
   * Need to be overridden
   * */
  getContent() {
    return Promise.resolve([]);
  }

  async componentDidMount() {
    if (!this.props.token) {
      return;
    }

    const data = await this.getContent();

    if (data.length > 0) {
      this.setState({content: data.map(movie => this.renderMovieItem(movie))});
    } else {
      this.setState({content: <h1>No Records</h1>});
    }
  }

  renderMovieItem(movie) {
    return (
      <div className="Grid-cell u-md-size1of3 movie-grid-item" key={movie.id}>
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