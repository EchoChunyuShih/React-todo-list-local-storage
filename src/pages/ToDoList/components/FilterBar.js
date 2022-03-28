import React from "react";
import { useContext } from "react";
import TodoContext from "../../../context/TodoContext";

const FilterBar = (props) => {
  const { filterActive, setFilterActive } = useContext(TodoContext);
  const toggleFilter = (e) => {
    e.preventDefault();
    setFilterActive(filterActive === 0 ? 1 : 0);
  };
  const btnNotFinished = (
    <input
      className={
        filterActive === 0
          ? "filter-section_btn filter-section_active"
          : "filter-section_btn"
      }
      type="submit"
      value="待完成"
      onClick={toggleFilter}
    />
  );
  const btnFinished = (
    <input
      className={
        filterActive === 1
          ? "filter-section_btn filter-section_active"
          : "filter-section_btn"
      }
      type="submit"
      value="已完成"
      onClick={toggleFilter}
    />
  );

  return (
    <>
      <div className="filter-section">
        {btnNotFinished}
        {btnFinished}
      </div>
    </>
  );
};

export default FilterBar;
