import React, { useEffect, useRef } from 'react';
import PageOne from './VivekPages/PageOne';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageTwo from './VivekPages/PageTwo';
import PageThree from './VivekPages/PageThree';

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
      <div className=" min-h-screen flex flex-col justify-center items-center">
        <div className="relative text-4xl md:text-[100px] text-center mt-20 md:mt-0 mb-20 md:mb-0">
          <div ref={gsapRef}>
            <h1 className=" text-black">
              {['V', 'I', 'V', 'E', 'K'].map((char, index) => (
                <span
                  key={index}
                  className=" inline-block hover:text-[#000000a3] transition-all duration-200"
                >
                  {char}
                </span>
              ))}
            </h1>
            <h1 className=" text-black">
              {['D', 'U', 'R', 'G', 'U', 'L', 'E'].map((char, index) => (
                <span
                  key={index}
                  className="relative inline-block hover:text-[rgba(0,0,0,0.64)] transition-all duration-200"
                >
                  {char}
                </span>
              ))}
            </h1>
            <hr className="border-t-3 border-gray-700 mt-10 md:mt-[90px] mb-11" />
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
