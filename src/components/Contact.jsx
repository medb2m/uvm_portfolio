import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className='min-h-screen flex justify-center items-center p-8' id='contact'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='max-w-lg w-full bg-white shadow-lg rounded-lg p-8'
      >
        <h2 className='text-3xl font-bold mb-6 text-center text-[#A020F0]'>Contact Me</h2>
        <p className="mt-4 text-gray-600 text-center">Please feel free to reach out to me for any job opportunity or freelance work.</p>
        <form className='space-y-4'>
          <div>
            <label htmlFor='name' className='block text-gray-800 font-semibold mb-1'>Your Name</label>
            <input
              id='name'
              type='text'
              className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500'
              placeholder='Enter your name'
            />
          </div>
          <div>
            <label htmlFor='name' className='block text-gray-800 font-semibold mb-1'>Your Company</label>
            <input
              id='name'
              type='text'
              className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500'
              placeholder='Enter your company name'
            />
          </div>
          <div>
            <label htmlFor='email' className='block text-gray-800 font-semibold mb-1'>Your Email</label>
            <input
              id='email'
              type='email'
              className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500'
              placeholder='Enter your email'
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="company-type" className="block text-gray-800 font-semibold mb-1">Type of work</label>
            <div className="flex items-start space-x-4">
              <div>
                <input type="radio" id="job-offer" name="company-type" value="job-offer" />
                <label htmlFor="job-offer"> Job Offer</label>
              </div>
              <div>
                <input type="radio" id="freelance-work" name="company-type" value="freelance-work" />
                <label htmlFor="freelance-work"> Freelance Work</label>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor='message' className='block text-gray-800 font-semibold mb-1'>Message</label>
            <textarea
              id='message'
              rows='5'
              className='w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-purple-500'
              placeholder='Your message here'
            ></textarea>
          </div>
          <button
            type='submit'
            className='w-full bg-purple-600 text-white font-semibold py-2 rounded hover:bg-purple-700 focus:outline-none focus:bg-purple-700'
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
