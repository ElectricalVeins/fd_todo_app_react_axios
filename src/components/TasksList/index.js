import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function TasksList (props) {

  const { tasks, isFetching } = props;

  return (
    <ol>
      {
        tasks.map(item => (
          <li
            key={item.id}>
            {
              item.value
            }

          </li>))
      }
      {
        isFetching && <li>Loading...</li>
      }
    </ol>
  );

}

TasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
                                             id: PropTypes.oneOfType([
                                                                       PropTypes.string,
                                                                       PropTypes.number]),
                                             value: PropTypes.string,
                                             isDone: PropTypes.bool,
                                             deadline: PropTypes.string,
                                           })).isRequired
};

TasksList.defaultProps = {
  tasks: [],
};