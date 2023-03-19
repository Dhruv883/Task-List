import React, { useState, useEffect } from "react";
import { VscTools } from "react-icons/Vsc";

import ProjectModal from "./Modals/ProjectModal";

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
        {openModal && <ProjectModal setOpenModal={setOpenModal} />}
      </div>

      <div className="border border-red-500 py-3 px-5">Cards</div>
    </div>
  );
};

export default Projects;
