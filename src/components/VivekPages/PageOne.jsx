import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageTwo from './PageTwo';

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

function PageOne() {
  const gsapRef = useRef();

  useEffect(() => {
    const element = gsapRef.current;

    // Function to set ScrollTrigger based on screen size
    const setScrollTrigger = () => {
      ScrollTrigger.create({
        trigger: element,
        start: window.innerWidth < 768 ? "top 80%" : "top 70%",
        end: window.innerWidth < 768 ? "top 10%" : "top 20%",
        scrub: true,
        markers: false,
        onUpdate: self => {
          gsap.to(element, {
            opacity: self.isActive ? 1 : 0,
            duration: 1
          });
        }
      });
    };

    // Set ScrollTrigger on load
    setScrollTrigger();

    // Update ScrollTrigger on window resize
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
    <div className="relative text-white h-screen flex items-center justify-center m-5 md:m-14 bottom-80 md:bottom-64 ">
      <div className="text-justify p-5 md:text-4xl text-[15px] mt-[-50%] md:mt-[10%]  capitalize">
        <p ref={gsapRef} className='text-[#474746]'>
        <div>
  <span>About Me</span>
  <br />
  Hi there! I'm <span class='text-black'>Vivek Durgule</span>, originally from Kolhapur. Currently studying for my Bachelor of Computer Applications (BCA), my heart beats for two things: sports and creativity.
  I've played hockey professionally, representing Hockey Maharashtra in the 2022 Under-19 National Championship, teaching me teamwork, discipline, and perseverance.
  When not on the field, I craft digital experiences as a freelance web developer and designer, blending functionality with beauty. I also capture nature's beauty through photography.
  <p>
    Indie music fuels my creativity, setting the tone for my projects.
    Welcome to my portfolio! Explore my work and let's collaborate on something amazing together.
  </p>
</div>

        </p>
      </div>
     
    </div>
  );
}

export default PageOne;
