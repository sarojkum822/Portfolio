import React, { useState } from 'react'

const Navbar = () => {

    const [toggle, setToggle] = useState(true);
    const [contact, setContact] = useState(false);


    const showContact =()=>{
        setContact(true);
    }
    
    const hideContact =()=>{
        setContact(false);
    }
    

    

    return (

        //parent div
        <div className='border-b-2'>
            {/* child div */}
            <div className='flex justify-between'>
                <img src="data:image/png;base64,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" alt="" className='w-[5%] h-[2%] bg-pink-500' />
                {/* child of child div */}
                <div>
                    <ul className='hidden md:flex'>
                        <a href='#home' className='mr-8 select-none translate-all ease-in-out hover:scale-105 cursor-pointer text-2xl font-light'>Home</a>
                        <a href='#about' className='mr-8 select-none translate-all ease-in-out hover:scale-105 cursor-pointer text-2xl font-light'>About Me</a>
                        <a href='#skills' className='mr-8 select-none translate-all ease-in-out hover:scale-105 cursor-pointer text-2xl font-light'>Skills</a>
                        <a href='#blog' className='mr-8 select-none translate-all ease-in-out hover:scale-105 cursor-pointer text-2xl font-light'>Blog</a>
                        <a href='#contact' className='mr-8 select-none translate-all ease-in-out hover:scale-105 cursor-pointer text-2xl font-light' onMouseEnter={showContact} onMouseLeave={hideContact}>Contact Us
                            <span className='flex flex-col text-[3vh] text-black bg-sky-400' >{contact ? <ul className='border w-32 border-b-gray-600 ml-2 absolute flex flex-col bg-gray-300'>
                                    <a href='#whatsapp' className='text-nowrap text-base relative font-light rounded-sm hover:bg-sky-600 hover:text-white '>WhatsApp</a>
                                    <a href='#mail' className='text-nowrap text-base relative font-light rounded-sm  hover:bg-sky-600 hover:text-white'>Mail</a>
                                    <a href='#instagram' className='text-nowrap text-base relative font-light rounded-sm  hover:bg-sky-600 hover:text-white'>Instagram</a>
                            </ul> : null}</span></a>
                        <a  href='#protfolio' className='mr-8 select-none translate-all ease-in-out hover:scale-110 cursor-pointer text-2xl font-light'>Protfolio</a>
                    </ul>
                </div>
                <div className='md:hidden lg:hidden'>

                    {!toggle ? <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setToggle(true)} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />

                    </svg>
                        : <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setToggle(false)} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    }
                    {toggle ? <ul className='flex flex-col bg-zinc-200 pl-2 pr-2'>
                        <a href='#home' className='select-none translate-all ease-in-out hover:scale-110 cursor-pointer text-2xl font-light hover:bg-zinc-500'>Home</a>
                        <a href='#about' className='select-none translate-all ease-in-out hover:scale-110 cursor-pointer text-2xl font-light hover:bg-zinc-500'>About Me</a>
                        <a href='#skills' className='select-none translate-all ease-in-out hover:scale-110 cursor-pointer text-2xl font-light hover:bg-zinc-500'>Skills</a>
                        <a href='#blog' className='select-none translate-all ease-in-out hover:scale-110 cursor-pointer text-2xl font-light hover:bg-zinc-500'>Blog</a>
                        <a className='select-none translate-all ease-in-out hover:scale-110 cursor-pointer text-2xl font-light hover:bg-zinc-500'>Contact Us</a>
                        <a href='#protfolio' className='select-none translate-all ease-in-out hover:scale-110 cursor-pointer text-2xl font-light hover:bg-zinc-500'>Protfolio</a>
                    </ul> : null}
                </div>
            </div>

        </div>
    )
}

export default Navbar