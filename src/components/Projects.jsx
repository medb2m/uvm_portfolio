import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
  {
    title: 'MegaLearn Academy',
    description: '> MegaLearn Academy is a dynamic online education platform, developed using the MEAN stack (MongoDB, Express.js, Angular, and Node.js). ',
    imageUrl: '/assets/project1.png'
  },
  {
    title: 'Download Manager',
    description: '> Download Manager is a software I created in Python to manage my downloads and especially for downloading YouTube playlists.',
    imageUrl: '/assets/project3.png'
  },
  {
    title: 'iPro Formation',
    description: '> iPro Formation is a freelance project website, developed using VanillaJS.',
    imageUrl: '/assets/project2.png'
  },
  {
    title: 'Chrome Browser Extension',
    description: '> Chrome Browser Extension is an extension I created out of curiosity about browser extensions and to motivate myself with messages according to the time of day.',
    imageUrl: '/assets/project4.png'
  },
  {
    title: 'Text OCR Detection',
    description: '> This project focuses on text detection and extraction using OpenCV and Optical Character Recognition (OCR) techniques. By leveraging OpenCV\'s image processing capabilities and OCR algorithms, it detects text within images and extracts it for further analysis or processing.',
    imageUrl: '/assets/project.png'
  },
  {
    title: 'File sharing QR',
    description: '> This Python project simplifies document sharing between devices using a QR Code interface. It provides an IP address and QR Code for accessing shared documents. Utilizing modules like http.server, socket, pyqrcode, and os, it enables easy file transfer without relying on Bluetooth or messaging apps.',
    imageUrl: '/assets/project5.png'
  }
];

const Projects = () => {
  return (
    <section className='min-h-screen p-8' id='projects'>
      <h2 className='text-4xl text-center mb-8'>Projects</h2>
      <div className='grid-container'>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='project-card'
          >
            <img src={project.imageUrl} alt={project.title} />
            <div className='content'>
              <h3 >{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
