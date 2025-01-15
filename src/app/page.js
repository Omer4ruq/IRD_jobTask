import MainContent from "@/components/MainContent";
import SettingSidebar from "@/components/SettingSidebar";
import Sidebar from "@/components/Sidebar";
import SidePannel from "@/components/SidePannel";
import Image from "next/image";
import vectorImage from "../../public/images/Vector.png";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { getCategory, getDua, getSubCategory } from "./utils/db";

import MainPage from "@/components/MainPage";

export default async function Home({ categories, duas }) {
  const categoryData = await getCategory();
  const subCategoryData = await getSubCategory();
  const duaData = await getDua();

  return (
    <div className="">
      <MainPage
        categoryData={categoryData}
        subCategoryData={subCategoryData}
        duaData={duaData}
      ></MainPage>
    </div>
  );
}
