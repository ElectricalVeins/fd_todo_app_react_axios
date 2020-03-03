import React, { Component } from 'react';

export default function UsersList (props) {

  const { items, isFetching } = this.props;

  return (
    <ol>
      {
        items.map(item => (
          <li
            key={item.id}>
            {
              `${item.firstName} ${item.lastname}`
            }

          </li>))
      }
      {
        isFetching && <li>Loading...</li>
      }
    </ol>
  );
}