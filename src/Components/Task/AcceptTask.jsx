import React from "react";

const AcceptTask = ({ data }) => {
  return (
    <>
      <div className="bg-blue-400 h-full w-[350px] rounded flex-shrink-0 p-5 text-white">
        <div className="flex items-center justify-between mb-5">
          <h2 className="bg-red-400 px-3 rounded">High</h2>
          <h4>{data.date}</h4>
        </div>
        <div>
          <h2 className="text-2xl">{data.title}</h2>
          <p className="text-sm mt-3">{data.description}</p>
        </div>
        <div className="flex justify-between items-center mt-5">
          <button className="bg-green-600 p-3 rounded text-white text-sm">
            Mark As Completed
          </button>
          <button className="bg-red-600 p-3 rounded text-white text-sm">
            Mark As Faild
          </button>
        </div>
      </div>
    </>
  );
};

export default AcceptTask;
