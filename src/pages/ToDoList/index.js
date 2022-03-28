import React from "react";
import AddItemInput from "./components/AddItemInput";
import FilterBar from "./components/FilterBar";
import ListItems from "./components/ListItems";
import { useContext } from "react";
import TodoContext from "../../context/TodoContext";

const ToDoList = () => {
  const { transition } = useContext(TodoContext);
  const title = "待辦事項";
  return (
    <>
      <div className="main-container">
        <div className="content-wrapper">
          <h1 className="heading">{title}</h1>
          <AddItemInput />
        </div>
        <FilterBar />
        <div
          className={transition ? "filter-result-transition" : "filter-result"}
        >
          <ListItems />
        </div>
      </div>
    </>
  );
};

export default ToDoList;
