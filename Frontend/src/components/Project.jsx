import React from 'react'
import Header from './Header';
import Footer from './Footer';
import portfolioImageUrl from '../assets/images/portfolio.png';
import financeUmageUrl from '../assets/images/finance.jpg'
import chatImageUrl from '../assets/images/chats.jpg';
function Project() {
  return (
    <>
      <Header />
      <section className="container mx-auto mt-12 my-8 md:p-20">
        <div className=" bg-black bg-opacity-70 p-6 md:p-10">
          <div className="shadow-md p-6 md:p-4 rounded flex flex-col  justify-center md:col-span-2">
            <h1 className="text-2xl font-bold text-left w-full">
              PROJECTS <span className="text-green-800 text-2xl px-4 inline-flex transform scale-x-150">-</span>
            </h1>
            <h2 className="text-2xl  text-left w-full pb-9">MY PROJECT</h2>
          </div>

          <div className="w-full grid md:grid-cols-3 gap-5 p-6 ">
            <a href='/' target="_blank" rel="noopener noreferrer">
              <div className="bg-black  bg-opacity-55 hover:bg-green-800 shadow-lg rounded-lg p-4 text-center flex flex-col h-full">
                <img src={portfolioImageUrl} alt="Chat background" className="mx-auto my-auto mb-4 w-20 h-20" style={{ boxShadow: '1px 2px 10px 7px white' }} />
                <h1 className="text-xl font-bold mb-2">PortFolio</h1>
                <p className="text-justify">
                  A portfolio website using HTML, JavaScript, and React for the frontend, styled with Tailwind CSS to ensure a modern and responsive design.
                  On the backend, we used Node.js with Postman API for testing and managing server-side logic and integrated it with MongoDB as the database for efficient data storage and retrieval. This combination of technologies provides a seamless user experience with a robust, scalable architecture.
                </p>
              </div>
            </a>
            <a href='/' target="_blank" rel="noopener noreferrer">
              <div className="bg-black bg-opacity-55  hover:bg-green-800 shadow-lg rounded-lg p-4 text-center flex flex-col h-full">
                <img src={financeUmageUrl} alt="Chat background" className="mx-auto my-auto mb-4 w-20 h-20 " style={{ boxShadow: '1px 2px 10px 7px white' }} />
                <h1 className="text-xl font-bold mb-2">Analysis of Personal Finance</h1>
                <p className="text-justify">The “Analysis of Personal Finance Using Machine Learning”
                  Utilized advanced data processing and predictive
                  modeling to analyze financial behavior, forecast trends, and provide
                  actionable recommendations for better financial decision-making.
                </p>
              </div>
            </a>
            <a href='https://github.com/artikaintura/Calculator' target="_blank" rel="noopener noreferrer">
              <div className="bg-black bg-opacity-55  hover:bg-green-800 shadow-lg rounded-lg p-4 text-center flex flex-col  h-full">
                <img src={chatImageUrl} alt="Chat background" className="mx-auto my-auto mb-4 w-20 h-20" style={{ boxShadow: '1px 2px 10px 7px white' }} />
                <h1 className="text-xl font-bold mb-2">ChatApp</h1>
                <p className="text-justify">
                  A ChatApp using HTML, JavaScript, and React for the frontend, styled with Tailwind CSS for a modern and responsive design.
                  The backend is powered by Node.js, with real-time communication handled by Socket.io. The website is connected to MongoDB for data storage.
                  Additionally, we developed a Chat App as part of the project, enabling real-time messaging between users, without using an external API,
                  ensuring a smooth, scalable, and interactive experience.
                </p>
              </div>
            </a>
          </div>


        </div>
      </section>
      <Footer />
    </>
  )
}

export default Project;
