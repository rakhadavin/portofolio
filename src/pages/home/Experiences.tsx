import React from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

const Experiences = () => {
  return (
      <section className='w-screen core-expertise font-medium text-4xl font-poppins  text-white h-full grid grid-cols-2 items-center justify-evenly py-8 px-24 gap-14 mt-8'>
          <section className='flex flex-col gap-8  '>
            
              <div className='flex flex-col items-center justify-center w-full text-gradient-animated font-bold font-josefinSans'>
                  <h1 className='uppercase'>WORK EXPERIENCES</h1>
              </div>

              <div className='content-workex    flex flex-col justify-center items-center gap-4'>
                  
                  <div className='contaainer-items border border-white/35 bg-white/4 backdrop-blur-sm rounded-lg p-6 text-white font-poppins text-sm w-full flex flex-col  justify-center gap-2 items-center h-40 px-12 text-justify'>
                      <p className='w-full flex justify-end font-poppins font-light'>January - February 2026</p>
                      <div className='logo-title flex flex-row items-center gap-4 justify-between  w-full '>
                          <div className='logo-title flex flex-row items-center gap-4  '>
                            <Image src="blibli.svg" alt="Company Logo" width={50} height={50}></Image>
                            <div  className='font-josefinSans tracking-wide'>
                                <h1 className='uppercase text-2xl font-bold'>CRM Data Analyst </h1>
                                <p className='uppercase text-lg  font-poppins'>BLIBLI.com</p>
                            </div>
                          </div>
                              <ChevronRight />
                      </div>
                  </div>

              </div>
              
          </section>


          <section className='flex flex-col gap-8  '>
            
              <div className='flex flex-col items-center justify-center w-full text-gradient-animated font-bold font-josefinSans'>
                  <h1 className='uppercase'>SOFt skills</h1>
              </div>

              <div className='content-workex    flex flex-col justify-center items-center gap-4'>
                  
                  <div className='contaainer-items border border-white/35 bg-white/4 backdrop-blur-sm rounded-lg p-6 text-white font-poppins text-sm w-full flex flex-col  justify-center gap-4 items-center h-40 px-12 text-justify'>
                      <div className='logo-title flex flex-row items-center gap-4 justify-between  w-full '>
                          
                            <div  className='font-josefinSans tracking-wide'>
                                <h1 className='uppercase text-2xl font-bold'>Adaptable </h1>
                                <p className='uppercase text-lg  font-poppins'>Thrive in fast-paced environments and deliver under pressure.</p>
                            </div>
                      </div>
                  </div>

              </div>
              
          </section>
          
      
    </section>
  )
}

export default Experiences
