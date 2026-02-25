import CoreExpertise from '../pages/home/CoreExpertise'
import LandingPage from '../pages/home/landingPage/LandingPage'

const page = () => {
  return (
    <section className=' h-full w-full flex flex-col items-center justify-center text-2xl text-black bg-gradient-purple-light px-8 '>
      <LandingPage />
      <CoreExpertise />

    </section>
  )
}

export default page
