
// ORIGINAL CODE Being descri

// function Footer() {
//   return (
//     <div className='pt-10 pb-10 px-4 mb-6 md:mb-0 md:px-20 lg:px-32 w-full bg-gray-800 overflow-hidden'>    
//             <div className='container flex flex-col justify-between md:flex-row mx-auto items-start '>
//                 {/* 1st set*/}
//                 <div className='w-full  md:w-1/3 mb-8 md:mb-0'>
//                     <h3 className='text-white text-lg font-bold mb-8'>Info</h3>
//                     <p className='text-gray-400'>we are ready to deliver quality services</p>                
//                 </div>
//                 {/* 2nd set*/}
//                 <div className='w-full md:w-1/5' >
//                     <h3 className='text-lg text-white font-bold mb-8'> Links</h3>
//                     <ul className='flex flex-col gap-2 text-gray-400'>
//                         <a href="" className='hover:text-white'>Home</a>
//                         <a href="" className='hover:text-white'>About</a>
//                         <a href="" className='hover:text-white'>Contact us</a>
//                     </ul>             
//                 </div>
//                 {/* 3rd */}
//                 <div>
//                   <h3 className='text-white'>Subscription</h3>
//                 </div>
//             </div>
//     </div>
//   )
// }

// export default Footer   



import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 pt-10 pb-6 px-4 md:px-20 lg:px-32">
      <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8">
        {/* Info Section description */}
        <div className="md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">Info</h3>
          <p>We are ready to deliver quality services.</p>
        </div>

        {/* Links Section for users*/}
        <div className="md:w-1/5">
          <h3 className="text-white text-lg font-bold mb-4">Links</h3>
          <ul className="flex flex-col gap-2">
            <li>
              <a href="#" className="hover:text-white transition-colors duration-200">Home</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-200">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-200">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Subscription Section */}
        <div className="md:w-1/3">
          <h3 className="text-white text-lg font-bold mb-4">Subscribe</h3>
          <p className="mb-4">Get the latest updates directly in your inbox.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-l-md focus:outline-none text-gray-900"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section*/}
      <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-gray-500 text-center">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
