'use client'

import React from 'react'
import Image from 'next/image'
import { Github } from 'lucide-react'
import Link from 'next/link'
const HighlightedProjects = () => {
    const [selectedFilter,setSelectedFilter] = React.useState('all')
    const filters = [
      { label: "All", value: "all" },
      { label: "Software Engineer", value: "software-engineer" },
      { label: "Data Analyst", value: "data-analyst" },
      { label: "UI/UX Designer", value: "ui-ux-designer" },
      { label: "AI", value: "ai" },
    ];  



  return (
    <section className='w-screen core-expertise font-medium text-4xl font-poppins  text-white h-full flex flex-col items-center justify-evenly py-8 px-24 mt-8 '>
      <div className='flex flex-col  gap-0'>
        <div className='judul-subjudul flex flex-col  items-center  gap-8'>
          <h1 className='text-5xl text-gradient-animated font-bold uppercase'>HIGHLIGHTED PROJECTS</h1>
          <div className="filter-badge flex gap-4">
            {filters.map((filter) => (
              <div
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                className={`
                    uppercase rounded-2xl px-4 py-2 text-white text-lg
                    transition-all duration-300 cursor-pointer
                    ${selectedFilter === filter.value
                    ? "bg-gradient-purple-pink font-bold tracking-wide " : "bg-dark-purple hover:bg-gradient-purple-pink "
                  }
                  `}
              >
                {filter.label}
              </div>
            ))}
          </div>
        </div>

        <div className='container-HP flex flex-row w-full pt-12 pb-4 gap-8'>


          <div className='content-HP-boxes-items border border-white/35 rounded-2xl bg-white/10 backdrop-blur-2xl px-8 py-4 w-[40%] h-full flex flex-col gap-6 hover:bg-white/20 hover:scale-101 transition-all duration-300 cursor-pointer '>
            <div className='top-badge flex flex-row items-center justify-between w-full'>
              <div className='category-badge text-sm font-poppins font-light border border-white bg-white/10 rounded-xl px-4 py-2 flex items-center gap-2 w-max'>
                <p className='uppercase '>data science | ai</p>
              </div>
              <p className='uppercase text-sm font-light tracking-wider'>August 2025</p>
            </div>

            <div className='prj-img h-full w-full rounded-6xl'>
              <Image src="/project-img.png" alt="Project Image" width={500} height={500} />
            </div>

            <div className='flex flex-col gap-4 '>

              <div className='flex flex-row items-center gap-4 '>
                <div className='flex flex-row w-full gap-4'>
                  <Image src="/logo-prj.png" alt="Project Image" width={25} height={20} />
                  <a className='text-2xl font-bold text-white font-josefinSans tracking-wide hover:underline ' href='/home'>Biblio.io</a>
                </div>
                <Link href="https://github.com/your-username/biblio-io" target="_blank">
                  <Github className='bg-white p-1 rounded-xl' size={40} color='black' />
                </Link>
              </div>
              <p className='text-sm font-light text-justify'>AI-powered research assistant that streamlines literature discovery, summarization, and citation management in one seamless platform.</p>
            </div>
            <div>
            </div>
          </div>



          <div className='content-HP-boxes-items border border-white/35 rounded-2xl bg-gradient-purple-pink backdrop-blur-2xl px-8 py-4 w-[40%] h-full flex flex-col gap-6 hover:bg-white/20 hover:scale-101 scale-105 transition-all duration-300 cursor-pointer '>
            <div className='top-badge flex flex-row items-center justify-between w-full'>
              <div className='category-badge text-sm font-poppins font-light border border-white bg-white/10 rounded-xl px-4 py-2 flex items-center gap-2 w-max'>
                <p className='uppercase '>data science | ai</p>
              </div>
              <p className='uppercase text-sm font-light tracking-wider'>August 2025</p>
            </div>

            <div className='prj-img h-full w-full rounded-6xl'>
              <Image src="/project-img.png" alt="Project Image" width={500} height={500} />
            </div>

            <div className='flex flex-col gap-4 '>

              <div className='flex flex-row items-center gap-4 '>
                <div className='flex flex-row w-full gap-4'>
                  <Image src="/logo-prj.png" alt="Project Image" width={25} height={20} />
                  <a className='text-2xl font-bold text-white font-josefinSans tracking-wide hover:underline ' href='/home'>Biblio.io</a>
                </div>
                <Link href="https://github.com/your-username/biblio-io" target="_blank">
                  <Github className='bg-white p-1 rounded-xl' size={40} color='black' />
                </Link>
              </div>
              <p className='text-sm font-light text-justify'>AI-powered research assistant that streamlines literature discovery, summarization, and citation management in one seamless platform.</p>
            </div>
            <div>
            </div>
          </div>





          <div className='content-HP-boxes-items border border-white/35 rounded-2xl bg-white/10 backdrop-blur-2xl px-8 py-4 w-[40%] h-full flex flex-col gap-6 hover:bg-white/20 hover:scale-101 transition-all duration-300 cursor-pointer '>
            <div className='top-badge flex flex-row items-center justify-between w-full'>
              <div className='category-badge text-sm font-poppins font-light border border-white bg-white/10 rounded-xl px-4 py-2 flex items-center gap-2 w-max'>
                <p className='uppercase '>data science | ai</p>
              </div>
              <p className='uppercase text-sm font-light tracking-wider'>August 2025</p>
            </div>

            <div className='prj-img h-full w-full rounded-6xl'>
              <Image src="/project-img.png" alt="Project Image" width={500} height={500} />
            </div>

            <div className='flex flex-col gap-4 '>

              <div className='flex flex-row items-center gap-4 '>
                <div className='flex flex-row w-full gap-4'>
                  <Image src="/logo-prj.png" alt="Project Image" width={25} height={20} />
                  <a className='text-2xl font-bold text-white font-josefinSans tracking-wide hover:underline ' href='/home'>Biblio.io</a>
                </div>
                <Link href="https://github.com/your-username/biblio-io" target="_blank">
                  <Github className='bg-white p-1 rounded-xl' size={40} color='black' />
                </Link>
              </div>
              <p className='text-sm font-light text-justify'>AI-powered research assistant that streamlines literature discovery, summarization, and citation management in one seamless platform.</p>
            </div>
            <div>
            </div>
          </div>





        </div>
      </div>
      <Link href="/projects" className="text-white font-light underline text-lg underline-offset-4 w-full text-end">Explore My Projects</Link>
      
    </section>
  )
}

export default HighlightedProjects
