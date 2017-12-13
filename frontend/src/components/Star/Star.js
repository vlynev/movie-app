import React from 'react';
import './Star.css';

export default class Star extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      pressed: props.pressed
    }
  }

  handleClick() {
    this.setState({
      pressed: !this.state.pressed
    });

    this.props.handleClick(this.state.pressed);
  }

  render() {
    let content = this.state.pressed ? (<b>★</b>) : (<b>☆</b>);

    return (
      <div className="favorites-star" onClick={() => this.handleClick()}>
        {content}
      </div>
    )
  }
}