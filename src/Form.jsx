import React from "react";

export default function Form({ inputValue, updateInputValue, addItem }) {
  const handleInputChange = (event) => {
    console.log(event.target.value)
    updateInputValue(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add Item of To-Do List"
          autoComplete="off"
        />
        <button onClick={addItem}>
          <i className="fa-solid fa-plus"></i>
        </button>
      </div>
    </form>
  );
}
