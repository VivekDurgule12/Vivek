import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const images = [
  { url: "/Images/VIVEK Edit.png", alt: "VIVEK Edit" },
  { url: "/Images/Copy of 20210606_182921.jpg", alt: "Vivek Durgule" },
  { url: "/Images/Copy of IMG_20220504_095851166.PORTRAIT.jpg", alt: "Vivek Durgule" },
  { url: "/Images/Copy of 20210606_183219.jpg", alt: "Vivek Durgule" },
  { url: "/Images/Copy of 00100srPORTRAIT_00100_BURST20211110153642003_COVER~2.jpg", alt: "Vivek Durgule" },
  { url: "/Images/PXL_20240615_065850139.PORTRAIT.jpg", alt: "Vivek" },
  { url: "/Images/PXL_20231214_071722407.PORTRAIT.jpg", alt: "Vivek" },
  { url: "/Images/PXL_20231202_073507414.PORTRAIT.jpg", alt: "Vivek" },
  { url: "/Images/PXL_20231202_073106280.PORTRAIT~2.jpg", alt: "Vivek" },
  { url: "/Images/Snapchat-1649020135.jpg", alt: "Vivek" },
  { url: "/Images/IMG_20211104_221504~2.jpg", alt: "Vivek" },
  { url: "/Images/PXL_20240613_101109668.PORTRAIT.jpg", alt: "Vivek" }
];

gsap.registerPlugin(ScrollTrigger);

function PageTwo() {
  const textRef = useRef([]);
  const imageRef = useRef(null);
  const leftDivRef = useRef(null);
  const rightDivRef = useRef(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Preload images for smooth transitions
    const imagePromises = images.map(imageObj => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = resolve;
        img.onerror = reject;
        img.src = imageObj.url;
      });
    });

    Promise.all(imagePromises).then(() => {
      // Start image switching interval after preloading
      const interval = setInterval(() => {
        gsap.to(imageRef.current, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            setCurrentImageIndex(prevIndex =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
            gsap.to(imageRef.current, {
              opacity: 1,
              duration: 0.5,
            });
          }
        });
      }, 5000); // 5 seconds in milliseconds

      return () => clearInterval(interval);
    });
  }, []);

  useEffect(() => {
    // GSAP animation setup for text animation
    gsap.fromTo(
      textRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 100%", // Adjusted start position for mobile
          end: "top -10%", // Adjusted end position for desktop
          scrub: true,
        },
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
      }
    );

    // GSAP animation setup for left and right divs
    gsap.from(leftDivRef.current, {
      x: '-100%',
      opacity: 0,
      scrollTrigger: {
        trigger: leftDivRef.current,
        start: "top 90%",
        end: "top 50%",
        scrub: true,
      },
      duration: 0.5,
    });

    gsap.from(rightDivRef.current, {
      x: '100%',
      opacity: 0,
      scrollTrigger: {
        trigger: rightDivRef.current,
        start: "top 90%",
        end: "top 50%",
        scrub: true,
      },
      duration: 0.5,
    });
  }, []);

  const linkText = "Go to Gallery".split('');

  return (
    <>
      <main className="relative h-fit flex items-center justify-center bottom-[10vh] top-[-65vh] md:top-[-20vh]">
        <Link to="/gallery" className="relative group bottom-[40%]">
          <div className="uppercase text-center">
            {linkText.map((char, index) => (
              <span
                key={index}
                ref={el => (textRef.current[index] = el)}
                className="text-2xl mt-[50%] md:text-4xl lg:text-5xl p-2 anim-char"
                style={{ opacity: 0 }}
              >
                {char}
              </span>
            ))}
            <span className="absolute bottom-[-10px] left-0 bottom-0 w-full h-0.5 bg-black transform scale-x-0 origin-left transition-all duration-1000 group-hover:scale-x-100"></span>
          </div>
        </Link>
      </main>

      <div className="relative m-20 grid md:flex md:justify-between md:space-x-8 md:space-y-0 md:items-center md:top-0 top-[-400px] h-[20vh] md:h-[60vh]">
        <div ref={leftDivRef} className="order-1 md:order-1 md:w-1/2 bg-gray rounded-2xl p-4 md:p-8">
          <h1 className="text-xl md:text-2xl text-black font-bold mb-4">I am a developer</h1>
          <p className="text-base md:text-lg text-black">I create websites and applications.</p>
        </div>
        <div ref={rightDivRef} className="order-2 md:order-2 md:w-1/2 h-[50vh] flex items-center justify-center">
          <img
            ref={imageRef}
            src={images[currentImageIndex]?.url}
            alt={images[currentImageIndex]?.alt}
            className="md:w-2/3 h-full object-cover rounded-2xl"
            style={{ transition: 'opacity 0.5s ease-in-out' }}
          />
        </div>
      </div>
    </>
  );
}

export default PageTwo;
