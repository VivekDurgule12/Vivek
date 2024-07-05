import React from 'react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full text-gray-600 text-center py-4 flex flex-col md:flex-row items-center justify-between p-5"
    >
      <p className="text-black py-2 px-4 rounded transition duration-300 relative group">
        &copy; 2024 Vivek Durgule.
        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
      </p>
      <p className="text-black py-2 px-4 rounded transition duration-300 relative group">
        <a
          href="https://www.instagram.com/vivekdurgule12?igsh=aHV1a2V2eTBkd3I4"
          className="block md:inline-block relative group"
        >
          Instagram
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </a>
      </p>
      <p className="text-black py-2 px-4 rounded transition duration-300 relative group">
        <a
          href="https://wa.me/9112251220?text=Hello%20Vivek,%20I%20Am%20interested%20in%20your%20Work."
          target="_blank"
          rel="noopener noreferrer"
          className="block md:inline-block relative group"
        >
          Chat
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </a>
      </p>
    </motion.footer>
  );
}

export default Footer;
