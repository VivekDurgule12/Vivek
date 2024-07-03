import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons'; // Import the LinkedIn icon
import { motion } from 'framer-motion';

function Social() {
  const icons = [
    { href: 'https://www.instagram.com/vivekdurgule12?igsh=aHV1a2V2eTBkd3I4', icon: faInstagram, color: 'hover:text-pink-600' },
    { href: 'https://github.com/VivekDurgule12', icon: faGithub, color: 'hover:text-black' },
    { href: 'https://pin.it/2KtPlPOZX', icon: faPinterest, color: 'hover:text-red-600' },
    { href: 'https://www.linkedin.com/in/vivek-durgule-2644aa234', icon: faLinkedin, color: 'hover:text-blue-700' }, // Updated LinkedIn link
  ];

  return (
    <div className="relative h-screen w-full flex items-center justify-center">
      <motion.div
        className="flex flex-wrap space-x-4 sm:space-x-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {icons.map((icon, index) => (
          <motion.a
            key={index}
            href={icon.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-800 ${icon.color} flex justify-center items-center`}
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <FontAwesomeIcon icon={icon.icon} className="w-16 h-16 sm:w-24 sm:h-24" />
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}

export default Social;
