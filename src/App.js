import React, { useState } from "react";
import mockData from "./mockData";
import "./App.scss";
import TasksRow from "./components/tasks-row/tasks-row.component";

function App() {
  const [tasks, setTask] = useState(mockData.tasks);
  const [current, setCurrent] = useState("");
  const onDragOver = (ev) => {
    ev.preventDefault();
  };

  const onDrop = (ev, status) => {
    let id = ev.dataTransfer.getData("id");
    let currentTasks = tasks.filter((task) => {
      if (task.id === parseInt(id)) {
        task.status = status;
      }
      return task;
    });

    setTask(currentTasks);
    setCurrent("");
  };

  const onDragStart = (ev, id) => {
    ev.dataTransfer.setData("id", id);
    setCurrent(id);
  };

  return (
    <div className="container-drag">
      {/* New tasks row */}
      <TasksRow
        onDragOver={onDragOver}
        onDragStart={onDragStart}
        onDrop={onDrop}
        taskTitle="New Tasks"
        status="new"
        tasks={tasks.filter((task) => task.status === "new")}
        current={current}
      />

      {/* In Progress tasks row */}
      <TasksRow
        onDragOver={onDragOver}
        onDragStart={onDragStart}
        onDrop={onDrop}
        taskTitle="In Progress"
        status="inprogress"
        tasks={tasks.filter((task) => task.status === "inprogress")}
        current={current}
      />

      {/* In Review tasks row */}
      <TasksRow
        onDragOver={onDragOver}
        onDragStart={onDragStart}
        onDrop={onDrop}
        taskTitle="Review"
        status="review"
        tasks={tasks.filter((task) => task.status === "review")}
        current={current}
      />

      {/* Completed tasks row */}
      <TasksRow
        onDragOver={onDragOver}
        onDragStart={onDragStart}
        onDrop={onDrop}
        taskTitle="Done"
        status="done"
        tasks={tasks.filter((task) => task.status === "done")}
        current={current}
      />
    </div>
  );
}

export default App;
