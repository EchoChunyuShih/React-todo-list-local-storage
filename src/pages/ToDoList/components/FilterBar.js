import React from "react";
import ListItem from "./ListItem";
import ListItems from "./ListItems";

const FilterBar = (props) => {
  const { filterActive, setFilterActive } = props;

  const toggleFilter = (e) => {
    e.preventDefault();
    setFilterActive(filterActive === 0 ? 1 : 0);
  };
  return (
    <>
      <div className="filter-section">
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
      </div>
    </>
  );
};

export default FilterBar;
