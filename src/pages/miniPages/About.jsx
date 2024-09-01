import React from 'react'
import profileImg from '../../assets/pitambar.jpeg'

const About = () => {
  return (
    <div className=' bg-white text-primary container mt-6 md:px-20 px-8 pb-4 mx-auto '>
        
      <h2 className=' md:text-3xl text-xl font-medium md:pt-6 pt-2 text-gray-800'>About Us</h2>
      <div className=' md:size-60 size-40 flex flex-col items-center md:mt-16 mt-6'>        
        <img src={profileImg} alt="profile image" className=' w-full h-full bg-cover rounded-full ring-2 ring-cyan-100 ' />
        <p className=' mt-4 italic text-gray-600 '>Pitambar majhi</p>
      </div>

      <div className=' space-y-6 mt-20 md:px-6 px-1  '>
        <p className=' '>
          I’m passionate about discovering and showcasing travel destinations that aren’t commonly known or visited.
          Through my blog, I take readers on a journey to explore unique and lesser-known spots around the world, 
          offering a fresh alternative to typical tourist destinations.
        </p>
        <p>
          Each blog entry is enriched with my personal travel stories and detailed insights. 
          I provide vivid descriptions of these hidden gems along with useful tips and recommendations. 
          Whether it’s advice on the best local eateries, must-see sights, or insider knowledge, offers valuable information to help travelers make the most of their trips.
        </p>
        <p>
          My goal is to inspire readers to venture beyond well-known destinations and embrace new adventures.
           By highlighting interesting and off-the-beaten-path locations, I encourage my audience to step out of their comfort zones and experience the diverse beauty of the world.
        </p>
        <p>  I advocate for thoughtful and respectful travel. Through my blog, I emphasize the importance of engaging with different cultures and environments in a way that respects local traditions and contributes positively to the communities I visit. 
          I aim to foster a deeper connection between travelers and the places they explore through a mindful approach.</p>
      </div>
      
    </div>
  )
}

export default About