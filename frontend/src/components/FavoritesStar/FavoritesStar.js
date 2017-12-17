import React from 'react';
import './FavoritesStar.css';

export default class FavoritesStar extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      isPressed: props.isPressed && false
    }
  }

  handleClick() {
    const isPressed = !this.state.isPressed;

    this.setState({
      isPressed: isPressed
    });

    this.props.handleClick(isPressed);
  }

  render() {
    const content = this.state.isPressed ? (<span>★</span>) : (<span>☆</span>);

    return (
      <span className="favorites-star" onClick={() => this.handleClick()}>
        {content}
      </span>
    )
  }
}