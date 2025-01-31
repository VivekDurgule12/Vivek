import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function About() {
  const gsapRef = useRef();

  useEffect(() => {
    const element = gsapRef.current;

    const setScrollTrigger = () => {
      ScrollTrigger.create({
        trigger: element,
        start: window.innerWidth < 768 ? "top 80%" : "top 50%",
        end: window.innerWidth < 768 ? "top 10%" : "top 20%",
        scrub: true,
        markers: false,
        onUpdate: self => {
          gsap.to(element, {
            opacity: self.progress, // Adjust opacity based on scroll progress
            duration: 0.5,
          });
        },
      });
    };

    setScrollTrigger();

    const handleResize = () => {
      ScrollTrigger.refresh();
      setScrollTrigger();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="relative text-gray-600 min-h-screen flex flex-col items-center justify-center mx-5 md:mx-14">
      <div className="text-justify p-5 md:p-10 mt-[-50%] md:mt-[10%]">
        <p ref={gsapRef} className="mt-96 md:mt-11 text-sm md:text-base lg:text-lg xl:text-xl transition duration-500">
          <span className="font-bold">About Me</span> <br />
          Hi there! I'm <span className="text-black font-semibold">Vivek Durgule</span>, originally from Kolhapur. I'm currently studying for my Bachelor of Computer Applications (BCA), but my heart beats for two things: sports and creativity.
          I'm proud to have played hockey professionally, representing Hockey Maharashtra in the 2022 Under-19 National Championship. This journey taught me about teamwork, discipline, and perseverance.
          When I'm not on the field, I'm crafting digital experiences as a freelance web developer and designer. I love blending functionality with beauty. Oh, and I have a passion for capturing nature's beauty through my photography.
          Indie music fuels my creativity, setting the tone for my projects.
          Welcome to my portfolio! Dive in, explore my work, and let's collaborate on something amazing together.
        </p>
      </div>
      <div className="mt-10 p-5 md:p-10 w-full max-w-4xl">
        <h3 className="text-2xl md:text-3xl font-bold mb-5 text-center">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            'C', 'C++', 'Java', 'Python', 
            'HTML', 'CSS', 'JavaScript', 'SQL', 
            'Linux', 'GitHub', 'React.js'
          ].map((skill, index) => (
            <div key={index} className="bg-gray-200 p-3 md:p-5 rounded-lg flex items-center justify-center shadow-md hover:bg-gray-300 transition duration-300">
              <span className="text-sm md:text-base lg:text-lg font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 p-5 md:p-10">
        <a
          href='https://docs.google.com/document/d/1f8zeQ3XrqiM0ds2MFpm3a3uGXAjNi-jqCzFZGRFL8eU/edit?usp=sharing'
          className="block text-center text-gray-800 font-bold py-2 px-4 rounded-md bg-gray-300 hover:bg-gray-400 transition duration-300"
        >
          Check out my Resume
        </a>
      </div>
    </section>
  );
}

export default About;
