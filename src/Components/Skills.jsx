import React, { useEffect, useState } from 'react'
import { AppText, skillsList} from './Constants'

const Skills = () => {


 
  return (
    <>
        <section id='skills' className='m-6'>
            <h1 className='text-[40px] font-bold border-b-2'>{AppText.Skills}<span className='text-purple-600'>{AppText.Experties}</span></h1>
            <div className='flex justify-center '>
            <div className='w-full h-screen p-10'>
                {skillsList.map((item,index)=>{
                    return <div key={index} className='w-22 h-14 p-2 border mt-8 flex justify-between'>
                        <img src={item.logo} className='w-16 h-16'/>
                        <h1 className='text-[20px]'>{item.icon}</h1>
                    </div>
                })}
            </div>

                    <div className='w-[40vh] h-[40vh]  flex right-0 relative mt-[-14vh] object-contain rounded-full'>
                        <img src="/skills2.jpg" className='rounded-full'/>
                    </div>
            </div>
           

        </section>
    
    </>
  )
}

export default Skills