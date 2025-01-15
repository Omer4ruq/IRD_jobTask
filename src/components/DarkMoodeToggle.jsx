"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext } from "react";
import { IoIosMoon } from "react-icons/io";
import { IoIosSunny } from "react-icons/io";
import { FaCircle } from "react-icons/fa";

const DarkMoodeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div>
      <label
        htmlFor="Toggle2"
        className="flex justify-between items-center space-x-4 cursor-pointer text-[#393939] p-4 "
      >
        <span>Night Mode</span>
        <div
          className="w-8 h-2 border-2  bg-slate-300 
  rounded-xl flex items-center justify-center p-1 relative cursor-pointer "
          onClick={toggle}
        >
          <FaCircle
            style={mode === "light" ? { left: "0px" } : { right: "0px" }}
            className="w-5 h-5 text-[#A4A4A4]  absolute text-lg"
          />
        </div>
      </label>
    </div>
  );
};

export default DarkMoodeToggle;
