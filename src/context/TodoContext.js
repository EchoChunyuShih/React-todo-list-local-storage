import { createContext, useState, useEffect } from "react";
const TodoContext = createContext();
export const TodoProvider = ({ children }) => {
  const [filterActive, setFilterActive] = useState(0);
  const [diaplayList, setDiaplayList] = useState([]);
  const [transition, setTransition] = useState(false);
  const [alertOn, setAlertOn] = useState(false);
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("todo-list") || "[]")
  );
  useEffect(() => {
    filterActive === 0
      ? setDiaplayList([...list].filter((v) => v.finished === false))
      : setDiaplayList([...list].filter((v) => v.finished === true));
  }, [list, filterActive]);
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
    <TodoContext.Provider
      value={{
        list,
        setList,
        diaplayList,
        transition,
        setTransition,
        filterActive,
        setFilterActive,
        alertOn,
        setAlertOn,
        onAdd,
        onDelete,
        onFinish,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export default TodoContext;
