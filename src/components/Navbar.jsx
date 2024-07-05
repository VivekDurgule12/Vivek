import React, { useState, useLayoutEffect, useEffect } from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);

  useLayoutEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 640);
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleScroll = () => {
      if (window.pageYOffset > lastScrollY) {
        setIsScrollingUp(false);
      } else {
        setIsScrollingUp(true);
      }
      lastScrollY = window.pageYOffset;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className={`container fixed top-0 z-50 bg-white bg-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-[5px]  border border-gray-300 border-opacity-10 rounded-[50px]  shadow-2xl shadow-inner-lg mt-10 text-center max-w-fit transition-transform duration-300 ${
        isScrollingUp ? 'translate-y-0' : '-translate-y-full'
      }`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <nav className="flex flex-col sm:flex-row p-5 gap-4 sm:gap-20 items-center" onClick={() => setIsOpen(!isOpen)}>
        <motion.h1
          className="text-lg font-semibold mb-4 sm:mb-1 cursor-pointer"
          variants={item}
        >
          <a href="/" className="text-gray-800 text-center items-center justify-center mt-5 hover:text-[#474746] transition-all duration-300">
            Vivek Durgule
          </a>
        </motion.h1>
        {(isOpen || isLargeScreen) && (
          <motion.ul
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-5"
            variants={container}
            initial="hidden"
            animate="visible"
          >
             <motion.li variants={item}>
              <a href="/about" className="text-gray-800 hover:text-[#474746] backdrop-blur-3xl transition duration-300">
                about
              </a>
            </motion.li>
            <motion.li variants={item}>
              <a href="/contact" className="text-gray-800 hover:text-[#474746] backdrop-blur-3xl transition duration-300">
                Contact
              </a>
            </motion.li>
            <motion.li variants={item}>
              <a href="/work" className="text-gray-800 hover:text-[#474746] backdrop-blur-3xl transition duration-300">
                Work
              </a>
            </motion.li>
            <motion.li variants={item}>
              <a href="/social" className="text-gray-800 hover:text-[#474746] backdrop-blur-3xl transition duration-300">
                Social
              </a>
            </motion.li>
           
          </motion.ul>
        )}
      </nav>
    </motion.div>
  );
}

export default Navbar;
