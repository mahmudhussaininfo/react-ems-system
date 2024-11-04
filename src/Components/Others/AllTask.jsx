import React from "react";

const AllTask = ({ data }) => {
  return (
    <>
      <div id="alltask" className="shadow-md mb-10 p-5 h-72 mt-10 bg-slate-700">
        <div className="bg-yellow-600 text-white  mb-2 flex justify-between py-2 px-4">
          <h2 className="font-bold text-xl">Employee Name</h2>
          <h3>New Task</h3>
          <h3>Active Task</h3>
          <h3>Completed Task</h3>
          <h3>Faild Task</h3>
        </div>
        <div className="h-[80%] overflow-auto">
          {data.employees.map((item, index) => {
            return (
              <div
                key={index}
                className="mb-2 bg-slate-600 flex justify-between py-2 px-4"
              >
                <h2 className="font-bold text-xl">{item.firstname}</h2>
                <h3>{item.taskNumber.newTask}</h3>
                <h3>{item.taskNumber.active}</h3>
                <h3>{item.taskNumber.completed}</h3>
                <h3>{item.taskNumber.failed}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AllTask;
