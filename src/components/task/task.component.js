import React from "react";
import "./task.component.scss";

function Task({ tasks, onDragStart, current }) {
  return (tasks || []).map((task) => (
    <div
      key={task.id}
      data-testid={task.id}
      onDragStart={(e) => onDragStart(e, task.id)}
      draggable
      className="draggable"
    >
      <div
        className={current !== task.id ? "task-info" : "task-info move-taks"}
      >
        <div className="split-two" style={{ gridGap: 0 }}>
          <div className={task.priority.toLowerCase()}>
            {task.priority.toUpperCase()}
          </div>
          <div>#{task.id}</div>
        </div>
        <div className="text-right-align">{task.created}</div>
        <div className="combine-lines task-name">{task.name}</div>
        <div className="combine-lines task-scope">{task.scope}</div>
        <div className="split-two task-comments-attachments">
          <div className="split-two" style={{ gridGap: 0 }}>
            <div>
              <i className="material-icons attachment">chat_bubble</i>
            </div>
            <div>{task.comments}</div>
          </div>
          <div className="split-two" style={{ gridGap: 0 }}>
            <i className="material-icons attachment">attachment</i>
            <div>{task.attachemnts} </div>
          </div>
        </div>
        <div className="split-two text-right-align">
          <div>&nbsp; </div>
          <div className="split-two">
            <div className="plan-add-icon">+</div>
            <img
              src={"assets/" + task.owner}
              className="image-icon"
              alt="icon"
            />
          </div>
        </div>
      </div>
    </div>
  ));
}

export default Task;
