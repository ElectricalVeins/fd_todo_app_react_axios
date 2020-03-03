import React, { Component } from 'react';
import { getUsersList } from '../../api';

class UserList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isFetching: false,
      users: [],
      error: null,

    };
  }

  componentDidMount () {
    this.loadData();
  }

  loadData = async () => {
    try {
      this.setState({ isFetching: true });
      const { data } = await getUsersList();
      this.setState({ users: data });
    } catch (err) {
      this.setState({ error: err });
    } finally {
      this.setState({ isFetching: false });
    }
  };

  render () {

    const { users, isFetching } = this.state;

    return (
      <ol>
        {
          users.map(item => (
            <li
              key={item.id}>
              {
                item.value
              }
              {
                isFetching && <li>Loading...</li>
              }
            </li>))
        }
      </ol>
    );

  }
}