import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
    };

    emailjs.send('vduegule31@gmail.com', 'template_hzu49rd', templateParams, 'K9HEb-THZmmAEudow')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      })
      .catch((err) => {
        console.error('FAILED...', err);
        alert(`Failed to send message. Error: ${err.text || err}`);
      });
  };
  
  const handleCall = () => {
    window.open('tel:9112251220');
  };

  return (
    <div className="flex items-center justify-center h-screen mt-16">
      <div className="p-8 rounded-lg max-w-md w-full">
        <h2 className="text-2xl mb-4 text-center text-gray-900">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2 ">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="appearance-none rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline bg-transparent"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 ">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none bg-transparent"
              required
            />
          </div>
          <div className="flex justify-center">
          <button
  type="submit"
  className="bg-transparent hover:bg-gray-800 text-gray-800 hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
>
  Send Message
</button>
          </div>
        </form>
        
        <div className="mt-8">
          <div className="flex items-center justify-center space-x-4">
            <a
              href="https://wa.me/9112251220?text=Hello%20Vivek,%20I%20Am%20interested%20in%20your%20Work."
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 py-2 px-4 rounded transition duration-300 relative group"
            >
              WhatsApp
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            <button
              onClick={handleCall}
              className="text-gray-800 py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 relative group uppercase"
            >
              Call Now
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
