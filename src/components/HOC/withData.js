import React, { Component } from 'react';
// HOC - function

export default function withData (WrappedComponent) {

  return class extends Component {

    render () {

      return (
        <WrappedComponent {...this.props} />
      );
    }
  };
}