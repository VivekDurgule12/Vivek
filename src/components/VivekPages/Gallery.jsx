import React from 'react';
import { motion } from 'framer-motion';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5, // adjust as needed
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20
    }
  }
};

function Gallery() {
  return (
    <div className="md:m-32 m-16 mt-40 md:mt-40">
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        drag // Enable dragging
            dragConstraints
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative bg-black rounded-3xl overflow-hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            drag // Enable dragging
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} // Constrain within parent
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
              style={{ pointerEvents: 'none' }}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Gallery;
