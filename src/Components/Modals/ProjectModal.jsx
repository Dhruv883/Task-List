import React, { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const ProjectModal = ({ setOpenModal }) => {
  var [projectData, setProjectData] = useState({
    title: "",
    priority: "Low",
    tasks: [],
  });

  var [projects, setProjects] = useState(
    () => JSON.parse(localStorage.getItem("projects")) || []
  );

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  function handleChange(event) {
    var { name, value } = event.target;
    setProjectData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    // event.preventDefault();
    // location.reload();
    setProjects([
      ...projects,
      { title: projectData.title, priority: projectData.priority, tasks: [] },
    ]);

    setProjectData(() => {
      return {
        title: "",
        priority: "Low",
        tasks: [],
      };
    });
  }

  return (
    <div className="border-2 border-red-600 w-screen h-screen fixed top-0 left-0 flex items-center justify-center bg-[rgba(255,255,255,0.8)] font-QuickSand font-medium">
      <div className="h-[425px] w-[450px] bg-white shadow-boxShadow rounded-lg">
        <div className=" text-4xl p-4 flex items-center justify-between  bg-darkOrange text-white rounded-t-lg">
          Add Project
          <IoMdClose
            className="cursor-pointer text-4xl"
            onClick={() => {
              setOpenModal(false);
            }}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mx-4 my-5">
            <label
              htmlFor="title"
              className="block text-gray-700 text-3xl mb-2"
            >
              Title
            </label>
            <input
              name="title"
              type="text"
              id="title"
              maxLength={30}
              value={projectData.title}
              className="shadow appearance-none border p-2 w-full rounded text-gray-500 outline-none focus-within:border-darkOrange text-2xl"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mx-4 my-5">
            <label
              htmlFor="priority"
              className="block text-gray-700 text-3xl mb-2"
            >
              Priority
            </label>
            <div className="relative">
              <select
                name="priority"
                id="priority"
                value={projectData.priority}
                onChange={handleChange}
                className="shadow border p-2 w-full rounded text-gray-500 outline-none focus-within:border-darkOrange text-2xl"
                required
              >
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </div>
          <div className="block border border-gray-200  my-8 mx-4"></div>
          <div className="flex items-center justify-end gap-5 px-0 m-4">
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

export default ProjectModal;
