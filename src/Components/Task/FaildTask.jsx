import React from "react";

const FaildTask = ({ data }) => {
  return (
    <>
      <div className="bg-red-500 h-full w-[350px] rounded flex-shrink-0 p-5 text-white">
        <div className="flex items-center justify-between mb-5">
          <h2 className="bg-red-400 px-3 rounded">High</h2>
          <h4>{data.date}</h4>
        </div>
        <div>
          <h2 className="text-2xl">{data.title}</h2>
          <p className="text-sm mt-3">{data.description}</p>
        </div>
        <div className="flex mt-5">
          <button className="bg-red-600 w-full p-3 rounded text-white text-sm">
            Faild Task
          </button>
        </div>
      </div>
    </>
  );
};

export default FaildTask;
