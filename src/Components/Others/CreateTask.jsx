import React, { useState } from "react";

const CreateTask = () => {
  const [input, setInput] = useState({
    title: "",
    date: "",
    asign: "",
    category: "",
    description: "",
  });

  const [newtask, setNewTask] = useState("");

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewTask({
      input,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    });

    const data = JSON.parse(localStorage.getItem("employees"));

    data.forEach((item) => {
      if (input.asign === item.firstname) {
        item.tasks.push(newtask);
        item.taskNumber.newTask = item.taskNumber.newTask + 1;
      }
    });

    localStorage.setItem("employees", JSON.stringify(data));
    console.log(data);

    // setInput({ title: "", date: "", asign: "", category: "", description: "" });
  };
  return (
    <>
      <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          className="flex justify-between w-full items-start"
        >
          <div className="w-1/2">
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
              <input
                name="title"
                value={input.title}
                onChange={handleChange}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="Make a UI design"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
              <input
                name="date"
                value={input.date}
                onChange={handleChange}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="date"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
              <input
                name="asign"
                value={input.asign}
                onChange={handleChange}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="employee name"
              />
            </div>
            <div>
              <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
              <input
                name="category"
                value={input.category}
                onChange={handleChange}
                className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                type="text"
                placeholder="design, dev, etc"
              />
            </div>
          </div>

          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea
              name="description"
              value={input.description}
              onChange={handleChange}
              className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            ></textarea>
            <button
              type="submit"
              className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full"
            >
              Create Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateTask;
