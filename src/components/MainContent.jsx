"use client";
import React, { use, useState } from "react";
import AllahLogo from "../../public/images/allah 1 (Traced).png";
import Image from "next/image";
import { IoCopyOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { IoBulbOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineReportGmailerrorred } from "react-icons/md";

const MainContent = ({ categoryId, duas, subCategoryId }) => {
  console.log("sub" + subCategoryId);
  console.log("cat" + categoryId);

  if (!categoryId) {
    categoryId = 1;
  }

  let filteredDuas = duas.filter((dua) => dua.cat_id === categoryId);

  if (subCategoryId > 0) {
    filteredDuas = filteredDuas.filter(
      (dua) => dua.subcat_id === subCategoryId
    );
  }

  return (
    <div className="w-[450px] md:w-[890px] ">
      <div className="bg-white p-4 border rounded mb-4 shadow font-inter w-[450px] md:w-[890px]">
        <h1 className="text-[#1FA45B] text-base font-semibold">
          Section:
          <span className="font-medium text-[#393939] ml-2">
            The servant is dependent on his Lord
          </span>
        </h1>
      </div>
      {filteredDuas.length > 0 ? (
        <ul>
          {filteredDuas.map((dua, index) => (
            <div
              key={index}
              className="bg-white p-4 border rounded mb-4 shadow w-[450px] md:w-[890px]"
            >
              <div className="flex">
                <Image
                  src={AllahLogo}
                  width={25}
                  height={25}
                  alt="logo"
                ></Image>
                <h3 className="text-[#1FA45B] text-base font-semibold font-inter ml-2">
                  {dua.dua_id}. {dua.dua_name_en}
                </h3>
              </div>

              <p className="text-[#393939] font-normal text-base font-inter pt-6">
                {dua.top_en}
              </p>

              {dua.dua_arabic && (
                <div>
                  {" "}
                  <p className="text-[#393939] text-end font-bold text-base font-inter pt-6">
                    {dua.dua_arabic}
                  </p>
                  <p className="text-[#393939] font-normal text-base font-inter pt-6">
                    <span className="font-semibold">Transliteration: </span>
                    {dua.transliteration_en}
                  </p>
                  <p className="text-[#393939] font-normal text-base font-inter pt-6">
                    <span className="font-semibold">Translation: </span>
                    {dua.translation_en}
                  </p>
                </div>
              )}

              <div className="font-inter  text-base pt-6">
                <h1 className="text-[#1FA45B] font-semibold">Reference:</h1>
                <h1 className="text-[#393939] font-medium">
                  {dua.refference_en}
                </h1>
              </div>
              <div className="text-[#868686] text-end flex justify-end gap-6 mt-4 text-lg font-semibold">
                <IoCopyOutline />
                <CiBookmark />
                <IoBulbOutline />
                <IoShareSocialOutline />
                <MdOutlineReportGmailerrorred />
              </div>
            </div>
          ))}
        </ul>
      ) : (
        <p>No duas available for this category.</p>
      )}

      {/* {duas.map((dua) => (
        <div key={dua.id} className="p-4 border rounded mb-4 shadow">
          <h3 className="text-lg font-bold">{dua.title}</h3>
          <p>{dua.description}</p>
        </div>
      ))} */}
      <div className="bg-white p-4 border rounded mb-4 shadow w-[890px]">
        <div className="flex">
          <Image src={AllahLogo} width={25} height={25} alt="logo"></Image>
          <h3 className="text-[#1FA45B] text-base font-semibold font-inter ml-2">
            1. The servant is dependent on his Lord #1
          </h3>
        </div>

        <p className="text-[#393939] font-normal text-base font-inter pt-6">
          All human beings depend on Allah for their welfare and prevention of
          evil in various matters of their religion and world. Allah says
          (interpretation of the meaning): O mankind, you are those in need of
          Allah, while Allah is the Free of need, the Praiseworthy.
        </p>

        <div className="font-inter  text-base pt-6">
          <h1 className="text-[#1FA45B] font-semibold">Reference:</h1>
          <h1 className="text-[#393939] font-medium">Surah Al-Fatir 35:15</h1>
        </div>
        <div className="text-[#868686] text-end flex justify-end gap-6 mt-4 text-lg font-semibold">
          <IoCopyOutline />
          <CiBookmark />
          <IoBulbOutline />
          <IoShareSocialOutline />
          <MdOutlineReportGmailerrorred />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
