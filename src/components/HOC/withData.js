import React, { Component } from 'react';
import { getUserTasks } from '../../api';
// HOC - function

export default function withData (WrappedComponent, loadDataMethod,) {

  return class extends Component {
    constructor (props) {
      super(props);
      this.state = {
        isFetching: false,
        items: [],
        error: null,

      };
    }

    componentDidMount () {
      this.setState({ isFetching: true });

      try {
        loadDataMethod()
        .then(res => {
          this.setState({
                          items: res.data
                        });
        });
      } catch (err) {
        this.setState({ error: err });
      } finally {
        this.setState({ isFetching: false });
      }
    }

    render () {
      return (
        <WrappedComponent {...this.state} {...this.props} />
      );
    }
  };
}