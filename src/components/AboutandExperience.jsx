import React from "react";
import { FaAngleRight } from "react-icons/fa6";
import webzene from "../assets/logo copy.png"
import insta from "../assets/insta.webp";
import linkedin from "../assets/linkedin.webp";
import udemy from "../assets/Udemy-Logo.png";
import octanet from "../assets/octanet.jpeg";
import bharat_intern from "../assets/bharat_intern.jpeg";
import techplement from "../assets/techplement.jpeg";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import logoRoomee from "../assets/logo_name.png";
import logoCodetex from "../assets/logo_codetex.png";
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
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa6";

const AboutandExperience = () => {

  const navigate = useNavigate()
  return (
    <div className="mt-20 w-full flex flex-col">
      <div className="flex flex-row">
        <div className="w-1/2 h-full p-5 justify-center">
          <div className="flex justify-between">
            <h1 className="text-3xl font-semibold">About Me</h1>
            <Link to={'/about-me'} target="_blank" className="flex items-center gap-1 text-blue-400 cursor-pointer hover:text-blue-600">
              View More
              <FaArrowRightLong />
            </Link>
          </div>
          <div className="mt-5 w-full h-full shadow-lg rounded-2xl bg-white p-16 pb-7">
            <p className="text-gray-600 leading-[25px] text-pretty text-justify w-full">
              Experienced Full Stack Developer with over 1.8 years of hands-on
              internship experience in MERN Stack, proficient in Node.js, and
              skilled in leveraging Java for creative problem-solving.
              Possessing multiple certifications in diverse IT domains, I
              showcase expertise in web development and software engineering.
              Recognized as a collaborative team player, I am known for
              delivering high-quality code, demonstrating strong problem-solving
              acumen, and effective communication skills. Eagerly committed to
              staying ahead of the curve by embracing cutting-edge technologies.
            </p>
            <button onClick={()=>navigate('/about-me')} className="mt-5 flex items-center gap-1 p-3 border rounded-xl font-semibold text-blue-500 hover:translate-y-1 duration-300 ">
              Read More
              <FaAngleRight />
            </button>
          </div>
          <div className="mt-5 w-full h-full shadow-lg rounded-2xl bg-white p-10 pb-7">
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
        <div className="w-1/2 h-full p-5">
          <div className="flex justify-between">
            <h1 className="text-3xl font-semibold">Latest Experience</h1>
            <Link className="flex items-center gap-1 text-blue-400 cursor-pointer hover:text-blue-600">
              Browse all
              <FaArrowRightLong />
            </Link>
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

                  <p className="font-semibold text-gray-500">
                    Course Instructor
                  </p>
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
                    Full Stack Developer Intern
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
                    application and a money tracker web application using the
                    MERN Stack.
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
                    I've developed a visually appealing to-do list application
                    and a landing page using React and Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 w-full h-full p-5">
        <h1 className="text-3xl font-semibold">Latest Projects</h1>
        <div className="flex justify-between">
          <p className="mt-2 text-lg font-medium text-gray-500">
            Take a look at my standout projects crafted with the MERN Stack.
          </p>
          <Link className="flex items-center gap-1 text-blue-400 cursor-pointer hover:text-blue-600">
            Browse all
            <FaArrowRightLong />
          </Link>
        </div>
        <div className="flex justify-start gap-10 mt-5">
          <div className="w-1/2 border h-full bg-white rounded-2xl p-8 flex flex-col gap-14 justify-between">
            <div className="flex gap-5 items-center">
              <div className="w-1/5">
                <img src={logo} alt="" />
              </div>
              <div className="flex flex-col gap-2 w-4/5">
                <h1 className="text-xl font-semibold">
                  Social media Web Application
                </h1>
                <p className="font-medium text-gray-600">
                  Sharebuzz is a social media web application where user can
                  send friend request to each other, share post, and like each
                  other posts.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="w-1/5">
                <img src={webzene} alt="" />
              </div>
              <div className="flex flex-col gap-2 w-4/5">
                <h1 className="text-xl font-semibold">
                  Blog Web Application
                </h1>
                <p className="font-medium text-gray-600">
                  Webzene is a blog web application where user can
                  share blogs and view, comment on others posts. User can change there username and email too.
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/2 border h-96 bg-white rounded-2xl p-8 flex flex-col gap-20">
            <div className="flex gap-5 items-center">
              <div className="w-1/5">
                <img src={logoRoomee} alt="" />
              </div>
              <div className="flex flex-col gap-2 w-4/5">
                <h1 className="text-xl font-semibold">
                  Furniture Renting Web Application
                </h1>
                <p className="font-medium text-gray-600">
                  Roomee is a web application focused on furniture renting,
                  showcasing exclusively my front-end development skills. It
                  lacks any backend functionality.
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="w-1/5">
                <img src={logoCodetex} alt="" />
              </div>
              <div className="flex flex-col gap-2 w-4/5">
                <h1 className="text-xl font-semibold">
                  Software development web application
                </h1>
                <p className="font-medium text-gray-600">
                  Codetex is a web application focused on software development
                  startup, showcasing exclusively my front-end development
                  skills. It lacks any backend functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* //!Skill Section Starts */}
      <div className="mt-20 w-full h-full p-5">
        <h1 className="text-3xl font-semibold">My Skills</h1>
        <p className="mt-2 text-lg font-medium text-gray-500">
          Take a comprehensive look at the full range of my skills.
        </p>
        <div>
          <div className=" flex flex-wrap gap-4 mt-3 w-3/4">
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#5ed4f3] hover:translate-y-1 duration-300 font-[500] rounded-md ">
              <FaReact />
              React JS
            </button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-yellow-300 hover:translate-y-1 duration-300 font-[500] rounded-md">
              <IoLogoJavascript />
              JavaScript
            </button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#0B6BAC] hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white">
              <DiJqueryLogo />
              jQuery
            </button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#68A063] hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white">
              <SiExpress />
              Express JS
            </button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#4db33d] hover:translate-y-1 duration-300 font-[500] rounded-md">
              <SiMongodb />
              MongoDB
            </button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#68A063] hover:translate-y-1 duration-300 font-[500] rounded-md">
              <FaNodeJs />
              Node JS
            </button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#36b7f0] hover:translate-y-1 duration-300 font-[500] rounded-md">
              <SiTailwindcss />
              Tailwind CSS
            </button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-black hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white">
              <FaGithub />
              Git/Github
            </button>
            {/* //!icons */}
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#264de4] hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white">
              <FaCss3 />
              CSS
            </button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#f89820] hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white">
              <FaJava />
              Java
            </button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#e34c26] hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white">
              <FaHtml5 />
              HTML
            </button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#553c7b] hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white">
              <FaBootstrap />
              Bootstrap
            </button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-black hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white">
              <FaDatabase />
              Data structure and algorithm
            </button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-black hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white">
              <MdDataObject />
              Object Oriented Programming
            </button>
            <button className="shadow-sm border p-2 flex items-center gap-1 hover:bg-[#f5820D] hover:translate-y-1 duration-300 font-[500] rounded-md hover:text-white">
              <IoLogoFirebase />
              Firebase
            </button>
          </div>
        </div>
      </div>
      {/* //!Skill Section Ends */}

      {/* //!Contact section Start */}
      <div className="flex flex-row mt-20">
        <div className="w-1/2 h-full p-5 justify-center">
          <div className="flex justify-between">
            <h1 className="text-3xl font-semibold">Contact Me</h1>
          </div>
          <div className="mt-5 w-full h-full shadow-lg rounded-2xl bg-white p-10 pb-7">
            <form className="flex flex-col gap-5">
              <div className="flex items-center">
                <label htmlFor="" className="w-1/6 font-bold ">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Please Enter Your Name Here"
                  id="name"
                  name="name"
                  className="p-5 outline-none border rounded-2xl w-5/6 font-semibold text-gray-600"
                />
              </div>
              <div className="flex items-center">
                <label htmlFor="" className="w-1/6 font-bold ">
                  Mobile No.
                </label>
                <input
                  type="number"
                  required
                  placeholder="Please Enter Your Mobile Number Here"
                  id="name"
                  name="name"
                  className="p-5 outline-none border rounded-2xl w-5/6 font-semibold text-gray-600"
                />
              </div>
              <div className="flex items-center">
                <label htmlFor="email" className="w-1/6 font-bold ">
                  Email Id
                </label>
                <input
                  type="email"
                  required
                  placeholder="Please Enter Your Email Here"
                  id="email"
                  name="email"
                  className="p-5 outline-none border rounded-2xl w-5/6 font-semibold text-gray-600"
                />
              </div>
              <div className="flex items-center">
                <label htmlFor="purpose" className="w-1/6 font-bold ">
                  Message
                </label>

                <textarea
                  required
                  name="purpose"
                  id="purpose"
                  cols="30"
                  rows="5"
                  className="p-5 outline-none border rounded-2xl w-5/6 font-semibold text-gray-600"
                  placeholder="Please Enter Your Message Here"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button className="mt-5 flex items-center gap-1 p-3 border rounded-xl font-semibold text-blue-500 hover:translate-y-1 duration-300 ">
                  Submit
                  <FaAngleRight />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="w-1/2 h-full p-5">
          <div className="flex justify-between">
            <h1 className="text-3xl font-semibold">Contact Details</h1>
          </div>
          <div className="mt-5 w-full h-72 shadow-none rounded-2xl bg-white p-0 pb-7">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21409.55296664267!2d77.50436460396814!3d28.474503399700538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea7b8e76ec31%3A0x25d218e7796434f4!2sAlpha%201%20Market!5e0!3m2!1sen!2sin!4v1706821764215!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full  rounded-2xl shadow-xl h-72"
            ></iframe>
          </div>
          <div className="mt-2 w-full h-72 shadow-lg rounded-2xl bg-white p-8 pb-7 flex flex-col gap-5 justify-center">
            <div className="flex items-center gap-5  font-semibold text-gray-600 hover:text-red-500 ">
              <MdEmail size={30} />
              <h1>shuklapramendra99@gmail.com</h1>
            </div>
            <div className="flex items-center gap-5  font-semibold text-gray-600 hover:text-green-600 ">
              <IoCall size={30} />
              <h1>+91 7694889909 / +91 8319871531</h1>
            </div>
            <div className="flex items-center gap-5  font-semibold text-gray-600 hover:text-blue-600 cursor-pointer">
              <FaLinkedin size={30} />
              <Link
                to={"https://www.linkedin.com/in/pramendra-shukla-11812a221/"}
                target="_blank"
              >
                Pramendra Shukla
              </Link>
            </div>

            <div className="flex items-center gap-5 font-semibold text-gray-600 hover:text-black">
              <FaAddressBook size={30} />
              <h1>C Block Alpha 1 Greater Noida, Uttar Pradesh, India</h1>
            </div>
          </div>
        </div>
      </div>
      {/* //!Contact section Start */}
    </div>
  );
};


export default AboutandExperience;
