import React from "react";
import { IoLanguage } from "react-icons/io5";
import { GrAppsRounded } from "react-icons/gr";
import { HiOutlineRectangleStack } from "react-icons/hi2";
import DarkMoodeToggle from "./DarkMoodeToggle";

const SettingSidebar = () => {
  return (
    <div className="w-[330px] bg-white p-4 font-inter mt-5 rounded-3xl">
      <h2 className="font-bold text-lg text-center text-[#393939]">Settings</h2>
      <div className="mt-4 px-4">
        <div className="flex gap-2 mt-2 bg-[#F7F8FA] w-[290px] h-[55px] p-2  items-center">
          <div className="bg-[#E8F0F5] rounded-full w-[38px] h-[38px]">
            <IoLanguage className="text-[#868686] text-2xl  ml-2 mt-2" />
          </div>

          <h3 className="font-medium text-center text-[#868686]">
            Language Setting
          </h3>
        </div>
        <div className="flex gap-2 mt-2 bg-[#F7F8FA] w-[290px] h-[55px] p-2  items-center">
          <div className="bg-[#E8F0F5] rounded-full w-[38px] h-[38px]">
            <HiOutlineRectangleStack className="text-[#868686] text-2xl  ml-2 mt-2" />
          </div>

          <h3 className="font-medium text-center text-[#868686]">
            General Settings
          </h3>
        </div>
        <div className="flex gap-2 mt-2 bg-[#F7F8FA] w-[290px] h-[55px] p-2  items-center">
          <div className="bg-[#E8F0F5] rounded-full w-[38px] h-[38px]">
            <GrAppsRounded className="text-[#868686]   text-2xl  ml-2 mt-2" />
          </div>

          <h3 className="font-medium text-center text-[#868686]">
            Font Settings
          </h3>
        </div>
        <div className="flex gap-2 mt-2 bg-[#F7F8FA] w-[290px] h-[55px] p-2  items-center">
          <div className="bg-[#E8F0F5] rounded-full w-[38px] h-[38px]">
            <GrAppsRounded className="text-[#868686] text-2xl  ml-2 mt-2" />
          </div>

          <h3 className="font-medium text-center text-[#868686]">
            Appearance Settings
          </h3>
        </div>
      </div>
      <DarkMoodeToggle></DarkMoodeToggle>
    </div>
  );
};

export default SettingSidebar;
