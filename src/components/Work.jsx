import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const items = [
  { id: 1, title: "Apple Vision Pro Web Clone", subtitle: "Web clone", link: "https://apple-vision-pro-clone-web.vercel.app/" },
  { id: 2, title: "Book Store", subtitle: "Store", link: "https://github.com/VivekDurgule12/BookStoreApp" },
  { id: 3, title: "ICPC CLOCK BREAKING", subtitle: "ICPC 2016", link: "https://github.com/VivekDurgule12/ICPC-2016-Problem-D" },
  {id: 4, title: "E-commerce", subtitle: "Grocery Shop", link: "https://github.com/VivekDurgule12/Store"},
  {
  id: 5,
  title: "Fruit E-commerce",
  subtitle: "GRAMLOK Fruits and Exports",
  link: "http://gramlokfruits.com/"
},

  // Add more items as needed
];

function Work() {
  const [selectedId, setSelectedId] = useState(null);

  // Function to handle clicking on project card
  const handleCardClick = (itemId) => {
    setSelectedId(itemId);
  };

  // Function to handle clicking on project link
  const handleLinkClick = (event, link) => {
    event.stopPropagation(); // Prevents the card from closing
    window.open(link, '_blank');
  };

  // Find the selected item based on selectedId
  const selectedItem = items.find(item => item.id === selectedId);

  return (
    <div className="container mx-auto p-4 h-screen mt-36 ">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">My Projects</h1>
        <p className="text-gray-600">Click on a project to see more details</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:ml-10 ">
        {items.map(item => (
          <motion.div
            key={item.id}
            layoutId={item.id}
            onClick={() => handleCardClick(item.id)}
            className="bg-white p-6 shadow-lg rounded-lg cursor-pointer hover:bg-gray-100 transition duration-300"
            whileHover={{ scale: 1.05 }}
          >
            <motion.h5 className="text-gray-500 mb-2">{item.subtitle}</motion.h5>
            <motion.h2 className="text-xl font-bold">{item.title}</motion.h2>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            layoutId={selectedId}
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
              <motion.button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 text-gray-700 hover:text-red-500"
              >
                <FaTimes size={24} />
              </motion.button>
              <motion.h5 className="text-gray-500 mb-2">{selectedItem.subtitle}</motion.h5>
              <motion.h2 className="text-2xl font-bold mb-4">{selectedItem.title}</motion.h2>
              <iframe
                src={selectedItem.link}
                width="100%"
                height="400px"
                title={selectedItem.title}
                className="border-0 rounded-lg mb-4"
              ></iframe>
              <a
                href={selectedItem.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => handleLinkClick(e, selectedItem.link)}
                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300 inline-block"
              >
                View Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Work;
