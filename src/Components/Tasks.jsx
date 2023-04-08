import React, { useState, useEffect } from "react";

import { MdOutlineDelete } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsCircle, BsCheckCircle } from "react-icons/bs";

import TaskInfo from "./Modals/TaskInfo";

const Tasks = ({
  title,
  description,
  dueDate,
  priority,
  status,
  projectId,
  id,
}) => {
  const [taskInfo, setTaskInfo] = useState(false);

  const [projects, setProjects] = useState(() =>
    JSON.parse(localStorage.getItem("projects") || [])
  );

  const [allTasks, setAllTasks] = useState(projects[projectId].tasks);

  function handleClick() {
    location.reload();
    setAllTasks((prev) => {
      const prevTask = [...prev];
      prevTask[id].status = !status;
      return prevTask;
    });
  }

  useEffect(() => {
    setProjects((prev) => {
      const projs = [...prev];
      projs[projectId].tasks = [...allTasks];
      return projs;
    });
  }, [allTasks]);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  function handleDelete(id) {
    location.reload();
    allTasks.splice(id, 1);
    setAllTasks([...allTasks]);
  }

  return (
    <>
      <div className="border-b border-regrayd-500 flex items-center justify-between font-QuickSand font-medium text-xl pr-5 cursor-pointer py-4 hover:bg-lightgrey px-3">
        <div
          className={`flex items-center ${
            status ? "line-through" : "cursor-pointer"
          }`}
          onClick={handleClick}
        >
          <div className="text-lg">
            {status ? <BsCheckCircle /> : <BsCircle />}
          </div>

          <div className="ml-2 text-2xl w-[662px] ">{title}</div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-darkOrange">{dueDate}</div>

          <div>
            <AiOutlineInfoCircle
              onClick={() => {
                setTaskInfo(true);
              }}
            />
          </div>

          <div className="text-2xl">
            <MdOutlineDelete
              onClick={() => {
                handleDelete(id);
              }}
            />
          </div>
        </div>
      </div>
      <div>
        {taskInfo && (
          <TaskInfo
            setTaskInfo={setTaskInfo}
            title={title}
            description={description}
            dueDate={dueDate}
            priority={priority}
          />
        )}
      </div>
    </>
  );
};

export default Tasks;
