import React, { useState, useEffect } from "react";
import AddItemInput from "./components/AddItemInput";
import FilterBar from "./components/FilterBar";
import ListItems from "./components/ListItems";

const ToDoList = () => {
  const [filterActive, setFilterActive] = useState(0);
  const [diaplayList, setDiaplayList] = useState([]);
  const [transition, setTransition] = useState(false);
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("todo-list") || "[]")
  );
  useEffect(() => {
    filterActive === 0
      ? setDiaplayList([...list].filter((v) => v.finished === false))
      : setDiaplayList([...list].filter((v) => v.finished === true));
  }, [list, filterActive]);
  // console.log("dis", diaplayList);
  const title = "待辦事項";
  const onAdd = (e) => {
    let updatedList = [e, ...list];
    localStorage.setItem("todo-list", JSON.stringify(updatedList));
    setList(updatedList);
  };
  const onDelete = (e) => {
    let updatedList = [...list].filter((v) => v.id !== e);
    setList(updatedList);
    localStorage.setItem("todo-list", JSON.stringify(updatedList));
  };
  const onFinish = (e) => {
    let updatedList = [...list].map((o) => {
      if (o.id === e) {
        return {
          ...o,
          finished: true,
          finished_At: Date.now(),
          //*以下測試用：2022-3-15 timestamp
          // finished_At: 1647331574,
        };
      }
      return o;
    });
    setList(updatedList);
    localStorage.setItem("todo-list", JSON.stringify(updatedList));
  };

  return (
    <>
      <div className="main-container">
        <div className="content-wrapper">
          <h1 className="heading">{title}</h1>
          <AddItemInput onAdd={onAdd} />
        </div>
        <FilterBar
          filterActive={filterActive}
          setFilterActive={setFilterActive}
          list={list}
          setList={setList}
        />
        <div
          className={transition ? "filter-result-transition" : "filter-result"}
        >
          <ListItems
            diaplayList={diaplayList}
            transition={transition}
            filterActive={filterActive}
            setTransition={setTransition}
            onDelete={onDelete}
            onFinish={onFinish}
          />
        </div>
      </div>
    </>
  );
};

export default ToDoList;
