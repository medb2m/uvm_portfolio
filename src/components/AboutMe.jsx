import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
const AboutMe = () => {
  return (
    <div className='m-8'>
      <section className='max-w-4xl mx-auto my-8 p-8 rounded-lg bg-white shadow-lg card' id='aboutme'>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className='card flex flex-col items-center text-center'
      >
        <img
          src='/assets/me.png'
          alt='Mohamed Ben Mohamed'
          className='w-39 h-60 rounded-full mb-4'
        />
        <h2 className='text-4xl mb-2'>Mohamed Ben Mohamed</h2>
        <h3 className='text-2xl mb-4'> $ Sotware Enginner</h3>
        <p className='text-xl mb-4'>
        Hello World! I am Mohamed, a versatile developer and digital artisan, fluent in the language of binary. From the heart of Tunisia, I channel the innovative spirit of Silicon Valley to craft cutting-edge websites and software solutions. As a second-year software engineering student at Esprit, I thrive in transforming complex challenges into elegant, efficient solutions. Freelancing has honed my ability to deliver impactful results, and I am always open to collaborating on groundbreaking projects that push the boundaries of technology.
        </p>
        <div className='flex space-x-4'>
          <a href='https://github.com/medb2m' target='_blank' rel='noopener noreferrer'>
            <FaGithub size={40} className='text-gray-700 hover:text-black' />
          </a>
          <a href='https://linkedin.com/in/medb2mm' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin size={40} className='text-gray-700 hover:text-blue-600' />
          </a>
          <a href='https://twitter.com/medb2mm' target='_blank' rel='noopener noreferrer'>
            <FaTwitter size={40} className='text-gray-700 hover:text-blue-400' />
          </a>
          <a href='https://www.youtube.com/channel/UCKi1RZHUnF8sQxQKP9z9_wg' target='_blank' rel='noopener noreferrer'>
            <FaYoutube size={40} className='text-gray-700 hover:text-red-600' />
          </a>
        </div>
      </motion.div>
    </section>
    </div>
  );
};

export default AboutMe;
