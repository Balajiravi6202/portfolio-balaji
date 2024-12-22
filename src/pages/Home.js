import React from 'react'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'

const Home = () => {
  return (
    // <div id='home' className='bg-darkblue'>
    
      <div id='home' className='bg-gradient-to-r from-gray-800 via-blue-700 to-gray-900'>
        <Navbar/>
        <Profile/>
    </div>
  )
}

export default Home