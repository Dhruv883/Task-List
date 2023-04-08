import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { VscTools } from "react-icons/vsc";
import TaskModal from "./Modals/TaskModal";
import Tasks from "./Tasks";

const ProjectDetails = () => {
  const { id } = useParams();
  const [openModal, setOpenModal] = useState(false);

  var [projects, setProjects] = useState(
    () => JSON.parse(localStorage.getItem("projects")) || []
  );

  var tasks = projects[id].tasks;

  return (
    <div className="h-full w-[calc(100vw-256px)] font-QuickSand max-h-[100vh] text-darkGrey">
      <div
        className=" flex justify-center items-center gap-4 text-6xl py-9 px-5
      bg-bgImage text-white "
      >
        <VscTools className="text-[54px]" />
        {projects[id].title}
      </div>

      <div className="p-3">
        <button
          className="px-3 py-2 text-2xl bg-darkOrange text-white rounded-xl font-QuickSand font-medium"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Add Task
        </button>
        <div className="border-b-2 border-gray-400 font-QuickSand font-medium text-3xl px-2 pt-5 pb-3">
          Tasks ({tasks.length})
        </div>
        {openModal && <TaskModal setOpenModal={setOpenModal} />}
        <div className="max-h-[58vh] flex flex-col overflow-y-scroll overflow-x-hidden justify-start">
          {tasks.map((task, index) => {
            return (
              <Tasks
                key={index}
                title={task.title}
                description={task.description}
                dueDate={task.dueDate}
                priority={task.priority}
                status={task.status}
                projectId={task.projectId}
                id={index}
                // handleDelete={handleDelete}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
