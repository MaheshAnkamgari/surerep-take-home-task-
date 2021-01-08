import React, { useState } from "react";
import "./App.css";
const tasksIniitialData = [
  { name: "Learn Angular", category: "wip", bgcolor: "yellow" },
  { name: "React", category: "wip", bgcolor: "pink" },
  { name: "Vue", category: "complete", bgcolor: "skyblue" },
  { name: "Mobile one", category: "new", bgcolor: "green" },
  { name: "Mobile 2", category: "new", bgcolor: "blue" },
  { name: "Mobile 3", category: "new", bgcolor: "blue" },
];
// export default class AppDragDropDemo extends React.Component {
//   state = {
//     tasks: [
//       { name: "Learn Angular", category: "wip", bgcolor: "yellow" },
//       { name: "React", category: "wip", bgcolor: "pink" },
//       { name: "Vue", category: "complete", bgcolor: "skyblue" },
//       { name: "Mobile one", category: "new", bgcolor: "green" },
//       { name: "Mobile 2", category: "new", bgcolor: "blue" },
//     ],
//     current: "",
//   };
//   onDragStart = (ev, id) => {
//     console.log("dragstart:", id);
//     ev.dataTransfer.setData("id", id);
//     let tasks = this.state.tasks.filter((task) => task.name !== id);
//     console.log(tasks);
//     this.setState({ current: id });
//   };

//   onDragOver = (ev) => {
//     ev.preventDefault();
//   };

//   onDrop = (ev, cat) => {
//     let id = ev.dataTransfer.getData("id");

//     let tasks = this.state.tasks.filter((task) => {
//       if (task.name == id) {
//         task.category = cat;
//       }
//       return task;
//     });

//     this.setState({
//       ...this.state,
//       tasks,
//       current: "",
//     });
//   };

//   render() {
//     var tasks = { wip: [], complete: [], new: [] };
//     this.state.tasks.forEach((t) => {
//       tasks[t.category].push(
//         <div
//           key={t.name}
//           onDragStart={(e) => this.onDragStart(e, t.name)}
//           draggable
//           className="draggable"
//           style={{ backgroundColor: t.bgcolor }}
//         >
//           {this.state.current !== t.name ? t.name : "close"}
//         </div>
//       );
//     });

//     return (
//       <div className="container-drag">
//         <h2 className="header">DRAG & DROP DEMO</h2>{" "}
//         <div
//           className="wip"
//           onDragOver={(e) => this.onDragOver(e)}
//           onDrop={(e) => {
//             this.onDrop(e, "wip");
//           }}
//         >
//           <span className="task-header">WIP</span> {tasks.wip}{" "}
//         </div>{" "}
//         <div
//           className="droppable"
//           onDragOver={(e) => this.onDragOver(e)}
//           onDrop={(e) => this.onDrop(e, "complete")}
//         >
//           {" "}
//           <span className="task-header">COMPLETED</span> {tasks.complete}{" "}
//         </div>{" "}
//         <div
//           className="new-droppable"
//           onDragOver={(e) => this.onDragOver(e)}
//           onDrop={(e) => this.onDrop(e, "new")}
//         >
//           {" "}
//           <span className="task-header">New Tasks</span> {tasks.new}{" "}
//         </div>{" "}
//       </div>
//     );
//   }
// }

function App() {
  const [tasks, setTask] = useState(tasksIniitialData);
  const [current, setCurrent] = useState("");
  const onDragOver = (ev) => {
    ev.preventDefault();
  };

  const onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let currentTasks = tasks.filter((task) => {
      if (task.name == id) {
        task.category = cat;
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

  var displayTasks = { wip: [], complete: [], new: [], inProgres: [] };
  tasks.forEach((t) => {
    displayTasks[t.category].push(
      <div
        key={t.name}
        onDragStart={(e) => onDragStart(e, t.name)}
        draggable
        className="draggable"
        style={{ backgroundColor: t.bgcolor }}
      >
        {current !== t.name ? t.name : "close"}
      </div>
    );
  });

  return (
    <div className="container-drag">
      <div
        className="tasks-container"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => {
          onDrop(e, "wip");
        }}
      >
        <span className="task-header">WIP</span> {displayTasks.wip}
      </div>
      <div
        className="tasks-container droppable"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, "complete")}
      >
        <span className="task-header">COMPLETED</span> {displayTasks.complete}
      </div>
      <div
        className="tasks-container new-droppable"
        onDragOver={(e) => onDragOver(e)}
        onDrop={(e) => onDrop(e, "new")}
      >
        <span className="task-header">New Tasks</span> {displayTasks.new}
      </div>
    </div>
  );
}

export default App;
