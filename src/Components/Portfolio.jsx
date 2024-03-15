import React, { useEffect, useState } from 'react';
import { AppText, portfolio } from './Constants';
import AddProjects from './AddProjects';
import axios from 'axios';
import { FaGithub } from "react-icons/fa";


const Portfolio = () => {

    const [openAddProjectsModal, setOpenAddProjectsModal] = useState(false);
    const [projects, setProjects] = useState([]);

    const showModal = () => {
        setOpenAddProjectsModal(!openAddProjectsModal);
    }



    
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:3000/projects');
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

      useEffect(()=>{
        fetchProjects();
      },[])
  
      
    console.log(projects);


    const closeModal = () => {
        setOpenAddProjectsModal(false);
        fetchProjects(); 
    };


    return (
        <>
            <section id='portfolio'>
                <h1 className='text-[40px] font-bold border-b-2 p-2'>
                    {AppText.Creative}
                    <span className='text-purple-600'>{AppText.Portfolio}</span>
                </h1>



                <div className='flex justify-end bg-sky p-4'>
                    <button className='bg-sky-400 p-2 pl-4 pr-4 rounded-sm hover:scale-105 shadow-lg' onClick={showModal}>Add Projects</button>{openAddProjectsModal ? <AddProjects closeModal={closeModal}  /> : null}
                </div>



                <div className='w-full h-auto mt-10 flex flex-col items-center p-6 gap-6 ' >
                    {projects.map((item, index) => {
                        return <div key={index} className='w-[80%] h-auto rounded text-black shadow-lg  bg-gray-100 flex justify-between'>
                            <div className='w-[80%] p-4'>
                                <h1 className='border-b-2 font-semibold'>{item.projectName}</h1>
                                
                                <div className='pt-2  rounded-xl'>
                                <button className='hover:scale-105'><a href={item.github} className='bg-zinc-800 text-white pl-4 pr-4 font-light p-2 rounded-full flex'>Github <span className='mt-1 ml-4'><FaGithub /></span></a></button>
                                </div>

                                <div className='border-2 p-2 mt-2  rounded-xl'>
                                    <p className='leading-tight font-sans tetx-white font-medium'>{item.skills}</p>
                                </div>

                                <div className='border-2 p-2 mt-2 rounded-xl'>
                                    <p className='leading-tight font-sans tetx-white'>{item.details}</p>
                                </div>

                            </div>
                            <div className='w-[55vh] h-64 hover:-rotate-[5deg] -rotate-[3deg] hover:scale-105 mt-4 rounded-lg bg-blue-400 lg:flex hidden'>image</div>
                        </div>
                    })}
                </div>
            </section>
        </>
    );
};

export default Portfolio;
