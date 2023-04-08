import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// ICONS
import { RxHamburgerMenu } from "react-icons/rx";
import { BsCalendarWeek, BsCalendarDay, BsCalendar2 } from "react-icons/bs";
import { VscTools, VscClose } from "react-icons/vsc";
import { IoMdCheckboxOutline } from "react-icons/io";

const Sidebar = () => {
  const Menu = [
    { title: "All", icon: <BsCalendar2 />, to: "/" },
    { title: "Today", icon: <BsCalendarDay />, to: "/today" },
    { title: "Week", icon: <BsCalendarWeek />, to: "/week" },
    { title: "Projects", icon: <VscTools />, to: "/projects" },
  ];
  return (
    <div className={`h-screen bg-offWhite font-QuickSand font-medium w-64`}>
      <div className="flex justify-center items-center text-4xl p-3 mt-4 cursor-default">
        <IoMdCheckboxOutline className="text-5xl text-darkOrange" />
        <span className="text-darkOrange">Task</span>Mate
      </div>

      {/* <div
        className={`flex  items-center py-2 my-2 cursor-pointer  ${
          isOpen ? "justify-end pr-4" : "justify-center"
        }`}
        onClick={handleClick}
      >
        {isOpen ? (
          <VscClose className="text-6xl" />
        ) : (
          <RxHamburgerMenu className="text-4xl" />
        )}
      </div> */}

      {Menu.map((menu, index) => (
        <div
          key={index}
          className={`flex items-center py-2 my-2 gap-4 cursor-pointer rounded-lg hover:text-darkOrange`}
        >
          <NavLink
            key={index}
            to={menu.to}
            className={({ isActive }) =>
              isActive ? "text-darkOrange" : "text-black"
            }
          >
            <div className="flex items-center gap-5 cursor-pointer rounded-lg hover:text-darkOrange text-4xl w-64 px-8 py-2">
              <span>{menu.icon}</span>
              <span>{menu.title}</span>
            </div>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
