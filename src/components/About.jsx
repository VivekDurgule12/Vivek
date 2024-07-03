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
            opacity: self.isActive ? 1 : 0,
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
    <section className="relative text-gray-500 h-screen flex flex-col items-center justify-center m-5 md:m-14 top-24 md:top-1">
      <div className="text-justify p-5 md:p-10 mt-[-50%] md:mt-[10%]">
        <p ref={gsapRef} className="text-sm md:text-base lg:text-lg xl:text-xl transition-opacity duration-500">
          <span className="font-bold">About Me</span> <br />
          Hi there! I'm <span className="text-black font-semibold">Vivek Durgule</span>, originally from Kolhapur. I'm currently studying for my Bachelor of Computer Applications (BCA), but my heart beats for two things: sports and creativity.
          I'm proud to have played hockey professionally, representing Hockey Maharashtra in the 2022 Under-19 National Championship. This journey taught me about teamwork, discipline, and perseverance.
          When I'm not on the field, I'm crafting digital experiences as a freelance web developer and designer. I love blending functionality with beauty. Oh, and I have a passion for capturing nature's beauty through my photography.
          <p >
          Indie music fuels my creativity, setting the tone for my projects.
          Welcome to my portfolio! Dive in, explore my work, and let's collaborate on something amazing together.
        </p>
        </p>
        
      </div>

      <div className="mt-10">
        <a href="https://docs.google.com/document/d/1IrLOMvHW31LuiZ_V8_wM6qU4GSFWn6lr/edit?usp=sharing&ouid=111743888766870687475&rtpof=true&sd=true" 
        className='transition duration-300 relative group'
        >
        
          <h1>Check out my Resume</h1>
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-400 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
    </section>
  );
}

export default About;
