import React, { Component } from 'react';
import { getUserTasks } from '../../api';

class TasksList extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isFetching: false,
      tasks: [],
      error: null,

    };
  }

  componentDidMount () {
    this.loadData();
  }

  loadData = async () => {
    try {
      this.setState({ isFetching: true });
      const { data } = await getUserTasks();
      this.setState({ tasks: data });
    } catch (err) {
      this.setState({ error: err });
    } finally {
      this.setState({ isFetching: false });
    }
  };

  render () {

    const { tasks, isFetching } = this.state;

    return (
      <ol>
        {
          tasks.map(item => (
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