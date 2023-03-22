import React from "react";
import { MdOutlineDelete } from "react-icons/md";

const ProjectCard = ({ title, priority, handleDelete, id }) => {
  const bgCol = {
    Low: "lowPriority",
    Medium: "medPriority",
    High: "highPriority",
  };

  return (
    <div
      className={`bg-${bgCol[priority]} w-80 p-2 rounded-3xl cursor-pointer 
    overflow-hidden max-h-64 font-Comfortaa font-medium`}
    >
      <div className="text-2xl flex items-center justify-end text-black">
        <div
          className="hover:bg-[rgba(250,250,250,0.1)] rounded-full p-2"
          onClick={() => {
            handleDelete(id);
          }}
        >
          <MdOutlineDelete></MdOutlineDelete>
        </div>
      </div>
      <div className="text-2xl px-3 py-1 overflow-hidden h-[72px]">{title}</div>
      <div className="text-lg p-3">Priority - {priority}</div>
    </div>
  );
};

export default ProjectCard;
