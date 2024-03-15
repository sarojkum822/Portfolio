import React from 'react'
import '../App.css'
import { AppText, aboutSection } from './Constants'

const About = () => {
    return (
        <>
       <section id='about'>
       <div className='flex flex-col'>
            <div className='w-full '>
            <img src='/image.svg' className='w-[20%] absolute p-4' />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,224L80,234.7C16,245,320,267,480,245.3C640,224,800,160,960,133.3C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <div className='bg-[#0099ff] w-full h-[600px] justify-center'>
                <h1 className='text-[50px] font-semibold text-center text-white p-4'>{AppText.about}<span className='text-zinc-900'> {AppText.Me}</span></h1>
                <h2 className='md:px-8 text-gray-200 text-center text-[30px] leading-tight mt-10 px-4 lg:px-8 overflow-ellipsis overflow-hidden whitespace-normal'>{AppText.aboutMeDescripion}</h2>
            </div>
            
            <div className='flex flex-col md:flex-row justify-around items-center mt-[-50px]'>
                {aboutSection.map((item,index)=>{
                  return   <div key={index} className='flex flex-col pl-4 pr-4 pt-4  hover:text-black rounded-lg cursor-pointer transition-all ease-out hover:scale-105 shadow-xl'>
                        <img src={item.image} className='w-[250px] rounded-md  object-cover'/>
                            <div className='w-[34vh] h-[20vh] items-center text-center '>
                        <h1 className='font-bold '>{item.title}</h1>
                        <h2 className='text-[15px] text-gray-900 text-center'>{item.desc}</h2>

                            </div>
                    </div>
                })}
            </div>
            </div>

        </div>
       </section>
        </>
    );
};

export default About;


