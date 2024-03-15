import React from 'react'
import { socialNetwork } from './Constants'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Contact = () => {

  // useGSAP(() => {
  //   gsap.to(".box", { x: 360 });
  // })


  return (
    <section id='contact'>

      <div className='w-full h-[40%] bg-zinc-100 flex flex-col text-center items-center p-10'>
        <div className='w-64 h-10 bg-zinc-800 rounded-full'>
          <h1 className='text-3xl text-white text-center'>Contact</h1>

        </div>
        <div className='flex gap-2 pl-2 pr-2 mt-4 grid-cols-1'>
          {socialNetwork.map((item, index) => {
            return <div key={index} className='border-[1px] border-zinc-900 rounded-md hover:scale-110 hover:bg-zinc-400 hover:text-white pl-4 pr-4 text-black font-light'>
              <a href={`mailto:${item.link}`} className='flex'>{item.logo}</a>

            </div>
          })}
        </div>
        <div className='bg-white flex flex-col items-center p-2 border-separate  mt-2 rounded-lg'>
          <input type="text" placeholder='Enter Your message here' className='w-[50vh] h-52 p-2' />
          <button className='bg-zinc-100 border-2 hover:bg-zinc-300 hover:scale-105 inset-6 pl-4 pr-4 mt-2 p-2 rounded-xl box' >Send Message</button>
        </div>
      </div>
    </section>
  )
}

export default Contact