import Image from "next/image";

import Link from "next/link";
const LandingPage = () => {
    return (
        <section className='relative h-screen w-full '>
            <div className='sosmed-logo  w-max h-screen flex flex-col justify-center'>
                <Link href="https://github.com/rakhadavin" target="_blank">
                    <Image src={"/github.svg"} width={40} height={40} alt={"GitHub"} />
                </Link>
                <Link href="https://www.linkedin.com/in/rakha-davin-bani-alamsyah-0b038a262/" target="_blank">
                    <Image src={"/linkedin.svg"} width={40} height={40} alt={"LinkedIn"} />
                </Link>
                <Link href="https://instagram.com/rakha.davin_alamsyah" target="_blank">
                    <Image src={"/instagram.svg"} width={40} height={40} alt={"Instagram"} />
                </Link>
                <Link href="https://wa.me/089508354704" target="_blank">
                    <Image src={"/whatsapp.svg"} width={40} height={40} alt={"WhatsApp"} />
                </Link>
            </div>

            <div className="absolute left-36 top-0 h-full w-96 bg-white"></div>
            <img
                src="/davin.png"
                alt="Profile"
                className="absolute  top-1/2 z-10 scale-45 -translate-y-1/2 -left-40 fade-bottom "
            />
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/70 to-transparent z-20" />


            <div className=" details-Section absolute top-20 right-0 h-max w-[65%]  p-10 z-1000 flex flex-col gap-8">
                <div className="flex flex-col mb-6">
                    <div className="flex flex-row gap-5 justify-between items-end py-4">
                        <h1 className="text-white font-josefinSans text-8xl uppercase font-bold">Rakha Davin</h1>
                        <Link href="/cv" className="text-white underline text-sm font-light">View CV</Link>
                    </div>
                    <div className="h-px w-full bg-white/30" />
                </div>


                <div className="flex flex-col justify-evenly h-max">

                    <div className=" container-details1 flex flex-row gap-4 mb-6 text-white font-poppins text-sm w-full justify-between  items-center">
                        <div className="flex flex-col ">
                            <div>
                                <p className="text-secondary">Fullname</p>
                                <p>Rakha Davin Bani Alamsyah</p>
                            </div>
                            <div className="mt-4 ">
                                <p className="text-secondary">Education</p>
                                <p>Bachelor of Computer Science, Universitas Indonesia</p>
                            </div>
                        </div>


                        <div className="flex flex-col w-1/6  ">
                            <div>
                                <p className="text-secondary">Birth</p>
                                <p>February, 2004</p>
                            </div>
                        </div>


                        <div className="flex flex-col ">
                            <div>
                                <p className="text-secondary">Focus</p>
                                <p>Software Engineer | Data Analyst </p>
                            </div>
                            <div className="mt-4">
                                <p className="text-secondary">last Experience</p>
                                <p>CRM Data Analyst @Blibli.com</p>
                            </div>
                        </div>
                    </div>

                    <div className=" container-details2 border border-white/35 bg-white/4 backdrop-blur-sm rounded-lg py-6 text-white font-poppins text-sm w-full flex flex-row  justify-center gap-12 items-center h-max px-12 text-justify">

                        <div className="left-sided flex flex-col w-screen">
                            <div className=" ">
                                <p className="text-secondary">Major</p>
                                <p>Computer Science</p>
                            </div>
                            <div className="mt-4 ">
                                <p className="text-secondary">Location</p>
                                <p>East Jakarta, Indonesia</p>
                            </div>
                            <div className="mt-4 ">
                                <p className="text-secondary">Tech Skill</p>
                                <ul className="w-full grid grid-cols-2 gap-x-24 list-disc pl-5 space-y-2 text-white whitespace-nowrap">
                                    <li>Fullstack Developer</li>
                                    <li>Big Data</li>
                                    <li>UI/UX</li>
                                    <li>AI</li>
                                    <li>Business Intelligent</li>
                                    <li>Data Science</li>
                                </ul>
                            </div>
                            <div className="mt-4 ">
                                <p className="text-secondary">Language</p>
                                <p>Indonesia | English</p>
                            </div>
                        </div>

                        {/* VERTIICAL LINE */}
                        <div className="w-1 h-full bg-white/30">


                        </div>

                        {/* VERTIICAL LINE */}



                        <div className="right-sided">
                            <div className="flex flex-col ">
                                <div>
                                    <p className="text-secondary">About Me</p>
                                    <p>Final-year Computer Science student with 3+ years of experience in full-stack development, UI/UX, and data analytics. Experienced in building scalable, data-driven applications and extracting insights to support business decisions. Recently worked as a CRM Data Analyst at Blibli, focusing on customer data analysis and performance optimization.</p>
                                </div>

                                <div className="last-section-right flex flex-row mt-12 items-center justify-center">
                                    <div className=" w-full ">
                                        <p className="text-secondary">Highilighted Project</p>
                                        <Link href="/cv" className="text-white underline text-sm font-light">DPM UI Company Profile</Link>

                                    </div>
                                    <div className="text-nowrap bg-white/7 backdrop-blur-sm w-max px-4 py-2 rounded-lg text-white text-sm flex flex-row items-center justify-evenly gap-2 border border-white/35">
                                        Discover My Projects
                                    </div>



                                </div>
                            </div>
                        </div>






                    </div>

                </div>





            </div>





        </section>
    )
}

export default LandingPage
