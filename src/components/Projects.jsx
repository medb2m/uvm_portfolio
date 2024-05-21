import { motion } from 'framer-motion';

const projects = [
  {
    title: 'MegaLearn Academy',
    description: 'MegaLearn Academy is a dynamic online education platform, developed using the MEAN stack (MongoDB, Express.js, Angular, and Node.js). It aims to revolutionize access to online education in Tunisia. The platform offers a range of services including internationally recognized, shareable certificates from online courses, interactive webinars, video conferences, an engaging blog, and personalized one-on-one classes.',
    imageUrl: '/assets/project1.png'
  },
  {
    title: 'Download Manager',
    description: 'Download Manager is a software I created in Python to manage my downloads and especially for downloading YouTube playlists.',
    imageUrl: '/assets/project3.png'
  },
  {
    title: 'iPro Formation',
    description: 'iPro Formation is a freelance project website, developed using VanillaJS.',
    imageUrl: '/assets/project2.png'
  },
  {
    title: 'Chrome Browser Extension',
    description: 'Chrome Browser Extension is an extension I created out of curiosity about browser extensions and to motivate myself with messages according to the time of day.',
    imageUrl: '/assets/project4.png'
  }
];

const Projects = () => {
  return (
    <section className='min-h-screen p-8' id='projects'>
      <h2 className='text-4xl font-bold text-center mb-8'>Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='bg-white shadow-lg rounded-lg overflow-hidden'
          >
            <img src={project.imageUrl} alt={project.title} className='w-full h-100' />
            <div className='p-6'>
              <h3 className='text-2xl font-bold mb-2'>{project.title}</h3>
              <p className='text-gray-700 mb-4'>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
