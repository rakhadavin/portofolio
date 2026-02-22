import Image from "next/image";

import Link from "next/link";
const LandingPage = () => {
    return (
        <section className='relative h-screen w-full border border-white '>
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


            <div className=" details-Section absolute top-20 right-0 h-full w-[65%] border border-yellow-400 p-10 z-1000 flex flex-col gap-8">
                <div className="flex flex-col mb-6">
                    <div className="flex flex-row gap-5 justify-between items-end py-4">
                        <h1 className="text-white font-josefinSans text-8xl uppercase font-bold">Rakha Davin</h1>
                        <Link href="/cv" className="text-white underline">View CV</Link>
                    </div>
                    <div className="h-px w-full bg-white/30" />
                </div>

                
                <div className="flex flex-row gap-4 mb-6 text-white font-poppins text-sm w-full justify-between  items-center">
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

                <div className="border border-white/35 bg-white/4 backdrop-blur-sm rounded-lg py-6 px-12 text-white font-poppins text-sm w-full h-max flex flex-row justify-evenly items-center h-full">

                    <div className="left-sided">
                        <div className="flex flex-col ">
                            <div>
                                <p className="text-secondary">Major</p>
                                <p>Computer Science</p>
                            </div>
                            <div className="mt-4 ">
                                <p className="text-secondary">Location</p>
                                <p>East Jakarta, Indonesia</p>
                            </div>
                            <div className="mt-4 ">
                                <p className="text-secondary">Tech Skill</p>
                                <ul className="grid grid-cols-2 gap-x-12 list-disc pl-5 space-y-2 text-white">
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
                                <p>Indonesia | Engish</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-1 h-full bg-white/30" />

                    <div className="right-sided">
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
                    </div>






                </div>



            </div>





        </section>
    )
}

export default LandingPage
