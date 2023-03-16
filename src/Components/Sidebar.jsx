import React from "react";
import { Link, NavLink } from "react-router-dom";
// ICONS

import { RxHamburgerMenu } from "react-icons/rx";
import { BsCalendarWeek, BsCalendarDay, BsCalendar2 } from "react-icons/bs";
import { VscTools, VscClose } from "react-icons/Vsc";
import { IoMdCheckboxOutline } from "react-icons/io";

const Sidebar = ({ isOpen, handleClick, isActive, onClick }) => {
  const Menu = [
    { title: "All", icon: <BsCalendar2 /> },
    { title: "Today", icon: <BsCalendarDay /> },
    { title: "Week", icon: <BsCalendarWeek /> },
    { title: "Projects", icon: <VscTools /> },
  ];
  return (
    <div
      className={`${
        isOpen ? "w-[19]rem]" : "w-24 "
      } fixed  z-10 h-screen bg-offWhite font-Comfortaa`}
    >
      {isOpen ? (
        <div className="flex justify-center items-center text-5xl p-3">
          <IoMdCheckboxOutline className="text-6xl" />
          <span className="text-darkOrange">Task</span>Mate
        </div>
      ) : (
        <div className="flex justify-center items-center text-6xl py-3 px-1">
          <IoMdCheckboxOutline />
        </div>
      )}

      <div
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
      </div>

      {Menu.map((menu, index) => (
        <div
          key={index}
          className={`flex items-center  py-2 my-5 mx-8 gap-5 cursor-pointer rounded-lg  border-2 border-offWhite hover:border-darkOrange  ${
            isOpen ? "pl-6" : "pl-0 justify-center"
          }`}
        >
          {isOpen ? (
            <>
              <span className="text-[2.5rem]">{menu.icon}</span>
              <span className="text-4xl">{menu.title}</span>
            </>
          ) : (
            <span className="text-[2.5rem]">{menu.icon}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
