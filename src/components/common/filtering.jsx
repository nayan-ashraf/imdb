import React from 'react';

const Filter = ({selectedItem, onClick, items}) => {
  return (
    <ul class="list-group">
      {items.map((item) => (
        <li
          key={item._id}
          className={
            selectedItem == item.name
              ? "list-group-item active"
              : "list-group-item"
          }
          onClick={() => onClick(item.name)}
          style={{ cursor: "pointer" }}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
}
 
export default Filter;
