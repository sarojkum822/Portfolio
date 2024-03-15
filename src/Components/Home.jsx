import React, { useEffect, useState } from 'react'
import { AppText } from './Constants'
import Saroj_kumar_Resume from '../assets/Saroj_kumar_Resume.pdf'
// import image from 'profile.jpeg'

// import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const ResumeViewerModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
      <div className="bg-zinc-800 p-2 max-w-3xl">
        {/* Insert your resume content here */}
        <embed src={Saroj_kumar_Resume} type="application/pdf" width="100%" height="500px" />
        <button onClick={onClose} className="mt-2 text-zinc-800 bg-sky-500 pl-2 pr-2 rounded-sm border-2 border-b-gray-700 hover:scale-110">
          Close
        </button>
      </div>
    </div>
  );
};

const Home = () => {

  const handleDownload = () => {
    const filename = 'Saroj_kumar_Resume.pdf';
    const downloadLink = document.createElement('a');

    downloadLink.href = Saroj_kumar_Resume;
    downloadLink.download = filename;
    downloadLink.click();
  };


  const [isResumeModalOpen, setResumeModalOpen] = useState(false);


  const handleShowResume = () => {
    setResumeModalOpen(true);
  };

  const handleCloseResumeModal = () => {
    setResumeModalOpen(false);
  };

  useEffect(()=>{
      gsap.to('#name',{
        x:509,
        duration:0.8,
        delay:0.6,
        stagger:0.4

      })
    
  })

  return (
    <div className='p-10 w-full flex justify-between'>
      <div className='w-[60%]'>
        <h1 className='text-[40px] font-medium ml-[-70vh]' id='name'>{AppText.hello}</h1>
        <h2 className='text-[40px] ml-[-70vh]' id='name'>{AppText.Iam}, <span className='text-purple-500 font-medium'>{AppText.SarojKumar}</span></h2>
        <h1 className='text-gray-400'>{AppText.aboutMeDescripion}</h1>
        <button onClick={handleDownload} className='mt-4 w-52 gap-8 rounded-3xl text-zinc-800  pl-2 pr-2 p-2 border-b-gray-700 transition-all ease-out hover:scale-110 flex border-b-4'>Download Resume <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
        </svg>
        </span> </button>

        <button
          onClick={handleShowResume}
          className='mt-4 w-52 gap-16 rounded-3xl text-zinc-800  pl-2 pr-2 p-2 border-b-gray-700 transition-all ease-out hover:scale-110 flex border-b-4'>
          Show Resume
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>

          </span>{' '}
        </button>

        <button className='w-52 text-black font-medium border-b-4 border-b-gray-700 flex items-center gap-2 p-1 pl-2 rounded-3xl mt-4 border transition-all ease-in-out hover:scale-105'>
 
  <a href="https://github.com/sarojkum822" target="_blank" rel="noopener noreferrer" className='flex gap-[10.5vh]'> <span>Visit Github</span>
    <img src="/github.png" alt="GitHub" width="25" height="32" className='bg-white rounded-full'/>
  </a>
</button>

        
      </div>
      <ResumeViewerModal isOpen={isResumeModalOpen} onClose={handleCloseResumeModal} />

      <div>
        <img src="/profile.jpg" alt="profile" className='h-auto max-w-72 rounded-full' />
      </div>
    </div>
  )
}

export default Home