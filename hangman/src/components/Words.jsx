import React, { Component } from 'react';

class Words extends Component {
  state = {
    random: null,
  };

  async componentDidMount() {
    const api = 'https://random-word-api.herokuapp.com/word?number=1';
    const response = await fetch(api);
    const data = await response.json();
    this.setState({ random: data });
  }
  render() {
    return <div>{this.state.random}</div>;
  }
}

export default Words;
