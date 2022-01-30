import React from 'react';
import Record from './Record';

const Table = function ({ level, leaders }) {
  const records = leaders.map((task) => {
    if (level === task.data.level) {
      return (
        <Record
          key={task.id}
          name={task.data.name}
          count={task.data.count}
          date={task.data.created}
        />
      );
    }

    return null;
  });
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3">{level}</th>
        </tr>
        <tr>
          <td>Name</td>
          <td>Time</td>
          <td>Date</td>
        </tr>
      </thead>
      <tbody>{records}</tbody>
    </table>
  );
};

export default Table;
