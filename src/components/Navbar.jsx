import {motion} from 'framer-motion'
import { Link } from 'react-scroll' 

const Navbar = () => {
  return (
    <div className='flex items-center flex-grow p-4 mt-3 bg-transparent'>
      <motion.div
        initial={{opacity : 0, x : -100}}
        animate={{opacity : 1, x : 0}}
        transition={{duration : 0.8, delay : 0}}
        className='flex items-center'
      >
        <h1 className='text-[#A020F0] cursor-pointer hover:text-white text-xl font-bold ml-6'>Ulta-Violet Matrix</h1>
      </motion.div>
      <motion.div
        initial={{opacity : 0, y : -50}}
        animate={{opacity : 1, y : 0}}
        transition={{duration : 0.8, delay : 0}}
        className='flex flex-col md:flex-row lg:flex-row items-center text-2xl justify-center flex-grow'
      >
        <motion.div
            initial={{y : 20}}
            animate={{y : 0}}
            transition={{duration : 0.6, delay : 0.2}}
            className='text-gray-300 hover:text-white mx-4 cursor-pointer'
        >
            <Link
                to='features'
                smooth={true}
                duration={500}
                offset={-70}
            >
            About me
            </Link>
        </motion.div>
        <motion.div
            initial={{y : 20}}
            animate={{y : 0}}
            transition={{duration : 0.6, delay : 0.2}}
            className='text-gray-300 hover:text-white mx-4 cursor-pointer'
        >
            <Link
                to='Testimonials'
                smooth={true}
                duration={500}
                offset={-70}
            >
            Testimonials
            </Link>
        </motion.div>
        <motion.div
            initial={{y : 20}}
            animate={{y : 0}}
            transition={{duration : 0.6, delay : 0.2}}
            className='text-gray-300 hover:text-white mx-4 cursor-pointer'
        >
            <Link
                to='pricing'
                smooth={true}
                duration={500}
                offset={-70}
            >
            Pricing
            </Link>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{opacity : 0, x : 100}}
        animate={{opacity : 1, x : 0}}
        transition={{duration : 0.8, delay : 0}}
        className='flex items-center'
      >
        <button className='text-[#A020F0] mr-6 border-[#A020F0] border-2 bg-transparent h-10 px-4 rounded-md hover:text-[#00FF00] hover:border-[#00FF00] font-semibold'>
            Hire Me
        </button>
      </motion.div>
    </div>
  )
}

export default Navbar
