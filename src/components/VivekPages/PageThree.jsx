import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const PageThree = () => {
  const marqueeInnerRef = useRef(null);
  const arrowsRef = useRef([]);

  useEffect(() => {
    let currentScroll = window.pageYOffset;
    let isScrollingDown = true;
    const arrows = arrowsRef.current;

    const marqueeElements = gsap.utils.toArray(".marqueePart");

    const tween = gsap.to(marqueeElements, {
      xPercent: -100,
      repeat: Infinity,
      duration: 6,
      ease: "linear",
    }).progress(0.5);

    const handleScroll = () => {
      const newScroll = window.pageYOffset;
      isScrollingDown = newScroll > currentScroll;
      currentScroll = newScroll;

      gsap.to(tween, {
        timeScale: isScrollingDown ? -1 : 1,
      });

      arrows.forEach((arrow, index) => {
        if (isScrollingDown) {
          arrow.classList.remove("active");
        } else {
          arrow.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      tween.kill();
    };
  }, []);

  return (
    <section className="relative bg-[#00000029] text-black h-[100px] py-8 font-semibold text-4xl overflow-hidden bottom-52 md:bottom-24">
      <div className="marqueeInner flex w-full whitespace-nowrap" ref={marqueeInnerRef}>
        {Array(8).fill().map((_, index) => (
          <div className="marqueePart flex items-center flex-shrink-0 px-1" key={index}>
            {/* Replace with your content */}
            <span className="mr-2 md:mr-4">FREELANCER</span>
            <span className="mr-2 md:mr-4">UI UX DESIGNER</span>
            <span className="mr-2 md:mr-4">WEB DESIGNER</span>
            <span className="mr-2 md:mr-4">DEVELOPER</span>
            {/* Example arrow element */}
            <div ref={el => arrowsRef.current[index] = el} className="arrow active"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PageThree;
