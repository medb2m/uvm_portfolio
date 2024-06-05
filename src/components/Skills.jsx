import { FaAngular, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase, FaPhp, FaPython, FaJsSquare, FaGit, FaDocker } from 'react-icons/fa';
import { SiTailwindcss, SiCplusplus, SiCsharp, SiMysql, SiOracle, SiSymfony, SiTypescript, SiSpring, SiAnaconda, SiPytorch, SiTensorflow, SiDotnet } from 'react-icons/si';

const Skills = () => {
  return (
    <div className='m-8'>
      <div className='max-w-4xl mx-auto my-8 p-8 rounded-lg bg-white shadow-lg card' id='skills'>
      <h2 className='text-4xl mb-4 text-center hover:text-[#A020F0]'>Skills</h2>
      <p className='text-xl text-gray-700 mb-4 text-center'>
        I have prior experience with all the technologies listed below. 
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {/* Programming Languages */}
        <div>
          <h3 className='text-xl font-semibold mb-2 text-[#A020F0] hover:text-[#00FF00]'>Programming Languages</h3>
          <ul className='list-disc list-inside'>
            <li className='hover:text-[#f06520]'><FaHtml5 className='inline-block mr-2' />HTML</li>
            <li className='hover:text-[#264de4]'><FaCss3Alt className='inline-block mr-2' />CSS</li>
            <li className='hover:text-[#F0DB4F]'><FaJsSquare className='inline-block mr-2' />JavaScript</li>
            <li className='hover:text-[#044F88]'><SiCplusplus className='inline-block mr-2' />C++</li>
            <li className='hover:text-[#512bd4]'><SiCsharp className='inline-block mr-2' />C#</li>
            <li className='hover:text-[#512bd4]'><FaPhp className='inline-block mr-2' />PHP</li>
            <li className='hover:text-[#4584b6]'><FaPython className='inline-block mr-2' />Python</li>
            <li className='hover:text-[#264de4]'><SiTypescript className='inline-block mr-2' />TypeScript</li>
          </ul>
        </div>
        {/* Frameworks & Libraries */}
        <div>
          <h3 className='text-xl font-semibold mb-2 text-[#A020F0] hover:text-[#00FF00]'>Frameworks & Libraries</h3>
          <ul className='list-disc list-inside'>
            <li className='hover:text-[#dd1b16]'><FaAngular className='inline-block mr-2' />Angular</li>
            <li className='hover:text-[#00ff7f]'><SiSpring className='inline-block mr-2' />Spring Boot</li>
            <li className='hover:text-[#ee4c2c]'><SiTensorflow className='inline-block mr-2' />TensorFlow</li>
            <li className='hover:text-[#ee4c2c]'><SiPytorch className='inline-block mr-2' />PyTorch</li>
            <li className='hover:text-[#3eb049]'><SiAnaconda className='inline-block mr-2' />Anaconda</li>
            <li className='hover:text-[#A020F0]'><SiDotnet className='inline-block mr-2' />.NET</li>
            <li className='hover:text-[#61dbfb]'><FaReact className='inline-block mr-2' />React</li>
            <li className='hover:text-[#06b6d4]'><SiTailwindcss className='inline-block mr-2' />Tailwind</li>
            <li className='hover:text-[#009f6b]'><SiSymfony className='inline-block mr-2' />Symfony</li>
            <li className='hover:text-[#009f6b]'><FaNodeJs className='inline-block mr-2' />Node.js</li>
          </ul>
        </div>
        {/* Databases */}
        <div>
          <h3 className='text-xl font-semibold mb-2 text-[#A020F0] hover:text-[#00FF00]'>Databases</h3>
          <ul className='list-disc list-inside'>
            <li className='hover:text-[#009f6b]'><FaDatabase className='inline-block mr-2' />MongoDB</li>
            <li className='hover:text-[#264de4]'><SiMysql className='inline-block mr-2' />MySQL</li>
            <li className='hover:text-[#dd1b16]'><SiOracle className='inline-block mr-2' />Oracle</li>
          </ul>
        </div>
        {/* Tools & Version Control */}
        <div>
          <h3 className='text-xl font-semibold mb-2 text-[#A020F0] hover:text-[#00FF00]'>Tools & Version Control</h3>
          <ul className='list-disc list-inside'>
            <li className='hover:text-[#f06520]'><FaGit className='inline-block mr-2' />Git</li>
            <li className='hover:text-[#0db7ed]'><FaDocker className='inline-block mr-2' />Docker</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Skills;
