import React from "react";
import "./tasks-row.component.scss";
import Task from "../task/task.component";

function TasksRow({
  onDragOver,
  onDragStart,
  onDrop,
  taskTitle,
  status,
  tasks,
  current,
}) {
  return (
    <div
      className="tasks-container"
      onDragOver={(e) => onDragOver(e)}
      onDrop={(e) => {
        onDrop(e, status);
      }}
    >
      <div className="task-header">
        <div className="header-name">{taskTitle}</div>
        <div className="more-actions">...</div>
        <div className="clear-float"></div>
      </div>
      <div data-testid={status + "-container"}>
        <Task tasks={tasks} onDragStart={onDragStart} current={current} />
      </div>
    </div>
  );
}

export default TasksRow;
