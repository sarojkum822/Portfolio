import React, { useState } from 'react'
import axios from 'axios';


const AddProjects = ({closeModal}) => {

    const [formData, setFormDta] = useState({
        projectName: "",
        skills: "",
        details: "",
        date: "",
        github: ""
    });

    const handleChange = (e) => {
        setFormDta({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit =async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/addprojects',formData);
            console.log('Project Created',response.data);
            setFormDta({
                projectName: "",
                skills: "",
                details: "",
                date: "",
                github: ""
            });
            closeModal();
        } catch (error) {
            console.log('Error Creating Projects',error);
        }
    }

   



    return (
        <div className='w-full h-screen bg-zinc-100 flex items-center justify-center'>
            <div className='w-[80%] h-[84vh] border-2 rounded-md bg-zinc-200 border-b-gray-900 flex flex-col gap-4 p-4'>

                <form action="" className="flex flex-col gap-4 "     >
                    <input type="text" name='projectName' placeholder='Project Name' value={formData.projectName} onChange={handleChange} className='text-black w-full rounded-md p-4 hover:scale-105' />
                    <input type="text" name='date' placeholder='Date' value={formData.date} onChange={handleChange} className='w-full rounded-md p-4 hover:scale-105' />
                    <input type="text" name='skills' placeholder='Skills' value={formData.skills} onChange={handleChange} className='w-full rounded-md p-4  hover:scale-105' />
                    <input type="text" name='details' placeholder='Details' value={formData.details} onChange={handleChange} className='w-full h-[20vh] rounded-md p-4 hover:scale-105' />
                    <input type="text" name='github' placeholder='Github LInk' value={formData.github} onChange={handleChange} className='w-full h-[20vh] rounded-md p-4 hover:scale-105' />

                    <button className='w-40 h-10 bg-sky-500 rounded-md self-end hover:scale-105' onClick={handleSubmit} >Submit</button>
                </form>

            </div>

        </div>
    )
}

export default AddProjects