import React from 'react';
import { AppText, skillsList } from './Constants';

const Skills = () => {
  return (
    <section id='skills' className='my-12'>
      <h1 className='text-4xl font-bold border-b-2 mb-6'>
        {AppText.Skills}
        <span className='text-purple-600'>{AppText.Experties}</span>
      </h1>
      <div className='flex justify-center'>
        <div className='flex gap-10'>
          {skillsList.map((item, index) => (
            <div
              key={index}
              className='p-4 border rounded-md hover:shadow-md transition-transform duration-300 transform hover:scale-105'
            >
              <img src={item.logo} className='w-16 h-16 mx-auto mb-4' alt={item.icon} />
              <h1 className='text-lg font-semibold text-center'>{item.icon}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
