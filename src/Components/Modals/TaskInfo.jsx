import React from "react";
import { IoMdClose } from "react-icons/io";

const TaskInfo = ({ title, description, dueDate, priority, setTaskInfo }) => {
  return (
    <div className="border-2 border-red-600 bg-[rgba(255,255,255,0.8)] w-screen h-screen fixed top-0 left-0 flex items-center justify-center font-QuickSand font-medium">
      <div className=" bg-white shadow-boxShadow rounded-lg">
        <div className="w-[475px] text-4xl p-4 flex items-center justify-between  bg-darkOrange text-white rounded-t-lg">
          Task Info
          <IoMdClose
            className="cursor-pointer text-4xl"
            onClick={() => {
              setTaskInfo(false);
            }}
          />
        </div>

        <div className="mx-4 my-4">
          <span className="block text-gray-700 text-2xl mb-2">Title</span>
          <div className="w-[443px] text-2xl border-b-2 border-darkOrange pb-2">
            {title}
          </div>
        </div>

        <div className="mx-4 my-4">
          <span className="block text-gray-700 text-2xl mb-2">Description</span>
          <div className="w-[443px] text-2xl border-b-2 border-darkOrange pb-2">
            {description}
          </div>
        </div>

        <div className="mx-4 my-4 ">
          <span className="block text-gray-700 text-2xl mb-2">Due Date</span>
          <div className=" text-2xl  border-b-2 border-darkOrange pb-2">
            {dueDate}
          </div>
        </div>

        <div className="mx-4 my-4 ">
          <span className="block text-gray-700 text-2xl mb-2">Priority</span>
          <div className="text-2xl  border-b-2 border-darkOrange pb-2">
            {priority}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskInfo;
