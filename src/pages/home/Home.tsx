import CoreExpertise from '../../components/LandingPage/CoreExpertise'
import Experiences from '../../components/LandingPage/Experiences'
import HighlightedProjects from '../../components/LandingPage/HighlightedProjects'
import LandingPage from '../../components/LandingPage/LandingPage'
import TechStack from '../../components/LandingPage/TechStack'
import { auth, currentUser } from '@clerk/nextjs/server'
const Home = async () => {
  const { isAuthenticated } = await auth()

  // Protect the route by checking if the user is signed in
  if (!isAuthenticated) {
    return <div>Sign in to view this page</div>
  }

  // Get the Backend User object when you need access to the user's information
  const user = await currentUser()
  const isAuth = user?.emailAddresses[0].emailAddress === "rakha.davinalamsyah@gmail.com"
  console.log('user', user?.emailAddresses[0].emailAddress)
  return (
    <section className=' h-full w-full flex flex-col items-center justify-center text-2xl text-black bg-gradient-purple-light px-8 pt-12'>
      <LandingPage isAuth={isAuth} />
      <CoreExpertise isAuth={isAuth} />
      <HighlightedProjects isAuth={isAuth} />
      <Experiences isAuth={isAuth} />
      <TechStack />
    </section>
  )
}

export default Home
