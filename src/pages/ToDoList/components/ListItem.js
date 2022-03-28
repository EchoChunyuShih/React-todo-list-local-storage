import React, { useContext, useState } from "react";
import TimeFilter from "./TimeFilter";
import AlertWindow from "../../../components/shared/AlertWindow";
import AlertBtn from "../../../components/shared/AlertBtn";
import TodoContext from "../../../context/TodoContext";

const ListItem = ({ item }) => {
  const { onDelete, onFinish, transition, alertOn, setAlertOn } =
    useContext(TodoContext);
  const [btnAction, setBtnAction] = useState(null);
  const btnRemove = (
    <input
      className="action-bar_btn"
      type="button"
      value="移除"
      onClick={(e) => {
        setAlertOn(true);
        setBtnAction(e.target.value);
      }}
    />
  );

  const btnFinished = (
    <input
      className="action-bar_btn"
      type="submit"
      value="完成"
      onClick={(e) => {
        setAlertOn(true);
        setBtnAction(e.target.value);
      }}
    />
  );

  const DeleteAlert = () => {
    return (
      <AlertWindow
        title="提醒"
        subtitle={`確定要${btnAction} ${item.title} 嗎?`}
      >
        <div className="btn-group">
          <AlertBtn
            title="Confirm"
            version="confirm"
            onClick={(e) => {
              onDelete(item.id);
              setAlertOn(false);
              setBtnAction(null);
            }}
          ></AlertBtn>
          <AlertBtn
            title="Cancel"
            version="cancel"
            onClick={(e) => {
              setAlertOn(false);
              setBtnAction(null);
            }}
          ></AlertBtn>
        </div>
      </AlertWindow>
    );
  };
  console.log(`${item.id}`, btnAction);
  const FinishAlert = () => {
    return (
      <AlertWindow
        title="提醒"
        subtitle={`您已經${btnAction} ${item.title} 了嗎?`}
      >
        <div className="btn-group">
          <AlertBtn
            title="Confirm"
            version="confirm"
            onClick={(e) => {
              onFinish(item.id);
              setAlertOn(false);
              setBtnAction("");
            }}
          ></AlertBtn>
          <AlertBtn
            title="Cancel"
            version="cancel"
            onClick={(e) => {
              setAlertOn(false);
              setBtnAction("");
            }}
          ></AlertBtn>
        </div>
      </AlertWindow>
    );
  };

  return (
    <>
      {btnAction === "完成" && alertOn && <FinishAlert />}
      {btnAction === "移除" && alertOn && <DeleteAlert />}
      <div className={transition ? "single-item-transition" : "single-item"}>
        <div
          className={
            item.finished === true &&
            "single-item_title  single-item_title-grey"
          }
        >
          {item.title}
        </div>
        {item.finished === false ? (
          <>
            <div className="action-bar">
              {btnRemove}
              {btnFinished}
            </div>
          </>
        ) : (
          <>
            <span
              className={
                item.finished === true &&
                "single-item_title  single-item_title-grey"
              }
            >
              <TimeFilter item={item} />
            </span>
          </>
        )}
      </div>
    </>
  );
};

export default ListItem;
