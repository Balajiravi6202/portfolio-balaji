import React from 'react'
import {  FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


const SocialHandles = () => {
  return (
    <div data-aos="zoom-in-up" data-aos-duration="1500" data-aos-once="false" className="flex gap-5 my-4">
        <a className="text-white text-2xl md:text-xl transition duration-700 hover:scale-125" href="https://github.com/Balajiravi6202" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a className="text-white text-2xl md:text-xl transition duration-700 hover:scale-125" href="https://www.linkedin.com/in/balaji-r-620216r" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        
        <a className="text-white text-2xl md:text-xl transition duration-700 hover:scale-125" href="https://www.instagram.com/trending_balaji_06/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        
    </div>
  )
}

export default SocialHandles