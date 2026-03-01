import CoreExpertise from '../../components/LandingPage/CoreExpertise'
import Experiences from '../../components/LandingPage/Experiences'
import HighlightedProjects from '../../components/LandingPage/HighlightedProjects'
import LandingPage from '../../components/LandingPage/LandingPage'
import TechStack from '../../components/LandingPage/TechStack'

const Home = () => {
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

export default Home
