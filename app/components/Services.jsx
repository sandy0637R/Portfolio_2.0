import React from 'react'
import { serviceData } from '../assets'
import Image from 'next/image'
import { FaArrowRight } from 'react-icons/fa6'
import { motion } from 'motion/react'
const Services = () => {
  return (
      <motion.div
             initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
       id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
             <motion.h4
                    initial={{y:-20,opacity:0}}
    whileInView={{y:0,opacity:1}}
    transition={{duration:0.3,delay:0.3}}
              className='text-center mb-2 text-lg'>what i offer</motion.h4>
      <motion.h2 
           initial={{y:-20,opacity:0}}
    whileInView={{y:0,opacity:1}}
    transition={{duration:0.5,delay:0.5}}
      
      className='text-center text-5xl'>My Services </motion.h2>
      <motion.p
           initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{delay:0.7,duration:0.5}}
       className='text-center max-w-2xl mx-auto mt-5 mb-12'>I Offer Full-Stack web development services using the MERN stack , delivering
       responsive and user-friendly web applications , From building dynamic frontends with React and Nextjs to developing secure backends with nodejs and express .In addition , i Build mobile applications with Kotlin ,especially those that integrate APIs , I can deploy your project to Netlify , vercel , Render, and help set up custom domains with ease </motion.p>
      <motion.div
           initial={{pacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:0.9,delay:0.6}}
       className=' flex flex-col md:grid grid-cols-[auto_auto_auto]  gap-6 my-10  '>
        {
            serviceData.map(({icon,description,title,link},index)=>(

                <motion.div
                whileHover={{scale:1.05}}
                 key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-2xl cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 dark:hover:bg-[#3a4f5d]'>
                    <Image src={icon} alt='service' className='w-12 p-2 dark:bg-white dark:rounded-full'/>
                    <h3 className='text-lg my-4 text-gray-700 dark:text-white/80'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5 dark:text-white'>{description}</p>
                    <a href={link} className='flex items-center gap-2 text-sm mt-5 text-gray-700 font-bold dark:text-white/60'>Read more <FaArrowRight/></a>
                </motion.div>

            ))
        }
      </motion.div>
      </motion.div>
  )
}

export default Services
