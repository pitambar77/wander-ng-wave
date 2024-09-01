import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className=' container bg-white mx-auto mt-6 md:p-12 p-4 text-primary'>
      <div className=' md:px-6 px-2'>
        <h1 className=' md:text-3xl text-xl font-semibold text-gray-800'>Privacy Policy</h1>
      
        <p className=' mt-6'>Welcome to Our Blog Chanel! We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, 
          and safeguard your information when you visit our blog web application. By accessing or using our website, you agree to the terms of this Privacy Policy.
        </p>
        
        <h1 className=' md:text-2xl text-xl mt-6 font-semibold text-gray-600'>Information We Collect</h1>
        
        <p className=' mt-4'>a. Personal Information When you visit our site, we may collect personal information that you provide voluntarily, including but not limited to:</p>
        <div className=' space-y-4 mt-4 px-4'>
          <li>Name</li>
          <li>Email address</li>
          <li>Comments or messages you submit</li>          
        </div>

        <p className='mt-4'>b. Non-Personal Information We also collect non-personal information automatically, including:</p>
        <div className=' space-y-4 mt-4 px-4'>
          <li>IP address</li>
          <li>Browser type</li>
          <li>Referring website</li>
          <li>Pages visited on our site</li>
          <li>Time and date of visits</li>
        </div>

        <h1 className=' md:text-2xl text-xl mt-6 font-semibold text-gray-600'>How We Use Your Information</h1>
        <p className='mt-4'>We use the information we collect for various purposes, including:</p>
        <div className=' space-y-4 mt-4 px-4'>
          <li>To improve our blog and provide a better user experience</li>
          <li>To respond to comments and inquiries</li>
          <li>To send newsletters or promotional materials (if you have opted in)</li>
          <li>To analyze site usage and trends</li>
        </div>
        <h1 className=' md:text-2xl text-xl mt-6 font-semibold text-gray-600'>Cookies and Tracking Technologies</h1>
        <p className=' mt-4'>We use cookies and similar tracking technologies to enhance your browsing experience. 
          Cookies are small data files stored on your device that help us remember your preferences and analyze site traffic. 
          You can control cookies through your browser settings.
        </p>

        <h1 className=' md:text-2xl text-xl mt-6 font-semibold text-gray-600'>Third-Party Services</h1>
        <p className=' mt-4'>Our blog may contain links to third-party websites or services. 
          We are not responsible for the privacy practices or content of these external sites. 
          We encourage you to review their privacy policies before providing any personal information.
        </p>

        <h1 className=' md:text-2xl text-xl mt-6 font-semibold text-gray-600'>Data Security</h1>
        <p className=' mt-4'>We implement reasonable security measures to protect your information from unauthorized access,
        alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, 
        and we cannot guarantee absolute security.
        </p>

        <h1 className=' md:text-2xl text-xl mt-6 font-semibold text-gray-600'>Changes to This Privacy Policy</h1>
        <p className=' mt-4'>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. 
          We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy