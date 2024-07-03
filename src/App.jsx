import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Viveks from './components/Viveks';
import Contact from './components/Contact';
import Projects from './components/Work';
import Gallery from './components/VivekPages/Gallery';
import Social from './components/Social';
import LocomotiveScroll from 'locomotive-scroll';
import 'animate.css';
import Preloader from './components/Preloader';
import CustomCursor from './components/CustomCursor'; // Import the custom cursor component
import About from './components/About';
import Footer from './components/VivekPages/Footer';
import Work from './components/Work';

function App() {
  const scrollRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2700);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading && scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        lerp: 0.1, // Adjust lerp for smoother scrolling if needed
        multiplier: 1,
        class: 'is-inview',
        direction: 'vertical', // Ensure vertical scrolling
      });

      return () => {
        scroll.destroy();
      };
    }
  }, [loading]);

  useEffect(() => {
    if (location.pathname !== '/' && !loading) {
      setLoading(true);
    }
  }, [location]);

  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '/viveks') {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [location]);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      direction: 'vertical', // Ensure vertical scrolling
      // Add other options as needed
    });

    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, []);

  return (
    <>
      {loading && (
        <div className="bg-[#E2DCD0] min-h-screen w-full flex justify-center items-center" data-scroll-container ref={scrollRef}>
          <Preloader onLoadingComplete={() => setLoading(false)} />
        </div>
      )}
      {!loading && (
        <div className="bg-[#E2DCD0] min-h-screen w-full select-none scroll-container uppercase cursor-[url(),_pointer]" style={{ overflowX: 'hidden' }} ref={scrollRef}>
          {/* <CustomCursor /> Add the custom cursor here */}
          <div className="flex justify-center text-center">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" element={<Viveks />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/social" element={<Social />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
