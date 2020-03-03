import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DataLoader extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isFetching: false,
      data: null,
      error: null,
    };
  }

  loadData = () => {
    this.setState({ isFetching: true, });
    try {
      this.props.loadData().then(res => {
        this.setState({
                        data: res.data,
                      });
      });
    } catch (e) {

    } finally {
      this.setState({ isFetching: false });
    }
  };

  componentDidMount () {
    this.loadData();
  }

  render () {
    return this.props.render(this.state.data);
  }

}

DataLoader.propTypes = {
  loadData: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
  component: PropTypes.element,

};