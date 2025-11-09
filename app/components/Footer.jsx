import React from 'react'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center '>
                  <p className='text-3xl font-bold'>Sandesh</p>
            <div className='w-max flex items-center gap-2 mx-auto'>
                <MdEmail className='w-6'/> sandeshraut842@gmail.com

            </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>&copy; 2025 Sandesh Raut . All rights reserved</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/sandy0637R">Github</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/sandesh-raut-3889b02ba/">Linkedin</a></li>
            </ul>
        </div>
      
    </div>
  )
}

export default Footer
