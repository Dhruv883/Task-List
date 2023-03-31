import React, { useState } from "react";
import { BsCalendarWeek } from "react-icons/bs";
import format from "date-fns/format";
import add from "date-fns/add";
import Tasks from "./Tasks";

const Week = () => {
  const [projects, setProjects] = useState(() =>
    JSON.parse(localStorage.getItem("projects"))
  );

  return (
    <div className="h-full w-[calc(100vw-256px)] text-darkGrey">
      <div
        className="flex justify-center items-center gap-4 text-6xl p-10 
      bg-bgImage text-white font-QuickSand font-normal"
      >
        <BsCalendarWeek className="text-5xl" /> Week
      </div>
      <div className="py-3 overflow-y-scroll overflow-x-hidden ">
        {projects.map((project, pindex) => {
          return project.tasks.map((task, tindex) => {
            return (
              new Date(task.dueDate) > new Date() &&
              new Date(task.dueDate) < add(new Date(), { days: 7 }) && (
                <Tasks
                  key={tindex}
                  title={task.title}
                  description={task.description}
                  dueDate={task.dueDate}
                  priority={task.priority}
                  status={task.status}
                  projectId={task.projectId}
                  id={tindex}
                />
              )
            );
          });
        })}
      </div>
    </div>
  );
};

export default Week;
