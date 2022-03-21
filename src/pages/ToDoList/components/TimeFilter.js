import React from "react";
const moment = require("moment");
moment.locale("zh-tw");

const TimeFilter = ({ item }) => {
  let state = "";
  const diff = Math.floor((Date.now() - item.finished_At) / 1000);
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
  return <div>{state}</div>;
};

export default TimeFilter;
