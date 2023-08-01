import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'


function Layout() {
  return (
    <div className='flex flex-col justify-between min-h-screen bg-gray-300'>
      <Navbar />
      <div className="container mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout
