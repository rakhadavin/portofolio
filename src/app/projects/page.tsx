import Projects from '@/components/Projects/page'
import UnderDevelopment from '@/components/UnderDevelopment/UnderDevelopment'
import React from 'react'

const page = () => {
  return (
    <section className='h-full w-full flex flex-col items-center justify-center text-2xl text-black bg-dark-purple  px-8 pt-12'>
      {/* <UnderDevelopment /> */}
      <Projects />
    </section>
  )
}

export default page
