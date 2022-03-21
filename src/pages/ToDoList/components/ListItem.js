import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import TimeFilter from "./TimeFilter";

const ListItem = (props) => {
  const { item, onDelete, onFinish, transition } = props;
  const btnRemove = (
    <input
      className="action-bar_btn"
      type="button"
      value="移除"
      onClick={() => {
        deleteAlert();
        // onDelete(item.id);
      }}
    />
  );
  const btnFinished = (
    <input
      className="action-bar_btn"
      type="submit"
      value="完成"
      onClick={() => {
        finishAlert();
        // onFinish(item.id);
      }}
    />
  );
  const MySwal = withReactContent(Swal);
  const customSwal = MySwal.mixin({
    customClass: {
      popup: "alert-modal-size",
      confirmButton: "alert-btns alert-confirm",
      cancelButton: "alert-btns alert-cancel",
    },
    buttonsStyling: false,
  });
  const deleteAlert = () => {
    customSwal
      .fire({
        title: "提示",
        text: `是否要移除 "${item.title}"  `,
        // icon: "warning",
        showCancelButton: true,
        confirmButtonText: "確認移除",
        cancelButtonText: "取消",
        backdrop: "rgba(32,96,79,.5)",
      })
      .then((result) => {
        if (result.isConfirmed) {
          // customSwal.fire("移除成功", ` 已移除 "${item.title}"`, "success");
          // console.log(item.id);
          onDelete(item.id);
        }
      });
  };
  const finishAlert = () => {
    customSwal
      .fire({
        title: "提示",
        text: `是否已完成 "${item.title}"  `,
        // icon: "warning",
        showCancelButton: true,
        confirmButtonText: "確認完成",
        cancelButtonText: "取消",
        backdrop: "rgba(32,96,79,.5)",
      })
      .then((result) => {
        if (result.isConfirmed) {
          // customSwal.fire("太好了！", ` 已完成 "${item.title}"`, "success");
          // console.log(item.id);
          onFinish(item.id);
        }
      });
  };

  return (
    <>
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
