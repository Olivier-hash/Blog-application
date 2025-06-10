import React from 'react'

function Footer() {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 w-full bg-gray-800'>
        
            <div className='container flex justify-between md:flex-row mx-auto'>
                {/* three columns */}
                <div className='w-full flex flex-col'>
                    <h3 className='text-gray-400 text-lg'>info</h3>
                    <p className='text-gray-400'>we are ready to deliver</p>
                    <p className='text-gray-400'>we work by profession</p>
                    <p className='text-gray-400'>Every service is trusted</p>
                </div>
                <div className='flex '>Links
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Contact us</a>
                </div>
                <div>Subscription</div>
            </div>
    
    </div>
  )
}

export default Footer