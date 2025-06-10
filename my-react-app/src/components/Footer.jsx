import React from 'react'

function Footer() {
  return (
    <div className='pt-10 pb-10 px-4 mb-6 md:mb-0 md:px-20 lg:px-32 w-full bg-gray-800 overflow-hidden'>    
            <div className='container flex flex-col justify-between md:flex-row mx-auto items-start '>
                {/* three columns */}
                <div className='w-full  md:w-1/3 mb-8 md:mb-0'>
                    <h3 className='text-white text-lg'>Info</h3>
                    <p className='text-gray-400'>we are ready to deliver</p>
                    <p className='text-gray-400'>we work by profession</p>
                    <p className='text-gray-400'>Every service is trusted</p>
                </div>
                <div className='w-full md:w-1/5' >
                    <h3 className='text-lg text-white'> Links</h3>
                    <ul className='flex flex-col gap-2'>
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Contact us</a>
                    </ul>             
                </div>
                <div><h3>Subscription</h3></div>
            </div>
    </div>
  )
}

export default Footer