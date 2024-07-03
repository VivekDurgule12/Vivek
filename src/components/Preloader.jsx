import React, { useEffect, useState } from 'react';

const Preloader = ({ onLoadingComplete }) => {
  const messages = ["नमस्कार ! ", "Hello !",  "Ciao", "こんにちは" , "你好"];
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => { 
    const interval = setInterval(() => {
      setCurrentMessageIndex(prevIndex => (prevIndex + 1) % messages.length);
    }, 200); // Change message every 500ms

    // Simulate loading complete after all messages have been shown
    const timer = setTimeout(() => {
      onLoadingComplete();
      clearInterval(interval); // Clear interval when loading is complete
    }, messages.length * 200); // Wait for all messages to cycle through

    return () => {
      clearInterval(interval); // Cleanup: clear interval
      clearTimeout(timer); // Cleanup: clear timeout
    };
  }, [messages.length, onLoadingComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#E2DCDO] z-50">
      <div className="text-5xl font-bold">
        <div>{messages[currentMessageIndex]}</div>
      </div>
    </div>
  );
};

export default Preloader;
