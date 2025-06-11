import React from 'react'

function Footer() {
  return (
    <div className='pt-10 pb-10 px-4 mb-6 md:mb-0 md:px-20 lg:px-32 w-full bg-gray-800 overflow-hidden'>    
            <div className='container flex flex-col justify-between md:flex-row mx-auto items-start '>
                {/* 1st*/}
                <div className='w-full  md:w-1/3 mb-8 md:mb-0'>
                    <h3 className='text-white text-lg font-bold mb-8'>Info</h3>
                    <p className='text-gray-400'>we are ready to deliver quality services</p>                
                </div>
                {/* 2nd */}
                <div className='w-full md:w-1/5' >
                    <h3 className='text-lg text-white font-bold mb-8'> Links</h3>
                    <ul className='flex flex-col gap-2 text-gray-400'>
                        <a href="" className='hover:text-white'>Home</a>
                        <a href="" className='hover:text-white'>About</a>
                        <a href="" className='hover:text-white'>Contact us</a>
                    </ul>             
                </div>
                {/* 3rd */}
                <div>
                  <h3>Subscription</h3>
                </div>
            </div>
    </div>
  )
}

export default Footer