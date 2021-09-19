import React from "react";

const TableBody = ({ columns, items }) => {
  return (
    <tbody>
      {items.map((item, idx) => (
        <tr>
          {columns.map((column) => <td> {column.content(item, idx)} </td>)}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
