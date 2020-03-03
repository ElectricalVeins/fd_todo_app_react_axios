import React, { Component } from 'react';

export default function TasksList (props) {

    const { items, isFetching } = props;

    return (
      <ol>
        {
          items.map(item => (
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

