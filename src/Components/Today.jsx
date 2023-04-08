import React, { useState } from "react";
import { BsCalendarDay } from "react-icons/bs";
import format from "date-fns/format";
import Tasks from "./Tasks";
const Today = () => {
  var [projects, setProjects] = useState(
    () => JSON.parse(localStorage.getItem("projects")) || []
  );

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let currentDate = `${year}-${month}-${day}`;
  currentDate = format(date, "dd/MM/yyyy");

  return (
    <div className="h-full w-[calc(100vw-256px)] text-darkGrey">
      <div
        className="flex justify-center items-center gap-4 text-6xl p-10 
      bg-bgImage text-white font-QuickSand font-normal"
      >
        <BsCalendarDay className="text-5xl" /> Today
      </div>
      <div className="py-3 overflow-y-scroll overflow-x-hidden ">
        {projects.map((project, pindex) => {
          return project.tasks.map((task, tindex) => {
            return (
              format(new Date(task.dueDate), "dd/MM/yyyy") == currentDate && (
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

export default Today;
