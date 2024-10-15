import React from "react";

export default function TodoItem({ item, index, editItem, deleteItem }) {
  return (
    <div key={index} id={`list-${index}`}>
      <li className="list-item">{item}</li>
      
      <div className="list-btn">
        <i
          className="fa-regular fa-pen-to-square edit"
          title="Edit"
          onClick={() => editItem(item, index)}
        ></i>
        <i
          className="fa-solid fa-trash delete"
          title="Delete"
          onClick={() => deleteItem(index)}
        ></i>
      </div>
    </div>
  );
}
