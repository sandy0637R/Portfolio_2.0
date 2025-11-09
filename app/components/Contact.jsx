import React, { useState } from 'react' 
import { FaArrowRight } from 'react-icons/fa6'
import { motion } from "motion/react"

const Contact = () => {
  const [result, setResult] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    setResult("sending...");
    const formData = new FormData(e.target);
    formData.append("access_key", "9d252dde-8dc3-48de-8103-279bb6df4837");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await res.json();

    if (data.success) {
      setResult("Form submitted!");
      e.target.reset(); 
    } else {
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className='w-full px-[12%] py-10 scroll-mt-20 dark:bg-[#21282c] dark:text-white'
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-2 text-lg '
      >
        connect with me
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-5xl '
      >
        Get in touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 '
      >
        I'm open to freelance work, collaborations, internships, or any exciting tech opportunities.  
        If you have a project in mind, a question, or just want to say hello — feel free to reach out.
      </motion.p>

      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        onSubmit={onSubmit}
      >
        <div className='max-w-2xl mx-auto'>
          <div className='flex flex-col lg:grid grid-cols-[auto_auto] gap-6 mt-10 mb-8'>
            <motion.input
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              type="text"
              placeholder='enter your name'
              required
              className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-[#21282c] dark:text-white'
              name='name'
            />
            <motion.input
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              type="email"
              placeholder='enter your email'
              required
              className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-[#21282c] dark:text-white'
              name='email'
            />
          </div>

          <motion.textarea
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            rows="6"
            placeholder='Enter your message here'
            required
            className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-[#21282c] dark:text-white'
            name='message'
          ></motion.textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            type='submit'
            className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-white dark:text-black dark:hover:bg-lime-200 font-bold'
          >
            Submit now
            <FaArrowRight className='w-4' />
          </motion.button>
        </div>
        <p className='mt-4 text-center text-green-700'>{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
