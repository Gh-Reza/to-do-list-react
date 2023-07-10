import React from 'react';
import PropTypes from 'prop-types';

function Item({ task }) {
  return (
    <li className="task-item mb-2 align-items-center p-2 shadow border-0 text-start rounded d-flex justify-content-between">
      <div className="right">
        <input type="checkbox" className="me-2" />
        <span className="w-100">{task}</span>
      </div>
      <div className="left text-end">
        <button type="button" className="btn btn-danger p-1 ps-4 pe-4">Delete</button>
      </div>
    </li>
  );
}

Item.propTypes = {
  task: PropTypes.string.isRequired,
};

export default Item;
