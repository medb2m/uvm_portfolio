import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const AboutMe = () => {
  return (
    <section className='max-w-4xl mx-auto my-8 p-8 rounded-lg bg-white shadow-lg' id='aboutme'>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className='flex flex-col items-center text-center'
      >
        <img
          src='/assets/me.png'
          alt='Mohamed Ben Mohamed'
          className='w-39 h-60 rounded-full mb-4'
        />
        <h2 className='text-4xl font-bold mb-4 text-gray-800 hover:text-[#00FF00]'>Mohamed Ben Mohamed</h2>
        <p className='text-xl text-gray-700 mb-4'>
        Hello! I am Mohamed, a dedicated software developer with a passion for crafting efficient solutions. Currently enrolled in a software engineering program, I am actively seeking opportunities to leverage my skills and contribute meaningfully to projects.
        </p>
        <div className='flex space-x-4'>
          <a href='https://github.com/medb2m' target='_blank' rel='noopener noreferrer'>
            <FaGithub size={30} className='text-gray-700 hover:text-black' />
          </a>
          <a href='https://linkedin.com/in/medb2mm' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin size={30} className='text-gray-700 hover:text-blue-600' />
          </a>
          <a href='https://twitter.com/medb2mm' target='_blank' rel='noopener noreferrer'>
            <FaTwitter size={30} className='text-gray-700 hover:text-blue-400' />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
