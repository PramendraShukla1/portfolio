import React from 'react'
import profile_pic from "../assets/profile_pic.png"
import { Link } from 'react-router-dom'
import insta from "../assets/insta.webp";
import linkedin from "../assets/linkedin.webp";
import saroj from "../assets/saroj_logo.png";
import niet from "../assets/niet_logo.svg";
import angel from "../assets/angel_logo.jpeg";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { DiJqueryLogo } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { MdDataObject } from "react-icons/md";
import { IoLogoFirebase } from "react-icons/io5";
import Comapnies from './Comapnies';


const AboutMe = () => {
  return (
    <>
    <div className='mt-20 w-full h-full flex gap-10 justify-between min-h-[700px] '>
        {/* LEFT DIV */}
        <div className='w-2/5 min-h-[600px]'>

        
<div className='shadow-xl h-fit bg-white rounded-2xl p-10'>
    <div>
    <img
          src={profile_pic}
          alt=""
          className="w-20 rounded-full border border-gray-300 p-1 bg-white left-12"
        />
    </div>
    <div className='mt-5'>
        <h1 className='font-semibold text-gray-700 text-lg'>My story</h1>
    </div>
    <div className='mt-5'>
        <p className='text-gray-600'>Experienced Full Stack Developer with over 1.8 years of hands-on internship experience in MERN Stack, proficient in Node.js, and skilled in leveraging Java for creative problem-solving. Possessing multiple certifications in diverse IT domains, I showcase expertise in web development and software engineering. Recognized as a collaborative team player, I am known for delivering high-quality code, demonstrating strong problem-solving acumen, and effective communication skills. Eagerly committed to staying ahead of the curve by embracing cutting-edge technologies.</p>
    </div>
</div>
<div className="mt-5 w-full h-fit shadow-lg rounded-2xl bg-white p-10 pb-7">
            <h1 className="text-xl font-semibold">Follow my work on</h1>
            <p className="mt-3 text-gray-600">
              Please view my most recent work videos and images by clicking on
              the links below.
            </p>
            <div className="mt-4 flex gap-5">
              <Link
                to={"https://www.instagram.com/scribblecode/"}
                target="_blank"
              >
                <img src={insta} alt="" className="w-10 h-10" />
              </Link>
              <Link
                to={"https://www.linkedin.com/in/pramendra-shukla-11812a221/"}
                target="_blank"
              >
                <img src={linkedin} alt="" className="w-10 h-10" />
              </Link>
            </div>
          </div>


</div>


        {/* RIGHT DIV */}
        <div className=" w-3/5 h-full shadow-lg rounded-2xl bg-white p-10 min-h-[700px] flex">
            <div className=" flex flex-col justify-center items-center">
              <div className="flex flex-row justify-between">
                <div className="w-1/6 flex justify-center items-center">
                  <img src={niet} alt="" className="w-28" />
                </div>
                <div className="w-4/5 h-full">
                  <div className="flex justify-between w-full flex-row items-center">
                    <p className="text-xl font-semibold text-gray-600">Noida Institute Of Engineering And Technology, Greater Noida, Uttar Pradesh</p>
                    <p className="font-normal text-sm text-gray-500">
                      October 2020 - Present
                    </p>
                  </div>

                  <p className="font-semibold text-gray-500">
                    Btech Biotechnology
                  </p>
                  <p className="font-normal text-sm text-gray-500 w-5/6">
                  From 2020 to 2024, I have remained actively enrolled in a full-time engineering degree program.
                  </p>

                  <hr className="mt-5 mb-5" />
                </div>
              </div>
              <div className="flex flex-row">
              <div className="flex flex-row justify-between">
                <div className="w-1/6 flex justify-center items-center">
                  <img src={saroj} alt="" className="w-28 object-cover" />
                </div>
                <div className="w-4/5 h-full">
                  <div className="flex justify-between w-full flex-row items-center">
                    <p className="text-xl font-semibold text-gray-600 text-wrap">Saroj Convent Higher Secondary School, Tikamgarh, Madhya Pradesh</p>
                    <p className="font-normal text-sm text-gray-500">
                      June 2018 - May 2019
                    </p>
                  </div>

                  <p className="font-semibold text-gray-500">
                    12<sup>th</sup> Class
                  </p>
                  <p className="font-normal text-sm text-gray-500 w-5/6">
                  From 2018 to 2019, I was enrolled in 12<sup>th</sup> grade and my major subjects were Physics, Chemistry, Biology.
                  </p>

                  <hr className="mt-5 mb-5" />
                </div>
              </div>
              </div>

              <div className="flex flex-row">
              <div className="flex flex-row justify-between">
                <div className="w-1/6 flex justify-center items-center h-full">
                  <img src={angel} alt="" className="w-28 object-contain" />
                </div>
                <div className="w-4/5 h-full">
                  <div className="flex justify-between w-full flex-row items-center">
                    <p className="text-xl font-semibold text-gray-600">Angel Abode Public School, Tikamgarh, Madhya Pradesh</p>
                    <p className="font-normal text-sm text-gray-500">
                      April 2016 - June 2017
                    </p>
                  </div>

                  <p className="font-semibold text-gray-500">
                  10<sup>th</sup> Class
                  </p>
                  <p className="font-normal text-sm text-gray-500 w-5/6">
                  From 2016 to 2017, I was enrolled in 10<sup>th</sup> grade.
                  </p>

                  <hr className="mt-5 mb-5" />
                </div>
              </div>
              </div>
              </div>
              </div>
  
    </div>

    <div className='w-full mt-20 h-fit'>
 {/* //!Skill Section Starts */}
 <div className=" w-full h-full">
        <h1 className="text-3xl font-semibold">My Skills</h1>
        <p className="mt-2 text-lg font-medium text-gray-500">
          Take a comprehensive look at the full range of my skills.
        </p>
        <div>
          <div className=" flex flex-wrap gap-4 mt-3 w-full">
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#5ed4f3] hover:translate-y-1 duration-300 font-[500] rounded-md bg-white">
              <FaReact />
              React JS
            </button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-yellow-300 hover:translate-y-1 duration-300 font-[500] rounded-md bg-white">
              <IoLogoJavascript />
              JavaScript
            </button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#0B6BAC] hover:translate-y-1 duration-300 font-[500] rounded-md bg-white hover:text-white">
              <DiJqueryLogo />
              jQuery
            </button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#68A063] hover:translate-y-1 duration-300 font-[500] rounded-md bg-white hover:text-white">
              <SiExpress />
              Express JS
            </button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#4db33d] hover:translate-y-1 duration-300 font-[500] rounded-md bg-white">
              <SiMongodb />
              MongoDB
            </button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#68A063] hover:translate-y-1 duration-300 font-[500] rounded-md bg-white">
              <FaNodeJs />
              Node JS
            </button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#36b7f0] hover:translate-y-1 duration-300 font-[500] rounded-md bg-white">
              <SiTailwindcss />
              Tailwind CSS
            </button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-black hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white bg-white">
              <FaGithub />
              Git/Github
            </button>
            {/* //!icons */}
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#264de4] hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white bg-white">
              <FaCss3 />
              CSS
            </button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#f89820] hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white bg-white">
              <FaJava />
              Java
            </button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#e34c26] hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white bg-white">
              <FaHtml5 />
              HTML
            </button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#553c7b] hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white bg-white">
              <FaBootstrap />
              Bootstrap
            </button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-black hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white bg-white">
              <FaDatabase />
              Data structure and algorithm
            </button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-black hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white bg-white">
              <MdDataObject />
              Object Oriented Programming
            </button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#f5820D] hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white bg-white">
              <IoLogoFirebase />
              Firebase
            </button>
          </div>
        </div>
      </div>
      {/* //!Skill Section Ends */}

      {/* Worked With Start */}
     <Comapnies/>
         {/* Worked With Start */}
    </div>
    </>
  )
}

export default AboutMe