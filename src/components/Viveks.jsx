import React, { useEffect, useRef } from 'react';
import PageOne from './VivekPages/PageOne';
import PageTwo from './VivekPages/PageTwo';
import PageThree from './VivekPages/PageThree';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the plugin
gsap.registerPlugin(ScrollTrigger);

function Viveks() {
  const gsapRef = useRef();

  useEffect(() => {
    gsap.to(gsapRef.current, {
      scrollTrigger: {
        trigger: gsapRef.current,
        start: "top 20%",
        end: "bottom top",
        scrub: 2,
      },
      y: -200,
      duration: 1,
      opacity: 0,
    });
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center  ">

      <div className="md:text-[70px] absolute inset-0 flex flex-col justify-center items-center text-[5vh] ">
  <div ref={gsapRef} className="text-start">
    <h1 className="text-black m-0 p-0">
      {['V', 'I', 'V', 'E', 'K'].map((char, index) => (
        <span
          key={index}
          className="hover:text-[#000000a3] transition-all duration-200 "
        >
          {char}
        </span>
      ))}
    </h1>

    <h1 className="text-black m-0 p-0 ">
      {['D', 'U', 'R', 'G', 'U', 'L', 'E'].map((char, index) => (
        <span
          key={index}
          className="relative hover:text-[rgba(0,0,0,0.64)] transition-all duration-200 "
        >
          {char}
        </span>
      ))}
    </h1>
  </div>
</div>


      </div>

      <div className="flex flex-col items-center">
        <PageThree />
        <PageOne />
        <PageTwo />
      </div>
    </>
  );
}

export default Viveks;