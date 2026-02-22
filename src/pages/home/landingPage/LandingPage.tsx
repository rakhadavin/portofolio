import Image from "next/image";

import Link from "next/link";
const LandingPage = () => {
    return (
        <section className='h-screen w-full '>
            <div className='sosmed-logo'>
                
                <a></a>
                                
                
                
                <Image src={"/github.svg"} width={40} height={40} alt={""} />
                <Image src={"/linkedin.svg"} width={40} height={40} alt={""} />
                <Image src={"/instagram.svg"} width={40} height={40} alt={""} />
                <Image src={"/whatsapp.svg"} width={40} height={40} alt={""} />
            </div>





        </section>
    )
}

export default LandingPage
