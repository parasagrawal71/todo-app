import React from "react";
import moment from "moment";
import "./Task.scss";

import AlarmClock from "../../assets/img/alarm-clock.svg";
import tickMark from "../../assets/img/tick.svg";

const Task = ({ task, onClick, index, selectItem }) => {
  const { title, dueDate, isCompleted } = task;
  return (
    <section
      className={`task-container ${index === selectItem ? "selected" : ""}`}
      onClick={onClick}
    >
      {isCompleted ? (
        <div className="task-green-tick">
          <img src={tickMark} alt="green-tick" />
        </div>
      ) : null}
      <section
        className={`task ${new Date(dueDate) < new Date() ? "fade" : ""}`}
        style={!isCompleted ? { width: "100%" } : {}}
      >
        <div className="task--left">
          <div className="task-greeting">{title}</div>
          <div className="task-task">{`Due ${moment(new Date(dueDate)).format(
            "ddd MMM D"
          )}`}</div>
        </div>
        {!isCompleted ? (
          <div className="task--right">
            <img src={AlarmClock} alt="profile-pic" />
          </div>
        ) : null}
      </section>
    </section>
  );
};

export default Task;
