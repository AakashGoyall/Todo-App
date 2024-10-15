import React, { useEffect, useState } from "react";
import Header from "./Header";
import Form from "./Form"
import TodoList from "./TodoList";
import Button from "./Button";

export default function App() {
  const getLocalStorage = () => {
    if (localStorage.getItem("list")) {
      return JSON.parse(localStorage.getItem("list"));
    } else {
      return [];
    }
  };

  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [btn, setBtn] = useState("Check list");

  //* add item when user click on add button
  const addItem = () => {
    if(inputValue != ""){
      console.log("add");
      setList([...list, inputValue]);
      setInputValue("");
    }
  };

  const updateInputValue = (u) => {
    setInputValue(u.target.value);
  };


  //** Upadate and Delete items of array
  const editItem = (e, i) => {
    console.log(e);
    setInputValue(e);
    list.splice(i, 1);
  };

  const deleteItem = (d) => {
    const latestList = list.filter((item, i) => {
      return i !== d;
    });
    localStorage.setItem("list", JSON.stringify(latestList));
    setList(latestList);
  };

  //** Button function
  const clearList = () => {
    setList([]);
    localStorage.clear();
  };

  const handleMouseEnter = () => {
    setBtn("delete all");
  };

  const handleMouseLeave = () => {
    setBtn("check box");
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [inputValue]);

  return (
    <>
      <div className="container">
        <Header />

        {/* <form onSubmit={submit}>
          <div className="search">
            <input
              type="text"
              id="text"
              value={inputValue}
              onChange={update}
              placeholder="Add Item of To-Do List"
              autoComplete="off"
            />
            <button onClick={addItem}>
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </form> */}

        <Form
          inputValue={inputValue}
          updateInputValue={updateInputValue}
          addItem={addItem}
        />

        <TodoList list={list} editItem={editItem} deleteItem={deleteItem} />

        <Button
          btnText={btn}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={clearList}
        />
      </div>
    </>
  );
}
