import React, { Fragment, useState } from 'react'
import divImage from '../assets/images/bg1.jpg';
import frontImage from '../assets/images/frontend.webp';
import backImage from '../assets/images/backends.webp';
import softImage from '../assets/images/softs.png';
import toolImage from '../assets/images/tool.png';
import Header from './Header';
import Footer from './Footer';


// SkillCard Component
const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <div
      className={`relative p-4 border rounded-lg cursor-pointer transition-all duration-200
              ${isActive ? "border-green-700 bg-green-800" : "border-green-700 bg-green-600 bg-opacity-30"}`}
      onClick={() => onClick()}
    >
      <div className="w-16 h-16 flex justify-center items-center bg-gradient-to-r bg-white rounded-md border border-green-700 absolute -top-3 -left-0">
        <img src={iconUrl} alt={title} className="w-10 h-auto object-contain" />
      </div>
      <span className="block text-center text-lg font-medium mt-10">{title}</span>
    </div>
  );
};

// SkillsInfoCard Component
const SkillsInfoCard = ({ heading, skills }) => {
  return (
    <div className="p-4 bg-green-900 rounded-lg shadow-lg">
      <h6 className="text-2xl font-semibold mb-4">{heading}</h6>
      <div className="space-y-4">
        {skills.map((item, index) => (
          < >
            <div key={`skill_${index}`} className="flex justify-between items-center">
              <p className="text-white">{item.skill}</p>
              <p className="text-white">{item.percentage}</p>
            </div>
            <div className="w-full bg-green-500 rounded-full h-2.5">
              <div
                className="bg-green-800 h-2.5 rounded-full"
                style={{ width: item.percentage }}
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};


function About() {
  const SKILLS = [
    {
      title: "Frontend Development",
      icon: `${frontImage}`,
      skills: [
        { skill: "HTML5", percentage: "80%" },
        { skill: "CSS (Tailwind CSS)", percentage: "85%" },
        { skill: "JavaScript", percentage: "70%" },
        { skill: "React", percentage: "60%" },
      ],
    },
    {
      title: "Backend Development",
      icon: `${backImage}`,
      skills: [
        { skill: "Node.js", percentage: "80%" },
        { skill: "Express.js", percentage: "70%" },
        { skill: "MongoDB", percentage: "60%" },
        { skill: "Django", percentage: "50%" },

      ],
    },
    {
      title: "Tools",
      icon: `${toolImage}`,
      skills: [
        { skill: "Visual Studio Code", percentage: "80%" },
        { skill: "Git & GitHub", percentage: "50%" },
        { skill: "Postman", percentage: "60%" },
      ],
    },
    {
      title: "Soft Skills",
      icon: `${softImage}`,
      skills: [
        { skill: "Problem Solving", percentage: "60%" },
        { skill: "Attention to Detail", percentage: "60%" },
        { skill: "Collaboration", percentage: "40%" },
      ],
    },
  ];

  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectSkill = (data) => {
    setSelectedSkill(data);
  };


  return (
    <>
      <Header />
      <section className="container mx-auto mt-12 my-8 md:p-20">
        <div className="grid gap-9 bg-black bg-opacity-70 p-6 md:p-10 md:grid-cols-2">
          <div className="shadow-md p-6 md:p-4 rounded flex flex-col  justify-center md:col-span-2">
            <h1 className="text-2xl font-bold text-left w-full">
              ABOUT <span className="text-green-800 text-2xl px-4 inline-flex transform scale-x-150">-</span>
            </h1>
            <h2 className="text-2xl  text-left w-full pb-9">LEARN MORE ABOUT ME</h2>
          </div>
           
           {/*About */}

          <div
            className="bg-cover bg-center rounded-full w-60 h-60 mx-auto md:mx-0"
            style={{ backgroundImage: `url(${divImage})` }}
            aria-label="Profile Image"
          ></div>
          <div className="grid md:grid-cols-1 grid-cols-2 gap-4 md:gap-0 w-full">
            <div className="flex items-center">
              <span className="text-green-800 text-xl mr-2">&gt;</span>
              <p className="font-bold">Phone:</p>
              <p className="px-2">+91 999141587</p>
            </div>
            <div className="flex items-center">
              <span className="text-green-800 text-xl mr-2">&gt;</span>
              <p className="font-bold">Email:</p>
              <p className="px-2">artikaintura274@gmail.com </p>
            </div>
            <div className="flex items-center">
              <span className="text-green-800 text-xl mr-2">&gt;</span>
              <p className="font-bold">Birthday:</p>
              <p className="px-2">07 July 2002 </p>
            </div>
            <div className="flex items-center">
              <span className="text-green-800 text-xl mr-2">&gt;</span>
              <p className="font-bold">City:</p>
              <p className="px-2">India, Uttarakhand, Dehradun </p>
            </div>
          </div>
          <div className="flex justify-center md:justify-start md:col-span-2">
            <p className='text-justify text-sm md:text-base leading-relaxed pb-4'>
              I'm a computer Science student a passionate and dedicated aspiring software developer with a strong foundation in web development and programming.
              As a recently completed my masters, I have honed my skills in HTML, CSS, JavaScript, React, Node.js, and Python through various academic projects and personal endeavors.
              My journey in the tech world has been driven by a curiosity for how things work and a desire to create solutions that can make a difference.
              In my portfolio, you'll find projects that showcase my ability to build dynamic and responsive web applications, including a real-time chat application and a weather app etc.
              These projects reflect my commitment to learning and my ability to apply theoretical knowledge to practical scenarios.
              I'm excited to continue growing my skill set and to contribute to innovative projects in a professional setting.
            </p>
          </div>
        
         {/*skills */}
         
          <div className="shadow-md p-6 md:p-4 rounded flex flex-col  justify-center md:col-span-2">
            <h1 className="text-2xl font-bold text-left w-full">
              SKILLS<span className="text-green-800 text-2xl px-4 inline-flex transform scale-x-150">-</span>
            </h1>
            <div className="flex flex-col md:flex-row md:pt-6 gap-5">
              {/* Skill Cards */}
              <div className="flex-1 grid gap-6 grid-cols-1 md:grid-cols-2 order-2 md:order-1">
                {SKILLS.map((item) => (
                  <SkillCard
                    key={item.title}
                    iconUrl={item.icon}
                    title={item.title}
                    isActive={selectedSkill.title === item.title}
                    onClick={() => handleSelectSkill(item)}
                  />
                ))}
              </div>
              {/* Skills Info */}
              <div className="flex-1 mt-8 md:mt-0 order-1 md:order-2">
                <SkillsInfoCard
                  heading={selectedSkill.title}
                  skills={selectedSkill.skills}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />


    </>

  )
}
export default About;
