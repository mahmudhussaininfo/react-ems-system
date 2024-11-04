import React from "react";

const TaskListNumbers = ({ data }) => {
  return (
    <>
      <div className="flex justify-between mt-10 gap-5">
        <div className="rounded w-[45%] px-9 py-9 bg-blue-300">
          <h2 className="text-3xl">{data.taskNumber.newTask}</h2>
          <h3 className="text-xl">New Task</h3>
        </div>
        <div className="rounded w-[45%] px-9 py-9 bg-green-400">
          <h2 className="text-3xl">{data.taskNumber.completed}</h2>
          <h3 className="text-xl">Completed Task</h3>
        </div>
        <div className="rounded w-[45%] px-9 py-9 bg-blue-500">
          <h2 className="text-3xl">{data.taskNumber.active}</h2>
          <h3 className="text-xl">Active Task</h3>
        </div>
        <div className="rounded w-[45%] px-9 py-9 bg-red-500">
          <h2 className="text-3xl">{data.taskNumber.failed}</h2>
          <h3 className="text-xl">Faild Task</h3>
        </div>
      </div>
    </>
  );
};

export default TaskListNumbers;
