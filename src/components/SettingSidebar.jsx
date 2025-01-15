"use client";
import React, { useState } from "react";
import { IoLanguage } from "react-icons/io5";
import { GrAppsRounded } from "react-icons/gr";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import DarkMoodeToggle from "./DarkMoodeToggle";

const SettingSidebar = () => {
  const [selected, setSelected] = useState("language");

  const options = [
    { id: "language", label: "Language Setting", icon: IoLanguage },
    { id: "general", label: "General Settings", icon: HiOutlineRectangleStack },
    { id: "font", label: "Font Settings", icon: GrAppsRounded },
    { id: "appearance", label: "Appearance Settings", icon: GrAppsRounded },
  ];

  return (
    <div className="w-[330px] bg-white p-4 font-inter mt-5 rounded-3xl shadow-lg">
      <h2 className="font-bold text-lg text-center text-[#393939]">Settings</h2>
      <div className="mt-4 px-4">
        {options.map((option) => {
          const Icon = option.icon;
          return (
            <div key={option.id}>
              <div
                className={`flex gap-2 mt-2 w-[290px] h-[55px] p-2 items-center rounded-lg cursor-pointer ${
                  selected === option.id
                    ? "bg-[#FFF5F5] border-l-4 border-[#1FA45B]"
                    : "bg-[#F7F8FA]"
                }`}
                onClick={() => setSelected(option.id)}
              >
                <div
                  className={`rounded-full w-[38px] h-[38px] ${
                    selected === option.id ? "bg-[#FDE4E4]" : "bg-[#E8F0F5]"
                  }`}
                >
                  <Icon
                    className={`text-2xl ml-2 mt-2 ${
                      selected === option.id
                        ? "text-[#1FA45B]"
                        : "text-[#868686]"
                    }`}
                  />
                </div>
                <h3
                  className={`font-medium text-center ${
                    selected === option.id ? "text-[#1FA45B]" : "text-[#868686]"
                  }`}
                >
                  {option.label}
                </h3>
              </div>

              {selected === "appearance" && option.id === "appearance" && (
                <div className="mt-2 pl-8">
                  <DarkMoodeToggle />
                </div>
              )}
              {selected === "language" && option.id === "language" && (
                <div className="mt-2 pl-8">
                  <div className="mt-4 justify-center ml-4">
                    <h3 className="font-medium text-center">Language</h3>
                    <div className="flex gap-2 mt-2 justify-center">
                      <button className="p-2 bg-green-500 text-white rounded">
                        English
                      </button>
                      <button className="p-2 bg-gray-300 rounded">বাংলা</button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SettingSidebar;
