import React from 'react';
import './FavoritesStar.css';

export default class FavoritesStar extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      pressed: props.pressed || false
    }
  }

  handleClick() {
    const pressed = !this.state.pressed;

    this.setState({
      pressed: pressed
    });

    this.props.handleClick(pressed);
  }

  render() {
    const content = this.state.pressed ? (<span>★</span>) : (<span>☆</span>);

    return (
      <span className="favorites-star" onClick={() => this.handleClick()}>
        {content}
      </span>
    )
  }
}