"use client";

import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {

  const containerRef = useRef()

  const {scrollYProgress} = useScroll({container:containerRef})

  const skillRef = useRef()
  // const isSkillRefInView = useInView(skillRef, {once:true})
  const isSkillRefInView = useInView(skillRef, {margin:"-100px"});


  const experienceRef = useRef()
  const isExperienceRefInView = useInView(experienceRef, {margin:"-100px"});
  
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY desc */}
            <p className="text-lg">
            I have always been interested in problem-solving skills, which is why I was drawn to the field of solid-state physics and obtained my master's degree in this field. During this period, my problem-solving skills improved. Research work and publications expanded my communication skills by 80% or more, and my teamwork spirit was strengthened through my activities in this field. Due to my interest in helping others, I collaborated voluntarily as a member in relief and humanitarian work for over 5 years. Additionally, through teaching at the university for more than 6 years, I gained coaching and leadership experience. Over the past 3 years, due to my experiences and interest in teamwork and problem-solving, I developed an interest in front-end programming and acquired the necessary skills through extensive practice.

            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              
               Advanced proficiency in Next.js and React,
               Intermediate proficiency in TypeScript,
               Advanced in JavaScript, HTML, and CSS.
               Proficient in Node.js.
               User Experience (UX) and User Interface (UI) design.

            </span>
            {/* BIOGRAPHY SIGN  */}
            <div className="self-end">
              {/* <Image src="/signature.png" alt="" width={94} height={94} /> */}
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            {/* <motion.svg
              initial={{opacity:0.2, y:0}}
              animate={{opacity:1, y:"10px"}}
              transition={{repeat:Infinity, duration: 3, ease:"easeInOut"}}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.5"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M15 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg> */}
          </div>
          {/* SKILLS CONTAINER */}
          <div className="">
            <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
              {/* SKILL TITLE */}
              <motion.h1 initial={{x:"-300px"}} animate={isSkillRefInView ? {x:"0"} : {}} transition={{delay:0.2}} className="font-bold text-2xl">SKILLS</motion.h1>
              {/* SKILL LIST */}
              <motion.div initial={{x:"-300px"}} animate={isSkillRefInView ? {x:"0"} : {}}  className="flex gap-4 flex-wrap">
                <div className="rounded p-2 text-sm cursor-pointer bg-[#f7cbca] hover:bg-white hover:text-[#fe4d84]">
                  JavaScript
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-[#f7cbca] hover:bg-white hover:text-[#fe4d84]">
                  TypeScript
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-[#f7cbca] hover:bg-white hover:text-[#fe4d84]">
                  Next.js
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-[#f7cbca] hover:bg-white hover:text-[#fe4d84]">
                  React.js
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-[#f7cbca] hover:bg-white hover:text-[#fe4d84]">
                  SCSS
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-[#f7cbca] hover:bg-white hover:text-[#fe4d84]">
                  Tailwind CSS
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-[#f7cbca] hover:bg-white hover:text-[#fe4d84]">
                  MongoDB
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-[#f7cbca] hover:bg-white hover:text-[#fe4d84]">
                  Node.js
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-[#f7cbca] hover:bg-white hover:text-[#fe4d84]">
                  Redux
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-[#f7cbca] hover:bg-white hover:text-[#fe4d84]">
                  Webpack
                </div>
              </motion.div>
              </div>
              {/* SKILL SCROLL SVG */}
            </div>
            {/* EXPERIENCE CONTAINER */}
            <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
              {/* EXPERIENCE TITLE */}
              <motion.h1 initial={{x:"-300px"}} animate={isExperienceRefInView ? {x:"0"} : {}} transition={{delay: 0.2}} className="font-bold text-2xl">EXPERIENCE</motion.h1>
              {/* EXPERIENCE LIST */}
               <motion.div initial={{x:"-300px"}} animate={isExperienceRefInView ? {x:"0"} : {}} className="">
              {/* EXPERIENCE LIST ITEM*/}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className=" p-3 font-semibold rounded-b-lg rounded-s-lg bg-white w-fit">
                    Frontend Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                  Next-Ecommerce-Application.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-[#fe4d84] text-sm font-semibold">
                    2024 - Present
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative flex justify-center">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
                </div>
              {/* EXPERIENCE LIST ITEM*/}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  
                </div>
                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative flex justify-center">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                {/* JOB TITLE */}
                <div className=" p-3 font-semibold rounded-b-lg rounded-s-lg bg-white w-fit">
                    Frontend Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                  React-RealEstate-Application.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-[#fe4d84] text-sm font-semibold">
                    2024 - Present
                  </div></div>
                </div>
              {/* EXPERIENCE LIST ITEM*/}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className=" p-3 font-semibold rounded-b-lg rounded-s-lg bg-white w-fit">
                    Frontend Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                  React-Chat-Application.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-[#fe4d84] text-sm font-semibold">
                    2023 - Present
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative flex justify-center">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
                </div>
                
              </motion.div>
            </div>
          </div>

        {/* SVG CONTAINER */}
        <motion.div initial={{x:"+50px"}} animate={isExperienceRefInView ? {x:"0"} : {}} transition={{delay: 0.2}} className="hidden lg:block w-1/3 sticky top-0 mt-20 z-30 xl:1/2">
          <Image src="/about.png
          "  alt="" width={800} height={800} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
