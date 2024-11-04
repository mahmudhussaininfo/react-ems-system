import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FaildTask from "./FaildTask";

const TaskList = ({ data }) => {
  return (
    <>
      <div
        id="taskList"
        className="flex flex-nowrap justify-start items-center overflow-x-auto gap-6 w-full h-[55%] mt-7"
      >
        {data.tasks.map((item, index) => {
          if (item.active) {
            return <AcceptTask key={index} data={item} />;
          } else if (item.NewTask) {
            return <NewTask key={index} data={item} />;
          } else if (item.completed) {
            return <CompleteTask key={index} data={item} />;
          } else if (item.failed) {
            return <FaildTask key={index} data={item} />;
          }
        })}
        {/* <AcceptTask />
        <NewTask />
        <CompleteTask />
        <FaildTask /> */}
      </div>
    </>
  );
};

export default TaskList;
