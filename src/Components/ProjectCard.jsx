import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineDelete } from "react-icons/md";

const ProjectCard = ({ title, priority, handleDelete, id }) => {
  return (
    <div
      key={id}
      className={`bg-projectBg bg-cover bg-no-repeat w-[310px] p-2 rounded-3xl cursor-pointer 
    overflow-hidden max-h-64 font-QuickSand font-medium text-white`}
    >
      <div className="text-2xl flex items-center justify-end text-black">
        <div
          className="hover:bg-[rgba(250,250,250,0.1)] rounded-full p-2 text-darkOrange"
          onClick={() => {
            handleDelete(id);
          }}
        >
          <MdOutlineDelete></MdOutlineDelete>
        </div>
      </div>
      <Link to={`/projects/${id}`}>
        <div className="text-3xl px-3 py-1 overflow-hidden h-[72px]">
          {title}
        </div>
        <div className="text-xl p-3">Priority - {priority}</div>
      </Link>
    </div>
  );
};

export default ProjectCard;
