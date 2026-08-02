import CoreExpertise from "../../components/LandingPage/CoreExpertise";
import Experiences from "../../components/LandingPage/Experiences";
import HighlightedProjects from "../../components/LandingPage/HighlightedProjects";
import LandingPage from "../../components/LandingPage/LandingPage";
import TechStack from "../../components/LandingPage/TechStack";
import { currentUser } from "@clerk/nextjs/server";

const Home = async () => {
  const user = await currentUser();

  const email = user?.primaryEmailAddress?.emailAddress;

  const isAuth = email === "rakha.davinalamsyah@gmail.com";

  return (
    <section className="flex h-full w-full flex-col items-center justify-center bg-gradient-purple-light px-8 pt-12 text-2xl text-black">
      <LandingPage isAuth={isAuth} />
      <CoreExpertise isAuth={isAuth} />
      <HighlightedProjects isAuth={isAuth} />
      <Experiences isAuth={isAuth} />
      <TechStack isAuth={isAuth} />
    </section>
  );
};

export default Home;