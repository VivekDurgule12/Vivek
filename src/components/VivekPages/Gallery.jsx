import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  { id: 1, url: "/Images/VIVEK Edit.png", alt: "VIVEK Edit", caption: "A serene edit of nature." },
  { id: 2, url: "/Images/Copy of 20210606_182921.jpg", alt: "Vivek Durgule", caption: "Scenic view captured by Vivek Durgule." },
  { id: 3, url: "/Images/Copy of IMG_20220504_095851166.PORTRAIT.jpg", alt: "Vivek Durgule", caption: "Portrait in natural light." },
  { id: 4, url: "/Images/Copy of 20210606_183219.jpg", alt: "Vivek Durgule", caption: "Sunset amidst the hills." },
  { id: 5, url: "/Images/Copy of 00100srPORTRAIT_00100_BURST20211110153642003_COVER~2.jpg", alt: "Vivek Durgule", caption: "Floral beauty in close-up." },
  { id: 6, url: "/Images/PXL_20240615_065850139.PORTRAIT.jpg", alt: "Vivek", caption: "Morning dew on leaves." },
  { id: 7, url: "/Images/PXL_20231214_071722407.PORTRAIT.jpg", alt: "Vivek", caption: "Waterfall in the wilderness." },
  { id: 8, url: "/Images/PXL_20231202_073507414.PORTRAIT.jpg", alt: "Vivek", caption: "Forest canopy from above." },
  { id: 9, url: "/Images/PXL_20231202_073106280.PORTRAIT~2.jpg", alt: "Vivek", caption: "Sunrise over the mountains." },
  { id: 10, url: "/Images/IMG_20211104_221504~2.jpg", alt: "Vivek", caption: "Misty morning by the lake." },
  { id: 11, url: "/Images/PXL_20240613_101109668.PORTRAIT.jpg", alt: "Vivek", caption: "Snow-capped peaks under clear sky." }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
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
  const [selectedId, setSelectedId] = useState(null);

  const openImage = (id) => {
    setSelectedId(id);
  };

  const closeImage = () => {
    setSelectedId(null);
  };

  return (
    <div className="md:m-8 m-5 mt-40 md:mt-20">
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {images.map((image) => (
          <motion.div
            key={image.id}
            className="relative bg-black rounded-3xl overflow-hidden"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onTap={() => openImage(image.id)} // Handle tap to open image
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
              style={{ minWidth: 0, minHeight: 0, maxHeight: '100%', maxWidth: '100%' }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-black bg-opacity-50 text-white text-sm">
              {image.caption}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal for displaying selected image */}
      <AnimatePresence>
        {selectedId !== null && (
          <motion.div
            layoutId={selectedId}
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onTap={closeImage} // Close on tap outside the image
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onTap={(e) => e.stopPropagation()} // Prevent closing when tapping inside modal
            >
              <img
                src={images.find(img => img.id === selectedId)?.url}
                alt={images.find(img => img.id === selectedId)?.alt}
                className="w-full rounded-lg"
              />
              <div className="text-center mt-2 text-sm text-gray-800">
                {images.find(img => img.id === selectedId)?.caption}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Gallery;
