import React from 'react';
import './Star.css';

export default class Star extends React.Component{
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
    let content = this.state.isPressed ? (<b>★</b>) : (<b>☆</b>);

    return (
      <div className="favorites-star" onClick={() => this.handleClick()}>
        {content}
      </div>
    )
  }
}