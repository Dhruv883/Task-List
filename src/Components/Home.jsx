import React, { useState } from "react";
import Tasks from "./Tasks";
import { BsCalendar2 } from "react-icons/bs";
const Home = () => {
  var [projects, setProjects] = useState(
    () => JSON.parse(localStorage.getItem("projects")) || []
  );

  return (
    <div className="h-full w-[calc(100vw-256px)] text-darkGrey ">
      <div
        className="flex justify-center items-center gap-4 text-6xl p-10 
      bg-bgImage text-white font-QuickSand font-normal"
      >
        <BsCalendar2 className="text-5xl" />
        All Tasks
      </div>

      <div className="py-3 max-h-[78vh] flex flex-col overflow-y-scroll overflow-x-hidden justify-start">
        {projects.map((project, pindex) => {
          return project.tasks.map((task, tindex) => {
            return (
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
            );
          });
        })}
      </div>
    </div>
  );
};

export default Home;
