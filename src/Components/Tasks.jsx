import React, { useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsCircle, BsCheckCircle } from "react-icons/bs";

const Tasks = ({ title, description, dueDate, priority, projectId, id }) => {
  return (
    <div className="border-b border-regrayd-500 flex items-center justify-between font-QuickSand font-medium text-xl pr-5 cursor-pointer py-4 hover:bg-lightgrey px-3">
      <div className="flex items-center">
        <div className="text-lg">
          <BsCircle />
        </div>

        <div className="ml-2 text-2xl">{title}</div>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-darkOrange">{dueDate}</div>

        <div>
          <AiOutlineInfoCircle />
        </div>

        <div className="text-2xl">
          <MdOutlineDelete />
        </div>
      </div>
    </div>
  );
};

export default Tasks;
