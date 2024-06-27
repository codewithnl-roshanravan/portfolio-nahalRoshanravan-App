"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-[#bdd7db] to-red-300",
    title: "Next-Ecommerce-Application",
    desc: "Next.js, TypeScript, Tailwind, Design and developed a high performance application with Next.js, leading to 50% reduction in server response times, Utilized TypeScript and implemented routing, Experience working with databases, Implemented a streamlined data retrieval process, enhancing database management and reducing product search time by 50%, thereby boosting overall productivity and customer satisfaction by 20%, Updated the search query of the URL.",
    img: "/work3.png",
    link: "/github.com/codewithnl-roshanravan/react-vite-project.",
  },
  {
    id: 2,
    color: "from-red-300 to-[#cbe7e3]",
    title: "React-RealEstate-Application",
    desc: "React,Node.js, Improved skills in using responsive pages and a high performance application leading to 80% increase in performance on each device, Experience working with Node.js, Added authentication, login, and logout functionality to the project and make 50% similar to other power applications, Experience working with Mongodb, thereby boosting overall productivity and customer satisfaction by 20%, Learned how to upload widgets, Improved design skills and responsive page design 80% more than later (changing styles depending on different screen sizes), Enhanced skills in using search bars and changing states, Learned how to develop a web application using filters that can change options and search again on the map.",
    img: "/work8.jpg",
    link: "/github.com/codewithnl-roshanravan/react-vite-project.",
  },
  {
    id: 3,
    color: "from-[#cbe7e3] to-[#ead6ef]",
    title: "React-Chat-Application",
    desc: "React, Firebase,  Improved Firebase Authentication to 50% increase to create users, Used Firebase Storage to upload images, Implemented Firestore database to fetch and send real-time data.",
    img: "/work7.jpg",
    link: "/github.com/codewithnl-roshanravan/chat-react-app.",
  },
  {
    id: 4,
    color: "from-[#ead6ef] to-red-300",
    title: "React Chat App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id omnis eum, rem itaque fuga voluptas quos obcaecati dolores quo quisquam quis optio asperiores hic perferendis corrupti necessitatibus, accusantium soluta laboriosam.",
    img: "/work2.png",
    link: "/github.com/codewithnl-roshanravan/chat-react-app.",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-gray-600 text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-[#b3c7ca] to-[#c6d5d8]" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-4 text-white">
                  <h1 className="text-xl font-bold md:text-2xl lg:text-4xl xl:text-6xl text-black">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="relative w-80 md:w-96 lg:w-[500px] lg:text-lg xl:w-[600px] text-gray-700">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-1 text-sm md:p-2 md:text-md lg:p-4 lg:text-lg bg-[#eba9a8] font-semibold m-2 rounded">
                      See Github
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do You Have a Project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60, 60 0 0, 1 120, 0 a 60, 60 0 0, 1 -120, 0"
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-[#eba9a8] rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
