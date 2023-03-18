import React, { useState, useEffect } from "react";
import { VscTools } from "react-icons/Vsc";
import { IoMdClose } from "react-icons/io";

const Modal = ({ setOpenModal }) => {
  var [projectData, setProjectData] = useState({ title: "", type: "Work" });

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
    event.preventDefault();
    setProjects([
      ...projects,
      { title: projectData.title, type: projectData.type },
    ]);
    setProjectData(() => {
      return {
        title: "",
        type: "Work",
      };
    });
    // setOpenModal(false);
  }

  return (
    <div className="border-2 border-red-600 w-screen h-screen fixed top-0 left-0 flex items-center justify-center bg-[rgba(255,255,255,0.8)] font-WorkSans">
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
              className="block text-gray-700 text-2xl mb-2"
            >
              Title
            </label>
            <input
              name="title"
              type="text"
              id="title"
              value={projectData.title}
              className="shadow appearance-none border p-2 w-full rounded text-gray-500 outline-none focus-within:border-darkOrange text-xl"
              onChange={handleChange}
              required
            />
          </div>
          <div className="mx-4 my-5">
            <label htmlFor="type" className="block text-gray-700 text-2xl mb-2">
              Project Type
            </label>
            <div className="relative">
              <select
                name="type"
                id="type"
                value={projectData.type}
                onChange={handleChange}
                className="shadow border p-2 w-full rounded text-gray-500 outline-none focus-within:border-darkOrange text-xl"
                required
              >
                <option>Work</option>
                <option>Personal</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="block border border-gray-200  my-8 mx-4"></div>
          <div className="flex items-center justify-end gap-5 px-0 m-4">
            <button
              className="px-4 py-2 text-xl border border-grey rounded-md"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              Cancel
            </button>
            <button
              className="px-4 py-2 text-xl bg-darkOrange border border-darkOrange text-white rounded-md tracking-wider"
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

const Projects = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="h-full w-[calc(100vw-256px)] ">
      <div
        className="flex justify-center items-center gap-4 text-6xl p-10 
      bg-bgImage text-white font-thin font-Comfortaa "
      >
        <VscTools />
        Projects
      </div>
      <div className="p-3">
        <button
          className="px-3 py-2 text-xl bg-darkOrange text-white rounded-xl"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Add Project
        </button>
        {openModal && <Modal setOpenModal={setOpenModal} />}
      </div>

      <div className="border border-red-500 py-3 px-5">Cards</div>
    </div>
  );
};

export default Projects;
