"use client";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import SettingSidebar from "./SettingSidebar";
import SidePannel from "./SidePannel";
import { CiSearch, CiMenuBurger, CiSettings } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

import vectorImage from "../../public/images/Vector.png";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";
import SidePannelResponsive from "./SidePannelResponsive";

const MainPage = ({ categoryData, subCategoryData, duaData }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(null);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSettingOpen, setIsSettingOpen] = useState(false);

  return (
    <div className="h-screen overflow-x-hidden scrollbar-hide md:overflow-visible m-4 mt-14">
      <div className="block md:hidden mt-6">
        <div className="flex justify-between p-6">
          <div>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-md"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              <CiMenuBurger className="text-2xl" />
            </button>
          </div>
          <div className="relative flex  justify-end items-center">
            <input
              type="text"
              placeholder="Search by Dua Name"
              className="border-2 rounded-md w-full lg:w-[370px] h-14 px-4"
            />
            <div className="absolute right-4 bg-[#F3F4F6] w-[32px] h-[24px] flex items-center justify-center">
              <CiSearch className="text-xl" />
            </div>
          </div>
          <div>
            <button
              className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-md"
              onClick={() => setIsSettingOpen(!isSettingOpen)}
            >
              <CiSettings className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
      <div className="flex lg:gap-4 gap-0">
        {/* Sidebar Panel */}
        <div className="hidden lg:block mt-5">
          <SidePannel />
        </div>
        <div className="lg:hidden fixed z-10 bottom-0 w-full">
          <SidePannelResponsive />
        </div>

        {/* Category Section */}
        <div className="flex-1">
          <div className="lg:hidden mt-4">
            {/* <button
              className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-md"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
            >
              <CiMenuBurger className="text-2xl" />
            </button> */}

            {/* Sliding Sidebar for Categories */}
            <div
              className={`absolute top-0 -left-40 w-[250px] h-full  shadow-lg z-20 transform ${
                isCategoryOpen ? "translate-x-44" : "-translate-x-full"
              } transition-transform duration-300`}
            >
              <button
                className="absolute top-4 right-4 mt-7 -mr-10 text-xl"
                onClick={() => setIsCategoryOpen(false)}
              >
                <IoMdClose className="text-white" />
              </button>
              <Sidebar
                categories={categoryData}
                subCategories={subCategoryData}
                onCategoryClick={setSelectedCategoryId}
                onSubCategoryClick={setSelectedSubCategoryId}
              />
            </div>
          </div>

          {/* Desktop Category Section */}
          <div className="hidden lg:block">
            <h1 className="font-poppins text-2xl font-semibold mt-5">
              Dua Page
            </h1>
            <Sidebar
              categories={categoryData}
              subCategories={subCategoryData}
              onCategoryClick={setSelectedCategoryId}
              onSubCategoryClick={setSelectedSubCategoryId}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="mr-48 md:mr-0 p-4 md:p-0">
          {/* <div className="relative flex py-3 justify-end items-center">
            <input
              type="text"
              placeholder="Search by Dua Name"
              className="border-2 rounded-md w-full lg:w-[370px] h-14 px-4"
            />
            <div className="absolute right-4 bg-[#F3F4F6] w-[54px] h-[44px] flex items-center justify-center">
              <CiSearch className="text-xl" />
            </div>
          </div> */}
          <MainContent
            categoryId={selectedCategoryId}
            duas={duaData}
            subCategoryId={selectedSubCategoryId}
          />
        </div>

        {/* Setting Section */}
        <div className="relative">
          <div className="lg:hidden mt-4">
            {/* <button
              className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-md"
              onClick={() => setIsSettingOpen(!isSettingOpen)}
            >
              <CiSettings className="text-2xl" />
            </button> */}

            {/* Sliding Sidebar for Settings */}
            <div
              className={`absolute top-0 right-0 w-[250px] h-full shadow-lg z-20 transform ${
                isSettingOpen ? "-translate-x-72 mr-6" : "translate-x-full"
              } transition-transform duration-300`}
            >
              <button
                className="absolute top-4 left-4 text-xl"
                onClick={() => setIsSettingOpen(false)}
              >
                <IoMdClose className="text-green-500" />
              </button>
              <SettingSidebar />
            </div>
          </div>

          {/* Desktop Setting Section */}
          <div className="hidden lg:block">
            <div className="flex justify-end gap-2 mt-5">
              <Image
                src={vectorImage}
                alt="vector image"
                width={40}
                height={40}
              />
              <IoIosArrowDown className="mt-2" />
            </div>
            <SettingSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
