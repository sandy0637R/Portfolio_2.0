import React from "react";
import { myWorks } from "../assets";
import { MdSend } from "react-icons/md";
import { motion } from "motion/react";
const Mywork = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className=" w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg "
      >
        my Portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl "
      >
        {" "}
        My latest work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 "
      >
        welcome to my web development Portfolio explore a collection of projects
        showcasing my expertise in Full-stack development
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="flex flex-col lg:grid grid-cols-[auto_auto_auto] my-10 gap-5 "
      >
       {myWorks.map((project, index) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    key={index}
    className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group border-1 m-4 border-slate-500"
    style={{ backgroundImage: `url(${project.bgImage})` }}
  >
    <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 text-sm dark:bg-white/80 dark:text-black">
      <div>
        <h2 className="font-bold">{project.title}</h2>
        <p>{project.description}</p>
      </div>

      {/* 👇 Updated part: handles both single and multiple links */}
      {project.links ? (
        <div className="flex flex-col gap-1">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={project.links.frontend}
            className="group-hover:bg-lime-300 p-1 border rounded  text-xs flex items-center gap-1"
          >
            Frontend <MdSend className="text-lg -rotate-45" />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={project.links.backend}
            className="group-hover:bg-lime-300 border rounded p-1 text-xs flex items-center gap-1"
          >
            Backend <MdSend className="text-lg -rotate-45" />
          </a>
        </div>
      ) : (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={project.link}
        >
          <MdSend className="p-1 rounded-full -rotate-45 border-1 text-3xl group-hover:bg-lime-300 duration-500" />
        </a>
      )}
    </div>
  </motion.div>
))}

      </motion.div>
      <motion.a
        
         initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{delay:1.1,duration:0.5}}
        href="https://github.com/sandy0637R"
        className="flex justify-center"
      >
        <button className="border-1 p-2 rounded-2xl cursor-pointer hover:scale-[1.05] duration-500">
          show more ...
        </button>
      </motion.a>
    </motion.div>
  );
};

export default Mywork;
