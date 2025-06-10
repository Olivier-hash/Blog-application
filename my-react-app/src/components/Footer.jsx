import React from 'react'

function Footer() {
  return (
    <div className='pt-10 px-4 mb-6 md:mb-0 md:px-20 lg:px-32 w-full bg-gray-800 overflow-hidden'>    
            <div className='container flex flex-col justify-between md:flex-row mx-auto items-start '>
                {/* three columns */}
                <div className='w-full  md:w-1/3 mb-8 md:mb-0'>
                    <h3 className='text-gray-400 text-lg'>info</h3>
                    <p className='text-gray-400'>we are ready to deliver</p>
                    <p className='text-gray-400'>we work by profession</p>
                    <p className='text-gray-400'>Every service is trusted</p>
                </div>
                <div className='w-full md:w-1/5'>Links
                    <ul className='flex flex-col'>
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Contact us</a>
                    </ul>             
                </div>
                <div>Subscription</div>
            </div>
    </div>
  )
}

export default Footer