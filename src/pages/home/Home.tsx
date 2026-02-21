import React from 'react'
import CoreExpertise from './CoreExpertise'

const Home = () => {
    return (
        <section className='bg-[#F5F5F5] h-screen w-full flex flex-col items-center justify-center gap-10 text-2xl text-black bg-gradient-blue-basic'>
            Home Page
            <CoreExpertise />
        </section>
    )
}

export default Home
