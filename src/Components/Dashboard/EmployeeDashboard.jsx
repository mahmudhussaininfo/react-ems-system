import React from "react";
import Header from "../Header/Header";
import TaskListNumbers from "../Others/TaskListNumbers";
import TaskList from "../Task/TaskList";

const EmployeeDashboard = ({ data, changeUser }) => {
  return (
    <>
      <div className="p-7 h-screen">
        <Header change={changeUser} data={data} />
        <TaskListNumbers data={data} />
        <TaskList data={data} />
      </div>
    </>
  );
};

export default EmployeeDashboard;
