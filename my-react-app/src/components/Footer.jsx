import React from 'react'

function Footer() {
  return (
    <div className='container w-full mx-auto bg-gray-800'>
        <div>
            <div className='flex justify-between'>
                {/* three columns */}
                <div className='flex flex-col'>info
                    <h2>we are ready to deliver</h2>
                    <h2>we work by profession</h2>
                    <h2>Every service is trusted</h2>
                </div>
                <div>Links</div>
                <div>Subscription</div>
            </div>
        </div>
    </div>
  )
}

export default Footer