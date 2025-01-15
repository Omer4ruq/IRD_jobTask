"use client";
import React, { useState } from "react";

import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import SettingSidebar from "./SettingSidebar";
import SidePannel from "./SidePannel";
import { CiSearch } from "react-icons/ci";
import vectorImage from "../../public/images/Vector.png";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

const MainPage = ({ categoryData, subCategoryData, duaData }) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(null);
  return (
    <div>
      <div className="flex gap-4 h-screen m-10">
        <div>
          <SidePannel></SidePannel>
        </div>
        <div>
          <h1 className="font-poppins text-2xl font-semibold mt-5 items-center">
            Dua Page
          </h1>
          <Sidebar
            categories={categoryData}
            subCategories={subCategoryData}
            onCategoryClick={setSelectedCategoryId}
            onSubCategoryClick={setSelectedSubCategoryId}
          />
        </div>
        <div>
          <div className="relative flex py-3  justify-end items-center ">
            <div>
              <input
                type="text"
                placeholder=" Search by Dua Name"
                className="border-2 rounded-md space-x-6 w-[370px] h-14  "
              />
            </div>

            <div className="bg-[#F3F4F6] w-[54px] h-[44px] absolute mr-2">
              <CiSearch className=" items-center mt-[10px] ml-4 text-xl" />
            </div>
          </div>
          <MainContent
            categoryId={selectedCategoryId}
            duas={duaData}
            subCategoryId={selectedSubCategoryId}
          />
        </div>
        <div>
          <div className="flex justify-end gap-2 mt-5">
            <Image
              src={vectorImage}
              alt="vector image"
              width={40}
              height={40}
            ></Image>
            <IoIosArrowDown className="mt-2" />
          </div>

          <SettingSidebar />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
