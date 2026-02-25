import React from 'react'
import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';
const CoreExpertise = () => {
    return (
        <section className=" w-screen core-expertise font-medium text-4xl font-poppins  text-white h-full flex flex-col items-center justify-evenly mt-8 py-8 px-24 gap-14">
            <div className='judul-subjudul flex flex-col  items-center '>
                <h1 className='text-5xl text-gradient-animated font-bold uppercase'>CORE EXPERTISE</h1>
                <p className='text-xl font-light'>Technical and Hard Skills</p>
            </div>

            <div className='skills-content max-w-[80%] gap-4 flex flex-col'>
                <div className='containetr_item group grid grid-cols-[1.2fr_2fr_auto]  border border-pink-main rounded-xl px-24 py-10 justify-between items-center gap-10 w-full hover:bg-gradient-dark-purple hover:scale-101 shadow-2xl bg-white/4 backdrop-blur-md transition-all duration-300 hover:border-white  '>
                    <div className='font-josefinSans font-bold text-white flex flex-row items-center gap-4 w-50% '>
                        <p className='text-purple-main '>01</p>
                        <h1 className='uppercase text-2xl line-clamp-2  '>Software Engineer & Automation Developer</h1>
                    </div>
                    <p className='text-sm  font-poppins font-light text-justify '>Design and develop scalable applications and automated business solutions that streamline processes, improve efficiency, and deliver measurable operational impact.</p>
                    <Link href={'/expertise'} className='transition-transform duration-300 group-hover:rotate-90' >

                        <MoveUpRight size={30} />
                    </Link>
                </div>




                <div className='containetr_item group grid grid-cols-[1.2fr_2fr_auto]  border border-pink-main rounded-xl px-24 py-10 justify- items-center gap-10 w-full hover:bg-gradient-dark-purple hover:scale-101 shadow-2xl bg-white/4 backdrop-blur-md transition-all duration-300 hover:border-white  '>
                    <div className='font-josefinSans font-bold text-white flex flex-row items-center gap-4 w-50%   '>
                        <p className='text-purple-main'>02</p>
                        <h1 className='uppercase text-2xl line-clamp-2 '>Data Analyst</h1>
                    </div>
                    <p className='text-sm  font-poppins font-light text-justify '>Transform raw data into actionable insights that drive smarter, data-informed business decisions.</p>
                    <Link href={'/expertise'} className='transition-transform duration-300 group-hover:rotate-90' >

                        <MoveUpRight size={30} />
                    </Link>
                </div>




                <div className='containetr_item group grid grid-cols-[1.2fr_2fr_auto]  border border-pink-main rounded-xl px-24 py-10 justify-evenly items-center gap-10 w-full hover:bg-gradient-dark-purple hover:scale-101 shadow-2xl bg-white/4 backdrop-blur-md transition-all duration-300 hover:border-white  '>
                    <div className='font-josefinSans font-bold text-white flex flex-row items-center gap-4 w-full  '>
                        <p className='text-purple-main'>02</p>
                        <h1 className='uppercase text-2xl line-clamp-2 '>DATA SCIENCTIST | AI</h1>
                    </div>
                    <p className='text-sm  font-poppins font-light text-justify '>Leverage machine learning and AI techniques to uncover patterns, predict outcomes, and create intelligent solutions.</p>
                    <Link href={'/expertise'} className='transition-transform duration-300 group-hover:rotate-90' >

                        <MoveUpRight size={30} />
                    </Link>
                </div>





                <div className='containetr_item group grid grid-cols-[1.2fr_2fr_auto]  border border-pink-main rounded-xl px-24 py-10 justify-evenly items-center gap-10 w-full hover:bg-gradient-dark-purple hover:scale-101 shadow-2xl bg-white/4 backdrop-blur-md transition-all duration-300 hover:border-white  '>
                    <div className='font-josefinSans font-bold text-white flex flex-row items-center gap-4 w-full  '>
                        <p className='text-purple-main'>01</p>
                        <h1 className='uppercase text-2xl line-clamp-2 '>UI/UX Design</h1>
                    </div>
                    <p className='text-sm  font-poppins font-light text-justify '>Design intuitive, user-centered interfaces that enhance usability while aligning with business objectives.</p>
                    <Link href={'/expertise'} className='transition-transform duration-300 group-hover:rotate-90' >

                        <MoveUpRight size={30} />
                    </Link>
                </div>



            </div>
        </section>
    )
}

export default CoreExpertise
