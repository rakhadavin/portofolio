import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { Github, Plus } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { GithubIcon } from '../ui/github'

const Projects = () => {
  return (
      <section className="relative min-h-screen flex flex-col items-stretch justify-center border border-black w-full ">
        <section className="greetings">
                <div className="absolute left-1/2 top-28 -translate-x-1/2 z-0">
                 <div className="h-[320px] w-[700px] rounded-full bg-purple-main blur-[140px] animate-glow-pulse" />
                </div>
                <div className="text-center z-99 mt-8 ">
                    <h1 className='text-7xl text-purple-main font-bold font-josefinSans uppercase'>PROJECTS</h1>
                    <p className='text-white font-light font-josefinSans'>Discover my projects and make the collaborations</p>
                </div>
        </section>
        <div className='flex flex-row items-center justify-end w-full mt-8'>
        <Button className="bg-white text-dark-purple border border-white  text-xl py-2 px-4">  <Plus /> <p>New Project</p></Button>    
        </div>
        <section className="projects-container flex flex-col items-center justify-center w-full mt-20 border border-white">
              
          <div className='content-HP-boxes-items  border hover:border-white/20 rounded-2xl bg-white/10 backdrop-blur-2xl px-8 py-4 w-[20%] h-full flex flex-col gap-6  hover:scale-100.5 transition-all duration-300 cursor-pointer '>
            <div className='top-badge flex flex-row items-center justify-between w-full text-white'>
              <div className='category-badge text-sm font-poppins font-light border border-white bg-white/10 rounded-xl px-4 py-2 flex items-center gap-2 w-max'>
                <p className='uppercase text-white '>data science | ai</p>
              </div>
              <p className='uppercase text-sm font-light tracking-wider'>August 2025</p>
            </div>

            <div className='prj-img h-full w-full rounded-6xl'>
              <Image src="/project-img.png" alt="Project Image" width={500} height={500} className='rounded-sm' />
            </div>

            <div className='flex flex-col gap-4 '>
              <div className='flex flex-row items-center gap-4 text-white '>
                <div className='flex flex-row w-full gap-4 '>
                  <Image src="/logo-prj.png" alt="Project Image" width={25} height={20} />
                              <a className='text-2xl font-bold text-white font-josefinSans tracking-wide hover:underline ' href='/home'>Biblio.io</a>
                              
                   
               
                </div>
                <Button variant="ghost" size="icon-lg" className="text-white border border-white/10" asChild> 
                    <Link href="https://github.com/rakhadavin/biblio-io" target="_blank">
                            <GithubIcon className='p-1 rounded-xl'  color='black' />
                    </Link>   
                </Button>
                </div>
              <p className='text-sm font-light text-justify text-white'>AI-powered research assistant that streamlines literature discovery, summarization, and citation management in one seamless platform.</p>
            </div>
                  
            <div className='flex flex-row items-center  gap-2 text-white w-full h-full  rounded-md my-2 '>
                     
                      <Button variant="secondary" className=" flex-1 bg-dark-purple text-white w-full hover:bg-dark-purple/50">See Details</Button>
                      
                </div>
          </div>


              
          </section>
    </section>
  )
}

export default Projects
