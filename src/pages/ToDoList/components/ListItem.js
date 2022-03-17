import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const moment = require("moment");
moment.locale("zh-tw");

const ListItem = (props) => {
  const { item, onDelete, onFinish, transition } = props;
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
        icon: "warning",
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
        icon: "warning",
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
  const diff = Math.floor((Date.now() - item.finished_At) / 1000);
  let state = "";
  const lessMinute = diff < 60;
  const lessHours = diff < 60 * 60;
  const lessDay = diff < 60 * 60 * 24;
  if (lessMinute) {
    state = diff + " 秒前";
  } else if (lessHours) {
    state = Math.floor(diff / 60) + " 分鐘前";
  } else if (lessDay) {
    state = Math.floor(diff / (60 * 60)) + " 小時前";
  } else {
    // state = item.finished_At;
    state = moment(item.finished_At * 1000).format("YYYY-MM-DD");
  }
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
            <div className="control-btns">
              <input
                className="btn control-btn"
                type="button"
                value="移除"
                onClick={() => {
                  deleteAlert();
                  // onDelete(item.id);
                }}
              />
              <input
                className="btn control-btn"
                type="submit"
                value="完成"
                onClick={() => {
                  finishAlert();
                  // onFinish(item.id);
                }}
              />
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
              {state}
            </span>
          </>
        )}
      </div>
    </>
  );
};

export default ListItem;
