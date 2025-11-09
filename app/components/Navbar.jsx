import React, { useEffect, useRef, useState } from 'react'
import { FaArrowTrendUp} from "react-icons/fa6";
import { MdCancel, MdMenu } from "react-icons/md";
const Navbar = () => {
  const [isScroll,setIsScroll]=useState();
  const menuRef=useRef();
  const showMenu=()=>{
    menuRef.current.style.transform='translateX(-16rem)'
  }
  const hideMenu=()=>{
    menuRef.current.style.transform='translateX(16rem)'
  }
  useEffect(()=>{
window.addEventListener('scroll',()=>{
  if(scrollY>50){
    setIsScroll(true)
  }else{
    setIsScroll(false)
  }
})
  },[])
  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
    </div>
    <nav className={`flex justify-between p-3 px-5 items-center w-full lg:px-[8%] fixed top-0 z-50${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm ":""}`}>
      <p className='text-3xl font-bold'>Sandesh</p>
    <ul className={`hidden md:flex gap-5 p-3 lg:gap-8 rounded-full pz-12 py-3 ${isScroll?"":"bg-white shadow-sm bg-opacity-50"} dark:bg-[#21282c] dark:text-white`}>
      <li><a href="#top">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#work">Work</a></li>
      <li><a href="#contact">Contact me</a></li>
    </ul>
    <div className='flex gap-9 items-center '>

    <a href='#contact' className='hidden lg:flex  gap-2 items-center p-2 border-1 rounded-full cursor-pointer'>
       contact 
       <FaArrowTrendUp/> 
    </a>
    </div>
    <MdMenu className='block md:hidden cursor-pointer text-2xl' onClick={showMenu}/>

    {/* mobile menu  */}
    <ul className='flex flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-55 h-screen bg-rose-50 transition duration-700  dark:text-black dark:bg-white/93' ref={menuRef}>
       <MdCancel className='absolute right-6 top-6 text-2xl cursor-pointer' onClick={hideMenu}/>
      <li ><a href="#top" onClick={hideMenu} className='hover:text-blue-500 px-5 rounded-2xl'>Home</a></li>
      <li ><a href="#about" onClick={hideMenu} className='hover:text-blue-500 px-5 rounded-2xl'>About</a></li>
      <li ><a href="#services" onClick={hideMenu} className='hover:text-blue-500 px-5 rounded-2xl'>Services</a></li>
      <li ><a href="#work" onClick={hideMenu} className='hover:text-blue-500 px-5 rounded-2xl'>Work</a></li>
      <li ><a href="#contact" onClick={hideMenu} className='hover:text-blue-500 px-5 rounded-2xl'>Contact me</a></li>
    </ul>
      

    </nav>
    </>
  )
}

export default Navbar
