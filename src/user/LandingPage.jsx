import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import img from "../assets/pimg.png"; // Adjust the path as necessary

const skillsUsingNow = [
  {
    name: "HTML5",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Bootstrap",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Tailwind",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  }, 
];

const skillsLearning = [
  {
    name: "NodeJS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Express.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
];

const myWorks = [
    { title: "Villa Real Estate Website", link: "https://villa-ashen.vercel.app" },
    { title: "Educa E-learning Platform", link: "https://educa-lac.vercel.app" },
    { title: "Ease Banking App", link: "https://ease-bank.vercel.app" },

];

const LandingPage = () => {
  return (
    <div className="flex flex-col bg-gray-100">
      <div className="min-h-screen bg-gray-100 mb-0">
        {/* Hero Section */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 min-h-[80vh] bottom-0 overflow-hidden">
          {/* Left Panel */}
          <div className="flex flex-col justify-center items-start px-10 py-20 bg-gray-100 z-10">
            <p className="text-lg font-medium">Hi, I am</p>
            <h1 className="text-4xl font-extrabold mt-2">
              Oyioha Chukwuka Anthony
            </h1>
            <p className="text-gray-600 mt-2">Front-end Developer</p>
            {/* Socials */}
            <div className="flex space-x-4 mt-6">
              <a href="mailto:anthonymaky@gmail.com" className="p-3">
                <FaEnvelope />
              </a>
              <a href="https://github.com/Phakulty" className="p-3">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/chukwuka-oyioha-34305b222/" className="p-3">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Right Panel */}
          <div className="relative text-white flex justify-center  md:items-center">
            <div className="absolute top-0 left-0 w-full h-full bg-black transform -skew-x-60 origin-left z-0"></div>
            <img
              src={img}
              alt="profile"
              className="relative z-10 w-72 md:w-96 object-contain"
            />
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="bg-black text-white px-10 py-8">
        <h2 className="text-3xl font-bold text-center px-6 py-2 mb-8">
          About Me
        </h2>
        <p className=" text-l text-center">
          I’m a seasoned front-end developer with many years of experience
          creating web interfaces that don’t just look good — they feel right.
          My passion lies in transforming ideas into clean, interactive, and
          intuitive digital experiences that users genuinely enjoy. Whether it's
          building scalable React applications, optimizing performance, or
          obsessing over pixel-perfect designs, I thrive in the space where
          design meets code. Over the years, I’ve honed my skills in HTML5,
          CSS3, JavaScript, TypeScript, React, Tailwind CSS, and modern tooling
          like Vite and Webpack. I’m a big believer in writing accessible,
          maintainable code and collaborating closely with designers and
          back-end teams to bring ideas to life with precision. From startups to
          more mature products, I’ve helped teams create mobile-first,
          user-centric interfaces that drive engagement and deliver real value.
          I’m always learning, always refining, and always striving to push the
          limits of what’s possible on the front end — not just to meet
          expectations, but to exceed them.
        </p>
      </div>

      {/* Skills Section */}
      <div className="bg-gray-100 min-h-screen flex flex-col items-center p-10">
        <h1 className="text-3xl font-bold px-6 py-2 mb-8">
          SKILLS
        </h1>

        <div className="w-full max-w-4xl">
          <h2 className="text-xl font-semibold mb-4">USING NOW:</h2>
          <div className="grid grid-cols-3 gap-6 mb-10 md:grid-cols-4">
            {skillsUsingNow.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center text-sm"
              >
                <img src={skill.icon} alt={skill.name} className="h-12 mb-2" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-semibold mb-4">LEARNING:</h2>
          <div className="grid grid-cols-4 gap-6">
            {skillsLearning.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center text-sm"
              >
                <img src={skill.icon} alt={skill.name} className="h-12 mb-2" />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* My Work Section */}
      <div className=" bg-gray-100 flex flex-col p-10">
        <h2 className="text-3xl text-center font-bold px-6 py-2 mb-8">My Works</h2>
        <ul className="list-disc list-inside space-y-2 ms-8 justify-start">
            {myWorks.map((work, index) => (
              <li key={index}>
                <a href={work.link} className="text-blue-500 hover:underline">
                  {work.title}
                </a>
              </li>
            ))}
        </ul>
      </div>

      <div className="bg-gray-100 flex items-center justify-center">
         <h1 className="text-3xl text-center font-bold px-6 py-2 mb-8">
          CONTACTS
        </h1>

      </div>

      {/* Footer Section */}
      <footer className="bg-black text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
