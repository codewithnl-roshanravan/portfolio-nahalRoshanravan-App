"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const HomePage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/avatar1.png" alt="" fill className="object-contain" />
        </div>
        {/* text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Welcome to my digital world, Where innovation and creativity converge. With a keen eye for aesthetics and a mastery of code, my portfolio showcases  a diverse collection of projects that reflect my commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4 items-center justify-center">
            <button className="p-4 rounded-lg ring-2 ring-[#f5bab9] bg-[#f7cbca] text-gray-800 shadow-md hover:bg-[#bdd7db]">
              <Link href="/portfolio">View My Work</Link>
            </button>
            <button className="p-4 rounded-lg ring-2 ring-[#f5bab9] bg-[#bdd7db] text-gray-800 shadow-md hover:bg-[#f7cbca]">
            <Link href="/contact">Contact Me</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
