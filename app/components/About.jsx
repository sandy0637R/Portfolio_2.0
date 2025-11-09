import React from "react";
import { assets, infoList, toolsData } from "../assets";
import Image from "next/image";
import { motion } from "motion/react";
const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className=" w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg"
      >
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none"
        >
          <Image src={assets.img} className="w-full rounded-4xl mb-20 bg-white/65" alt="deepak"/>
        </motion.div>

        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-10 max-w-2xl capitalize "
          >
            I am a student of computer science with a passion for web development , I'm currently pursuing my Bachelors Degree in Computer Science from Mumbai University Affiliated college where i am developing a solid foundation in computer science principles and practice. This is my personal portfolio web to showcase my works , projects and Expertise, Feel free to explore my portfolio to see my projects in action . I'm always eager to connect with fellow students , professionals and potential collaborations . <br />
            Let's get in touch
          </motion.p>
          {/* <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"> */}
          <ul className="flex flex-col  sm:grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 max-w-2xl">
            {infoList.map(({ icon, title, description }, index) => (
              <motion.li
                whileInView={{scale:1.05}}
                key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-2xl dark:bg-white/95 "
              >
                <Image src={icon} alt={title} className="w-7 mt-3 " />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm w-full">{description}</p>
              </motion.li>
            ))}
          </ul>
          <motion.h4
                 initial={{y:20,opacity:0}}
    whileInView={{y:0,opacity:1}}
    transition={{delay:1.3,duration:0.5}}
           className="my-6 text-gray-700 dark:text-white/80">Tools i use</motion.h4>
          <motion.ul
                 initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5,delay:0.6}}
           className="flex items-center gap-3 sm:gap-5 ">
            {toolsData.map((tool, index) => (
              <motion.li
              whileHover={{scale:1.05}}
                className="flex items-center justify-center w-12 sm:w14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 dark:bg-white/90"
                key={index}
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
