import React from 'react';

const Table = function ({ name, count, date }) {
  const convertedDate = date.toDate().toDateString();
  return (
    <tr>
      <td>{name}</td>
      <td>{count}</td>
      <td>{convertedDate}</td>
    </tr>
  );
};

export default Table;
