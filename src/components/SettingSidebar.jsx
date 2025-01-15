import React from "react";
import { IoLanguage } from "react-icons/io5";
import { GrAppsRounded } from "react-icons/gr";
import { HiOutlineRectangleStack } from "react-icons/hi2";

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
      <label
        htmlFor="Toggle2"
        className="inline-flex items-center space-x-4 cursor-pointer text-[#393939] p-4 ml-4"
      >
        <span>Night Mode</span>
        <span className="relative">
          <input id="Toggle2" type="checkbox" className="hidden peer" />
          <div className="w-10 h-4 rounded-full shadow bg-[#C1C1C1B2] peer-checked:bg-[#A4A4A4]"></div>
          <div className="absolute left-0 w-6 h-6 rounded-full shadow -inset-y-1 peer-checked:right-0 peer-checked:left-auto bg-[#A4A4A4]"></div>
        </span>
      </label>
    </div>
  );
};

export default SettingSidebar;
