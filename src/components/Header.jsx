import React from "react";
import header_image from "../assets/website1.png";
import profile_pic from "../assets/profile_pic.png";
import { MdEmail } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiJqueryLogo } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div className="w-full h-full rounded-2xl flex flex-col shadow-xl ">
      <div className="w-full rounded-2xl h-full relative">
        <img
          src={header_image}
          alt=""
          className="w-full h-52 object-cover rounded-2xl rounded-b-none"
        />
        <img
          src={profile_pic}
          alt=""
          className="w-28 absolute top-36 rounded-full border border-gray-300 p-1 bg-white left-12"
        />
      </div>
      <div className="w-full rounded-2xl rounded-t-none h-full p-16 pl-14 flex bg-white">
        <div className="w-2/3 p-2">
          <h1 className="text-3xl font-semibold">Pramendra Shukla</h1>
          <h1 className="mt-2 text-lg text-gray-600 ">
            I'm a Full Stack Developer based in Delhi, India
          </h1>
          <div className=" flex flex-wrap gap-2 mt-3">
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#5ed4f3] hover:translate-y-1 duration-300 font-[500] rounded-md "><FaReact/>React JS</button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-yellow-300 hover:translate-y-1 duration-300 font-[500] rounded-md"><IoLogoJavascript/>JavaScript</button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#0B6BAC] hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white"><DiJqueryLogo/>jQuery</button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#68A063] hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white"><SiExpress/>Express JS</button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#4db33d] hover:translate-y-1 duration-300 font-[500] rounded-md"><SiMongodb/>MongoDB</button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#68A063] hover:translate-y-1 duration-300 font-[500] rounded-md"><FaNodeJs/>Node JS</button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#36b7f0] hover:translate-y-1 duration-300 font-[500] rounded-md"><SiTailwindcss/>Tailwind CSS</button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-black hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white"><FaGithub/>Git/Github</button>
          </div>
        </div>
        <div className="w-1/3 flex items-center gap-10 justify-center">
          <button className="text-3xl p-3 hover:bg-black hover:text-white border rounded-lg hover:translate-y-1 duration-300">
            <MdEmail />
          </button>
          <div className="flex">
            <button className="flex items-center p-3 gap-1 text-lg font-semibold rounded-xl border shadow-sm hover:translate-y-1 duration-300 hover:bg-black hover:text-white">
              <IoMdDownload />
              View Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
