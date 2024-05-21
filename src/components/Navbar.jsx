import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex items-center justify-between flex-wrap p-4 bg-transparent'>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
        className='flex items-center'
      >
        <h1 className='text-[#A020F0] cursor-pointer hover:text-white text-xl font-bold ml-6'>
          Ulta-Violet Matrix
        </h1>
      </motion.div>
      <div className='block lg:hidden'>
        <button
          onClick={handleToggle}
          className='text-[#A020F0] focus:outline-none'
        >
          {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
        className={`${
          isOpen ? 'block' : 'hidden'
        } w-full lg:flex lg:w-auto lg:flex-row flex-col items-center text-2xl justify-center flex-grow`}
      >
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-gray-300 hover:text-white mx-4 cursor-pointer'
        >
          <Link to='aboutme' smooth={true} duration={500} offset={-70}>
            About Me
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-gray-300 hover:text-white mx-4 cursor-pointer'
        >
          <Link to='skills' smooth={true} duration={500} offset={-70}>
            Skills
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-gray-300 hover:text-white mx-4 cursor-pointer'
        >
          <Link to='projects' smooth={true} duration={500} offset={-70}>
            Projects
          </Link>
        </motion.div>
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-gray-300 hover:text-white mx-4 cursor-pointer'
        >
          <Link to='contact' smooth={true} duration={500} offset={-70}>
            Contact
          </Link>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0 }}
        className='hidden lg:flex items-center'
      >
        <Link to='contact' smooth={true} duration={500} offset={-70} >
          <button className='text-[#A020F0] border-[#A020F0] border-2 bg-transparent h-10 px-4 rounded-md hover:text-[#00FF00] hover:border-[#00FF00] font-semibold'>
            Hire Me
          </button>
        </Link>
      </motion.div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0 }}
          className='lg:hidden flex items-center justify-center w-full mt-4'
        >
          <Link to='contact' smooth={true} duration={500} offset={-70} >
          <button className='text-[#A020F0] border-[#A020F0] border-2 bg-transparent h-10 px-4 rounded-md hover:text-[#00FF00] hover:border-[#00FF00] font-semibold'>
            Hire Me
          </button>
        </Link>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
