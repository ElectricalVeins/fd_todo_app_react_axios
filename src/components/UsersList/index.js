import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withData from '../HOC/withData.js';

export default function UsersList (props) {

  const { users, isFetching } = props;

  return (
    <ol>
      {
        users.map(item => (
          <li
            key={item.id}>
            {
              `${item.firstName} ${item.lastName}`
            }

          </li>))
      }
      {
        isFetching && <li>Loading...</li>
      }
    </ol>
  );
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
                                             id: PropTypes.oneOfType([
                                                                       PropTypes.string,
                                                                       PropTypes.number]),
                                             firstName: PropTypes.string.isRequired,
                                             lastName: PropTypes.string.isRequired,
                                             email: PropTypes.string.isRequired,
                                             profilePicture: PropTypes.string.isRequired
                                           })).isRequired
};

UsersList.defaultProps = {
  users: [],
};