import React from 'react'
import {Link} from 'react-router-dom'

const ContactUs = () => {
  return (
    <div className=' container bg-white mx-auto mt-6 md:p-16 p-4   text-primary'>
      <h1 className=' md:text-3xl text-xl font-semibold  text-gray-800'>Contact Us</h1>
      <div className='md:px-6 px-2' >
        <p className=' mt-6 '>We’d love to hear from you! <br/> Whether you have questions, feedback, or just want to say hello, don’t hesitate to reach out. 
          Use the contact information below or fill out the form, and we’ll get back to you as soon as possible.
        </p>
        <p className=' mt-4'>For general inquiries, please email us at <Link to='pitambermajhi33@gmail.com' className='italic text-cyan-700'>pitambermajhi33@gmail.com</Link> </p>
        <p className=' mt-4 '>Phone : +91 8658105495</p> 
      </div>
      <div className='md:px-6 px-2' >
        <h1 className=' md:text-2xl text-xl font-semibold mt-6 text-gray-600'>Social Media:</h1>
        <p className=' mt-6 '>
          Follow us and get in touch via our social media channels:
        </p>
        <p className=' mt-4 font-semibold'>Instagram : <Link to='https://www.instagram.com/nagen_majhi?igsh=dTNrdGhnZHVkdnJt&utm_source=qr' className='italic text-cyan-700'> https://www.instagram.com/nagen_majhi?igsh=dTNrdGhnZHVkdnJt&utm_source=qr</Link> </p>
        <p className=' mt-4 font-semibold'>LinkedIn :<Link to='https://www.linkedin.com/in/pitambara-majhi-7b9205228/' className='italic text-cyan-700'> https://www.linkedin.com/in/pitambara-majhi-7b9205228/</Link></p>
        <p className=' mt-4 font-semibold'>Youtube :<Link to='https://www.youtube.com/channel/UCpHe0OqKHoFCYM1wPdUS-hA' className='italic text-cyan-700'> https://www.youtube.com/channel/UCpHe0OqKHoFCYM1wPdUS-hA</Link></p> 
      </div>    
    </div>
  )
}

export default ContactUs