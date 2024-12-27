import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { IoCall, IoLocation, IoMail } from 'react-icons/io5';
import { FaShareNodes } from "react-icons/fa6";
import axios from 'axios';
function Contact() {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const API_BASE_URL = process.env.REACT_APP_API_URL;
    
    try {
      const response = await axios.post(`${API_BASE_URL}/contact`, formData);
      if (response.status === 200) {
        setStatus('Message sent successfully!');
        setError('');
      } else {
        setStatus('Failed to send message.');
        setError('Failed to send message.')
      }
    } catch (error) {
      if (error.response) {
        // The request was made, but the server responded with an error
        console.error('Response Error:', error.response);
        setError(`Error: ${error.response.status} - ${error.response.data.message}`);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('Request Error:', error.request);
        setError('No response received from server.');
      } else {
        // An error occurred in setting up the request
        console.error('Error Message:', error.message);
        setError('An error occurred while setting up the request.');
      }
      setStatus('');
    }
  };


  return (
    <>
      <Header />
      <section className="container mx-auto mt-12 my-8 md:p-20">
        <div className='bg-black bg-opacity-70 p-6 md:p-10'>
          <div className="shadow-md p-6 md:p-4 rounded flex flex-col  justify-center md:col-span-2">
            <h1 className="text-2xl font-bold text-left w-full">
              CONTACT <span className="text-green-800 text-2xl px-4 inline-flex transform scale-x-150">-</span>
            </h1>
            <h2 className="text-2xl text-left w-full pb-9">CONTACT ME</h2>
          </div>

          <div className=" w-full p-6 md:p-4 grid grid-cols-1 md:grid-cols-2 gap-3">

            <div className="bg-green-800 bg-opacity-80 p-4 rounded-md flex flex-row gap-4">
              <div className='flex items-center justify-center rounded-full w-9 h-9 bg-black bg-opacity-60'>
                <IoLocation size={24} />
              </div>
              <div className="text-white space-y-2">
                <h1 className="font-bold text-white">My Address</h1>
                <p>India, Dehradun, Uttarakhand</p>
              </div>
            </div>

            <div className="bg-green-800 bg-opacity-80 p-4 rounded-md flex flex-row gap-4">
              <div className='flex items-center justify-center rounded-full w-9 h-9 bg-black bg-opacity-60'>
                <FaShareNodes size={24} />
              </div>
              <div className="text-white space-y-2">
                <h1 className="font-bold text-white text-lg">Social Profile</h1>
                <p className="text-gray-200 text-sm text-center">
                  Connect with us on our social media platforms to stay updated!
                </p>
              </div>
            </div>


            <div className="bg-green-800 bg-opacity-80 p-4 rounded-md flex flex-row gap-4">
              <div className='flex items-center justify-center rounded-full w-9 h-9 bg-black bg-opacity-60'>
                <IoMail size={24} />
              </div>
              <div className="text-white space-y-2">
                <h1 className="font-bold text-white">Email Me</h1>
                <p>artikaintura274@gmail.com</p>
              </div>
            </div>


            <div className="bg-green-800 bg-opacity-80 p-4 rounded-md flex flex-row gap-4">
              <div className='flex items-center justify-center rounded-full w-9 h-9 bg-black bg-opacity-60'>
                <IoCall size={24} />
              </div>
              <div className="text-white space-y-2">
                <h1 className="font-bold text-white">Call Me</h1>
                <p>+91 999141587</p>
              </div>
            </div>

          </div>

          <div className="p-6 md:p-4 w-full">
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    className="bg-green-800 bg-opacity-80 shadow rounded-lg w-full appearance-none border py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}

                  />
                </div>
                <div>
                  <input
                    className="bg-green-800 bg-opacity-80 shadow rounded-lg w-full appearance-none border py-2  px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className='w-full'>
                <input
                  className="bg-green-800 bg-opacity-80 shadow rounded-lg w-full appearance-none border py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  name="subject"
                  type="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className='w-full'>
                <textarea
                  className="bg-green-800 bg-opacity-80 shadow rounded-lg  w-full appearance-none border py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                  name="message"
                  type="text"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <div className="w-full flex  justify-center items-center">
                <button className="text-center py-2 bg-green-800 bg-opacity-80 text-white font-semibold rounded md:w-40 w-36 md:py-2 md:rounded-lg hover:bg-green-600 transition duration-300"
                  type='submit'>
                  Send Message
                </button>
              </div>
              {error && <p className="text-center text-red-700 mt-4">{error}</p>}
              {status && <p className="text-center text-green-700 mt-4">{status}</p>}
            </form>

          </div>

        </div>

      </section>
      <Footer />
    </>
  )
}

export default Contact

