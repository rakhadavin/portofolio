import Navbar from '@/components/Navbar/Navbar'
import Home from '../pages/home/Home'

const page = () => {
  return (
    <div className='flex flex-col ' >
      <Navbar />
      <Home />
    </div >
  )
}

export default page
