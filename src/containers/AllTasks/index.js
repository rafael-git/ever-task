import React from "react";
import { useSelector } from "react-redux";

import TaskCollection from "../../components/TaskCollection/index";
import Task from "../../components/Task";

const AllTasks = (props) => {
  const tasks = useSelector((state) => state.task.tasks);
  return (
    <TaskCollection>
      {tasks.map((task) => (
        <Task isChecked={task.done} name={task.name} duration={task.duration} />
      ))}
    </TaskCollection>
  );
};

export default AllTasks;
