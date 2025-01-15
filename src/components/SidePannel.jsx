import React from "react";
import { IoCopyOutline } from "react-icons/io5";
import { CiBookmark, CiBookmarkCheck } from "react-icons/ci";
import { IoBulbOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { GrAppsRounded } from "react-icons/gr";
import { RiMedicineBottleLine } from "react-icons/ri";
import { IoChatbubblesOutline } from "react-icons/io5";
import { LuBookOpen } from "react-icons/lu";
import logo from "../../public/images/logo.png";
import support from "../../public/images/I want to support.png";
import { CiHome } from "react-icons/ci";
import Image from "next/image";

const SidePannel = () => {
  return (
    <div className="w-[100px] h-[930px] bg-white flex flex-col items-center justify-between py-5 rounded-md shadow-xl">
      <div className="">
        <Image
          src={logo}
          alt="logo"
          width={80}
          height={80}
          className="shadow-sm"
        ></Image>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col  justify-center items-center gap-6">
          <div className={`rounded-full w-[38px] h-[38px] bg-[#E2E2E2]`}>
            <CiHome className="text-2xl ml-2 mt-2 text-[#868686]" />
          </div>
          <div className={`rounded-full w-[38px] h-[38px] bg-[#E2E2E2]`}>
            <GrAppsRounded className="text-2xl ml-2 mt-2 text-[#868686]" />
          </div>
          <div className={`rounded-full w-[38px] h-[38px] bg-[#E2E2E2]`}>
            <IoBulbOutline className="text-2xl ml-2 mt-2 text-[#868686]" />
          </div>
          <div className={`rounded-full w-[38px] h-[38px] bg-[#E2E2E2]`}>
            <CiBookmarkCheck className="text-2xl ml-2 mt-2 text-[#868686]" />
          </div>
          <div className={`rounded-full w-[38px] h-[38px] bg-[#E2E2E2]`}>
            <RiMedicineBottleLine className="text-2xl ml-2 mt-2 text-[#868686]" />
          </div>
          <div className={`rounded-full w-[38px] h-[38px] bg-[#E2E2E2]`}>
            <IoChatbubblesOutline className="text-2xl ml-2 mt-2 text-[#868686]" />
          </div>
          <div className={`rounded-full w-[38px] h-[38px] bg-[#E2E2E2]`}>
            <LuBookOpen className="text-2xl ml-2 mt-2 text-[#868686]" />
          </div>
        </div>
      </div>
      <div>
        <Image
          src={support}
          alt="logo"
          width={80}
          height={80}
          className="shadow-sm"
        ></Image>
      </div>
    </div>
  );
};

export default SidePannel;
