import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { VscTools } from "react-icons/Vsc";
import TaskModal from "./Modals/TaskModal";
const ProjectDetails = () => {
  const { id } = useParams();
  const [openModal, setOpenModal] = useState(false);

  var [projects, setProjects] = useState(
    () => JSON.parse(localStorage.getItem("projects")) || []
  );

  return (
    <div className="h-full w-[calc(100vw-256px)] font-QuickSand ">
      <div className="">
        <div
          className=" flex justify-center items-center gap-4 text-6xl py-10 px-5
      bg-bgImage text-white "
        >
          <VscTools className="text-[54px]" />
          {projects[id].title}
        </div>

        <div className="p-3">
          {/* <div>Tasks - </div> */}
          <button
            className="px-3 py-2 text-2xl bg-darkOrange text-white rounded-xl"
            onClick={() => {
              setOpenModal(true);
            }}
          >
            Add Task
          </button>
          {openModal && <TaskModal setOpenModal={setOpenModal} />}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
