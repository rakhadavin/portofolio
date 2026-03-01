import React from 'react'
import Image from 'next/image'

const TechStack = () => {
  return (
    <section className='relative w-full  font-medium text-4xl font-poppins  text-white h-full  items-center justify-evenly py-8 px-24 gap-14 mt-8 flex flex-col '>
      <div className="absolute top-20 -left-10 w-200 h-100 bg-pink-main rounded-full blur-3xl opacity-20 z-0"></div>
      <Image src="/ai-person.svg" alt="tech stack" width={600} height={100} className='absolute z-2 -left-50 top-12' />
    <div className="pointer-events-none absolute bottom-0 -left-50 right-0 h-40 bg-gradient-to-t from-dark-purple/100 to-transparent z-20" />
      <h1 className=' uppercase font-bold text-gradient-animated w-full text-center z-99 '>Tech Stack</h1>
      <div className='container-techstack flex flex-row gap-2 items-stretch justify-evenly flex-wrap w-full h-full z-999'>


        <div className='content-wraper-techstack flex flex-col items-center gap-8 bg-white/12 backdrop-blur-xl px-4 pt-4 pb-4 rounded-2xl  h-auto border border-white  '>
          <div className='title uppercase font-bold text-white bg-dark-purple w-max px-4 py-2 text-center rounded-2xl border border-white text-xl mb-4 '>
            Database
          </div>
          <div className='flex flex-col  items-center justify-between gap-4  '>
            <Image src="/postgre.svg" alt="postgres" width={90} height={90} />
            <Image src="/mysql.svg" alt="mysql" width={90} height={20} />
            <Image src="/prisma.svg" alt="prisma" width={150} height={20} />
          </div>
        </div>

        

        <div className='content-wraper-techstack flex flex-col items-center gap-8 bg-white/12 backdrop-blur-xl px-4 pt-4 pb-4 rounded-2xl border border-white h-auto '>
          <div className='title uppercase font-bold text-white bg-dark-purple w-max px-4 py-2 text-center rounded-2xl border border-white text-xl mb-4 '>
            frontend
          </div>
          <div className='flex flex-col  items-center justify-between  gap-4  h-full '>
            <Image src="/nextjs.svg" alt="postgres" width={60} height={90} />
            <Image src="/tailwind.svg" alt="mysql" width={150} height={90}  />
            <Image src="/vue.svg" alt="prisma" width={60} height={20} />
            <Image src="/springboot.svg" alt="prisma" width={60} height={20} />
            <Image src="/python.svg" alt="prisma" width={60} height={20} />
          </div>
        </div>

        

        <div className='content-wraper-techstack flex flex-col items-center gap-8 bg-white/12 backdrop-blur-xl px-4 pt-4 pb-4 rounded-2xl border border-white '>
          <div className='title uppercase font-bold text-white bg-dark-purple w-max px-4 py-2 text-center rounded-2xl border border-white text-xl mb-4 '>
            backend
          </div>
          <div className='flex flex-col  items-center justify-evenly gap-8 h-full '>
            <Image src="/springboot.svg" alt="postgres" width={60} height={90} />
            <Image src="/python.svg" alt="mysql" width={60} height={90} />
            <Image src="/nestjs.svg" alt="prisma" width={60} height={20} />
          </div>
        </div>

        

        <div className='content-wraper-techstack flex flex-col items-center gap-8 bg-white/12 backdrop-blur-xl px-4 pt-4 pb-4 rounded-2xl border border-white '>
          <div className='title uppercase font-bold text-white bg-dark-purple w-max px-4 py-2 text-center rounded-2xl border border-white text-xl mb-4 '>
            Data & BI
          </div>
          <div className='flex flex-row gap-12 items-start justify-evenly flex-wrap w-full h-full '>
            <div className='flex flex-col  items-center justify-evenly gap-8'>
              <Image src="/python.svg" alt="postgres" width={60} height={90} />
              <Image src="/pbi.svg" alt="mysql" width={40} height={90} />
              <Image src="/papps.svg" alt="prisma" width={60} height={20} />
            </div>
            <div className='flex flex-col  items-center justify-evenly gap-8 '>
              <Image src="/excel.svg" alt="postgres" width={60} height={90} />
              <Image src="/automate.svg" alt="mysql" width={60} height={90} />
            </div>
          </div>
        </div>

        
      </div>

    </section>
  )
}

export default TechStack
