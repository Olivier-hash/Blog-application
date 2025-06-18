import img from '../../assets/team(i).jpeg'



import React from 'react'


function Post() {
  return (
    <div className='w-full mx-auto pt-10 py-4 md:px-20 lg:px-32 overflow-hidden bg-[#D9D9D9] rounded shadow-lg mb-4'>
       {/* Title */}
        <div className='font-bold text-2xl'>
          <h2 className='pb-4'>Most <span className='underline underline-offset-4 decoration-1 font-light'>Viewed Post</span></h2>
        </div>
      {/* Image */}
      <img
          className='w-full h-auto object-cover rounded-md shadow-lg'
          src={img}
          alt="Most viewed post"
        />
      
        
        {/* Buttons Section */}
        <div className='flex justify-between pt-3 px-9 '>
          <button className='border bg-white px-10 py-2 rounded'>23,473 $</button>
          <button className='border bg-white px-10 py-2 rounded'>10,775 $</button>
        </div>
        
    </div>
  )
}
export default Post




// import img from '../../assets/team(i).jpeg'
// import './post.css'

// function Post() {
//   return (
//     <div className='container mx-auto pt-10 py-4 md:px-20 lg:px-32 overflow-hidden'>
//         <img className='' src={img} alt="" />
//         <div className=" bottom-5  justify-center">
//             <div className="inline-block flex flex-col bg-white w-3/4 px-4 py-2 shadow-md">
//                 <span className="text-xl font-semibold text-gray-800">Music</span>
//                 <span className="text-xl font-semibold text-gray-800">Life</span>
//             </div>
//             <span className="">
              
//             </span>
//             <hr />
//             <span className="">1 hour ago</span>
//         </div>
//         <p className=''>
//           This is the place for the post description
//         </p>
//     </div>
    
//   )
// }

// export default Post