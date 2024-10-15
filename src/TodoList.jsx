import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ list, editItem, deleteItem }) {
  // if (list.length === 0) {
  //   return <p>Your to-do list is empty.</p>;
  // }

  return (
    <ul className="listOfTodo">
      {list.map((item, index) => (
        <TodoItem
          key={index}
          item={item}
          index={index}
          editItem={editItem}
          deleteItem={deleteItem}
        />
      ))}
    </ul>
  );
}
