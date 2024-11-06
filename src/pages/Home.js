import React from 'react'
import Navbar from '../components/Navbar'
import Profile from '../components/Profile'

const Home = () => {
  return (
    // <div id='home' className='bg-darkblue'>
      <div id='home' className='bg-gradient-to-tr from-blue-700 via-violet-800 to-fuchsia-900'>
        <Navbar/>
        <Profile/>
    </div>
  )
}

export default Home