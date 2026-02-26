import CoreExpertise from '../pages/home/CoreExpertise'
import Experiences from '../pages/home/Experiences'
import HighlightedProjects from '../pages/home/HighlightedProjects'
import LandingPage from '../pages/home/landingPage/LandingPage'
import TechStack from '../pages/home/TechStack'

const page = () => {
  return (
    <section className=' h-full w-full flex flex-col items-center justify-center text-2xl text-black bg-gradient-purple-light px-8 '>
      <LandingPage />
      <CoreExpertise />
      <HighlightedProjects />
      <Experiences />
      <TechStack />

    </section>
  )
}

export default page
