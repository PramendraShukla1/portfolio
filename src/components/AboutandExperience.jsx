import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import insta from "../assets/insta.webp";
import linkedin from "../assets/linkedin.webp";
import udemy from "../assets/Udemy-Logo.png";
import octanet from "../assets/octanet.jpeg";
import bharat_intern from "../assets/bharat_intern.jpeg";
import techplement from "../assets/techplement.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";

const AboutandExperience = () => {
  return (
    <div className="mt-20 w-full flex">
      <div className="w-1/2 h-full p-5 justify-center">
        <h1 className="text-3xl font-semibold">About me</h1>
        <div className="mt-5 w-full h-full shadow-lg rounded-2xl bg-white p-10 pb-7">
          <p className="text-gray-600 leading-[25px] text-pretty text-justify w-full">
            Experienced Full Stack Developer with over 1.8 years of hands-on
            internship experience in MERN Stack, proficient in Node.js, and
            skilled in leveraging Java for creative problem-solving. Possessing
            multiple certifications in diverse IT domains, I showcase expertise
            in web development and software engineering. Recognized as a
            collaborative team player, I am known for delivering high-quality
            code, demonstrating strong problem-solving acumen, and effective
            communication skills. Eagerly committed to staying ahead of the
            curve by embracing cutting-edge technologies.
          </p>
          <button className="mt-5 flex items-center gap-1 p-3 border rounded-xl font-semibold text-blue-500 hover:translate-y-1 duration-300 ">
            Read More
            <FaAngleRight />
          </button>
        </div>
        <div className="mt-5 w-full h-full shadow-lg rounded-2xl bg-white p-10 pb-7">
          <h1 className="text-lg font-medium">Follow my work on</h1>
          <p className="mt-3 text-gray-600">
            Please view my most recent work videos and images by clicking on the
            links below.
          </p>
          <div className="mt-4 flex gap-5">
            <a href="https://www.instagram.com/scribblecode/" target="_blank">
              <img src={insta} alt="" className="w-10 h-10" />
            </a>
            <a
              href="https://www.linkedin.com/in/pramendra-shukla-11812a221/"
              target="_blank"
            >
              <img src={linkedin} alt="" className="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/2 h-full p-5">
        <div className="flex justify-between">
        <h1 className="text-3xl font-semibold">Latest Experience</h1>
        <p className="flex items-center gap-1 text-blue-400 cursor-pointer hover:text-blue-600">Browse all<FaArrowRightLong/></p>
        </div>
        
        <div className="mt-5 w-full h-full shadow-lg rounded-2xl bg-white p-8 pb-7">
          <div className=" flex flex-col ">
            <div className="flex flex-row">
              <div className="w-1/6 flex justify-center">
                <img src={udemy} alt="" className="w-20 h-11" />
              </div>
              <div className="w-5/6 h-full">
                <div className="flex justify-between w-full flex-row items-center">
                <p className="text-xl font-bold">Udemy</p>
                <p className="font-normal text-sm text-gray-500">
                  March 2023 - Present
                </p>
                </div>
                
                <p className="font-semibold text-gray-500">Course Instructor</p>
                <p className="font-normal text-sm text-gray-500 w-5/6">
                  Part-time course instructor at Udemy, where I have published
                  numerous courses on popular topics.
                </p>
               
                <hr className="mt-5 mb-5" />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/6 flex justify-center">
                <img
                  src={techplement}
                  alt=""
                  className="w-20 h-16 rounded-xl"
                />
              </div>
              <div className="w-5/6 h-full">
                <div className="flex justify-between w-full flex-row items-center">
                <p className="text-xl font-bold">Techplement</p>
                <p className="font-normal text-sm text-gray-500">
                  Jan 2024 - Present
                </p>
                </div>
               
                <p className="font-semibold text-gray-500">
                  Full Stack Developer
                </p>
                <p className="font-normal text-sm text-gray-500 w-5/6">
                  I am currently in the process of developing a job management
                  portal using the MERN Stack.
                </p>
                
                <hr className="mt-5 mb-5" />
              </div>
            </div>

            <div className="flex flex-row">
              <div className="w-1/6 flex justify-center">
                <img
                  src={bharat_intern}
                  alt=""
                  className="w-20 h-20 rounded-xl"
                />
              </div>
              <div className="w-5/6 h-full">
              <div className="flex justify-between w-full flex-row items-center">
             
                <p className="text-xl font-bold">Bharat Intern</p>
                <p className="font-normal text-sm text-gray-500">
                  Jan 2024 - Present
                </p>
                
              
                </div>
                <p className="font-semibold text-gray-500">
                  Full Stack Developer Intern
                </p>
                <p className="font-normal text-sm text-gray-500 w-5/6">
                  I am presently engaged in developing a full-stack blog
                  application and a money tracker web application using the MERN
                  Stack.
                </p>
               
                <hr className="mt-5 mb-5" />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/6 flex justify-center">
                <img src={octanet} alt="" className="w-20 h-20" />
              </div>
              <div className="w-5/6 h-full">
              <div className="flex justify-between w-full flex-row items-center">
                <p className="text-xl font-bold">Octanet</p>
                <p className="font-normal text-sm text-gray-500">
                  Dec 2023 - Feb 2024
                </p>
                </div>
                <p className="font-semibold text-gray-500">
                  Web Development Intern
                </p>
                <p className="font-normal text-sm text-gray-500 w-5/6">
                  I've developed a visually appealing to-do list application and
                  a landing page using React and Tailwind CSS.
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutandExperience;
