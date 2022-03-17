import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TailSpin } from "react-loader-spinner";

const AddTaskInput = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [finished, setFinished] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      setErrMsg("不可以為空值");
      return;
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        onAdd({ id: uuidv4(), title: title, finished: finished });
        setTitle("");
      }, 1300);
    }
  };

  return (
    <>
      <form className="add-form" onSubmit={onSubmit}>
        <span className="add-form_subtitle">
          *<span>項目</span>
        </span>
        <div className="add-form_input-group">
          <input
            value={title}
            name="title"
            className={`
              ${
                errMsg === "" ? "new-task-input" : "new-task-input err-input"
              } ${loading ? " new-task-input disabled-input" : ""}`}
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
              setErrMsg("");
            }}
            placeholder="請輸入代辦事項"
            disabled={loading && "disabled"}
          />
          {loading ? (
            <div className="btn-submit disabled-btn">
              <TailSpin
                ariaLabel="loading-indicator"
                color="white"
                height="25"
              />
            </div>
          ) : (
            <input
              className={errMsg ? "disabled-btn" : "btn-submit"}
              type="submit"
              value="送出"
            />
          )}
        </div>
        <span className="add-form_err-msg">{errMsg}</span>
      </form>
    </>
  );
};

export default AddTaskInput;
