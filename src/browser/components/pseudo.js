// @flow
import React from 'react';

type State = {
  hover: boolean,
};

const pseudo = (Wrapped: Function) => class Pseudo extends React.Component {
  state: State = {
    hover: false,
  };

  onMouseEnter = () => {
    this.setState({ hover: true });
  };

  onMouseLeave = () => {
    this.setState({ hover: false });
  };

  render() {
    return (
      <Wrapped
        {...this.props}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        pseudo={this.state}
      />
    );
  }
};

export default pseudo;
