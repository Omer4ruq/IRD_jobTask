"use client";
import Image from "next/image";
import React, { useState } from "react";
import subCategory from "../../public/images/subCategory.png";
import poppins from "next";
import { CiSearch } from "react-icons/ci";

const Sidebar = ({
  categories,
  subCategories,
  onCategoryClick,
  onSubCategoryClick,
}) => {
  //   console.log(categories);
  const [expandedCategory, setExpandedCategory] = useState(1);

  const handleCategoryClick = (categoryId) => {
    setExpandedCategory(categoryId);

    onCategoryClick(categoryId); // Notify parent about the selected category
    onSubCategoryClick(0);
  };
  const handleSubCategoryClick = (subCategoryId) => {
    onSubCategoryClick(subCategoryId); // Notify parent about the selected subcategory
  };

  return (
    <div className="w-[430px] mt-7 max-w-sm bg-white shadow-md rounded-lg text-inter">
      <div className="bg-[#1FA45B] rounded-t-md text-inter text-lg font-semibold text-center items-center py-3 px-4">
        <h2 className="text-white text-lg font-bold">Categories</h2>
      </div>
      <div className="relative flex py-3 px-4">
        <input
          type="text"
          placeholder="     Search by Categories"
          className="border-2 rounded-md space-x-6 w-full h-10 p-3 "
        />
        <CiSearch className="absolute items-center mt-[10px] ml-2 text-xl" />
      </div>
      <div className="p-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-[#E8F0F5] rounded-lg p-3 mb-4  space-x-4 "
          >
            <button>
              <div className="flex justify-between items-center">
                <div
                  className="flex gap-3"
                  onClick={() => handleCategoryClick(category.id)}
                >
                  <Image
                    src={subCategory}
                    alt={category.cat_icon}
                    width={50}
                    height={50}
                  ></Image>

                  <div className="w-[255px]">
                    <h3 className="text-[#1FA45B] font-semibold text-base text-inter">
                      {category.cat_name_en}
                    </h3>
                    <p className="text-sm font-normal  text-[#7E7E7E] font-poppins">
                      Subcategory: {category.no_of_subcat}
                    </p>
                  </div>
                </div>
                <div className="text-sm text-gray-500 justify-end text-center">
                  <h1 className="text-[#393939] font-inter text-base font-semibold">
                    {category.no_of_dua}
                  </h1>

                  <div>
                    <h1 className="font-normal text-sm font-poppins">Duas</h1>
                  </div>
                </div>
              </div>
            </button>
            <div>
              {expandedCategory === category.id && (
                <ul className="list-disc pl-4 border-l-2 border-dotted border-primary border-[#1FA45B] space-y-2">
                  {subCategories
                    .filter((subCat, index) => subCat.cat_id === category.id)
                    .map((subCat) => (
                      <button
                        key={subCat.subcat_id}
                        className=" mt-4 text-start text-base font-medium font-inter"
                      >
                        {" "}
                        <li
                          className=" text-[#373737] border-dotted "
                          onClick={() =>
                            handleSubCategoryClick(subCat.subcat_id)
                          }
                        >
                          {subCat.subcat_name_en}
                        </li>
                      </button>
                    ))}
                </ul>
              )}
            </div>
          </div>
        ))}
        {/* <ul className="list-none pl-4 border-l-2 border-green-500 space-y-2">
          {sidecategories[0].items.map((item, index) => (
            <li key={index} className="text-sm text-gray-700">
              {item}
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
};

export default Sidebar;
