import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

const TaskModal = ({ setOpenModal }) => {
  const { id } = useParams();

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    priority: "Low",
    dueDate: "",
    projectId: id,
    status: false,
  });

  const [projects, setProjects] = useState(() =>
    JSON.parse(localStorage.getItem("projects"))
  );

  const [allTasks, setAllTasks] = useState(projects[id].tasks);

  useEffect(() => {
    setProjects((prev) => {
      const projs = [...prev];
      projs[id].tasks = [...allTasks];
      return projs;
    });
  }, [allTasks]);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  function handleChange(event) {
    var { name, value } = event.target;
    setTaskData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // location.reload();

    setAllTasks([
      ...allTasks,
      {
        title: taskData.title,
        priority: taskData.priority,
        description: taskData.description,
        dueDate: taskData.dueDate,
        projectId: id,
        status: false,
      },
    ]);

    setTaskData(() => {
      return {
        title: "",
        priority: "Low",
        description: "",
        dueDate: "",
        status: false,
      };
    });
  }

  return (
    <div className="border-2 border-red-600 bg-[rgba(255,255,255,0.8)] w-screen h-screen fixed top-0 left-0 flex items-center justify-center font-QuickSand font-medium">
      <div className=" bg-white shadow-boxShadow rounded-lg">
        <div className="w-[475px] text-4xl p-4 flex items-center justify-between  bg-darkOrange text-white rounded-t-lg">
          Add Task
          <IoMdClose
            className="cursor-pointer text-4xl"
            onClick={() => {
              setOpenModal(false);
            }}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mx-4 my-4">
            <label
              htmlFor="title"
              className="block text-gray-700 text-2xl mb-2"
            >
              Title
            </label>
            <input
              name="title"
              type="text"
              id="title"
              maxLength={50}
              value={taskData.title}
              className="shadow appearance-none border p-1 px-2 w-full rounded text-gray-500 outline-none focus-within:border-darkOrange text-xl"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mx-4 my-4">
            <label
              htmlFor="description"
              className="block text-gray-700 text-2xl mb-2"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              value={taskData.description}
              cols="15"
              rows="3"
              maxLength={100}
              onChange={handleChange}
              className="shadow border w-full h-28 resize-none text-xl py-1 px-2 rounded text-gray-500 outline-none focus-within:border-darkOrange"
              required
            ></textarea>
          </div>

          <div className="mx-4 my-4">
            <label
              htmlFor="dueDate"
              className="block text-gray-700 text-2xl mb-2"
            >
              Due Date
            </label>
            <input
              name="dueDate"
              type="date"
              value={taskData.dueDate}
              id="dueDate"
              onChange={handleChange}
              className="shadow appearance-none border py-1 px-2 w-full rounded text-gray-500 outline-none focus-within:border-darkOrange text-xl uppercase"
              required
            />
          </div>

          <div className="mx-4 my-4">
            <label
              htmlFor="priority"
              className="block text-gray-700 text-2xl mb-2"
            >
              Priority
            </label>
            <div className="relative">
              <select
                name="priority"
                id="priority"
                value={taskData.priority}
                onChange={handleChange}
                className="shadow border py-1 px-2 w-full rounded text-gray-500 outline-none focus-within:border-darkOrange text-xl"
                required
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-end gap-5 px-0 m-4 mt-6">
            <button
              className="px-4 py-2 text-2xl border border-grey rounded-md"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 text-2xl bg-darkOrange border border-darkOrange text-white rounded-md tracking-wider"
              type="submit"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
