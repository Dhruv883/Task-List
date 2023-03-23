import React, { useState, useEffect } from "react";
import { VscTools } from "react-icons/Vsc";

import ProjectModal from "./Modals/ProjectModal";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [openModal, setOpenModal] = useState(false);

  var [projects, setProjects] = useState(
    () => JSON.parse(localStorage.getItem("projects")) || []
  );

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  function handleDelete(id) {
    projects.splice(id, 1);
    setProjects([...projects]);
  }

  return (
    <div className="h-full w-[calc(100vw-256px)]">
      <div
        className="flex justify-center items-center gap-4 text-6xl p-10 
      bg-bgImage text-white font-QuickSand font-normal"
      >
        <VscTools />
        Projects
      </div>
      <div className="p-3">
        <button
          className="px-3 py-2 text-2xl bg-darkOrange text-white rounded-xl font-QuickSand font-medium"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Add Project
        </button>
        {openModal && <ProjectModal setOpenModal={setOpenModal} />}
      </div>

      <div className="p-5 max-h-[67vh] flex flex-wrap overflow-y-scroll gap-5">
        {projects.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              title={project.title}
              priority={project.priority}
              handleDelete={handleDelete}
              id={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
