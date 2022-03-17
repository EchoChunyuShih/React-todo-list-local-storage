import React, { useEffect } from "react";
import ListItem from "./ListItem";

const ListItems = (props) => {
  const {
    diaplayList,
    onDelete,
    onFinish,
    transition,
    setTransition,
    filterActive,
  } = props;
  useEffect(() => {
    setTransition(true);
    setTimeout(() => {
      setTransition(false);
    }, 500);
  }, [filterActive]);

  return (
    <>
      {diaplayList.length === 0 ? (
        <>
          <div className={transition ? "info-transition" : "info"}>
            {filterActive ? "目前沒有已完成的項目" : "目前沒有待完成的項目"}
          </div>
        </>
      ) : (
        <>
          {transition ? (
            <div className="transition"></div>
          ) : (
            diaplayList.map((v) => (
              <ListItem
                key={v.id}
                item={v}
                onDelete={onDelete}
                onFinish={onFinish}
                transition={transition}
              />
            ))
          )}
        </>
      )}
    </>
  );
};

export default ListItems;
