import Image from "next/image";
import React from "react";
import { FaArrowRight, FaDownload, FaHand } from "react-icons/fa6";
import { assets } from "../assets";
import { motion } from "motion/react";
const Header = () => {
  return (
    <div className="flex flex-col items-center text-center my-15 ">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stifness: 100 }}
      >
        <Image
          src={assets.img}
          className=" rounded-full w-38 px-3 my-5 bg-white/80 "
          alt="image"
        />
      </motion.div>
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex  items-center gap-3 text-xl md:text-2xl mb-3"
      >
        Hello, I am Sandesh Raut <FaHand className="text-amber-300 rotate-12" />
      </motion.h4>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className=" text-3xl sm:text-6xl lg:text-[45px] w-[50%] my-3"
      >
        I am a MERN stack developer from Mumbai
      </motion.h1>
      <div></div>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text w-[50%] my-3 capitalize"
      >
        Motivated and detail-oriented Software Developer with hands on
        experience in building full stack web applications using the{" "}
        <b>MERN stack</b>. Has built several projects showcasing strong
        problem-solving skills and a solid understanding of{" "}
        <b>Web development. </b>{" "}
      </motion.p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="gap-2 px-10 py-3 border border-white rounded-full bg-black text-white flex items-center dark:bg-white dark:text-[#21282c] hover:scale-[1.05] duration-500"
        >
          contact me <FaArrowRight />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="/Sandesh_Raut_Resume.pdf"
          download
          className="flex items-center gap-2 px-10 py-3 border rounded-full border-gray-500 hover:scale-[1.05] duration-500"
        >
          My Resume <FaDownload />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
