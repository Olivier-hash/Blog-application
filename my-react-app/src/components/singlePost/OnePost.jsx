
import img from '../../assets/team4.jpeg'

function OnePost() {
  return (
    <div className=' py-10 px-10 hidden lg:block'>
      <div className="grid grid-col-1 gap-8 ">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">Team<span className='underline underline-offset-4 font-light'>Single Post Title</span></h1>
        {/* Image Section */}
        <img
          src={img}
          alt="Post"
          className="w-full md:w-1/2 h-auto object-cover rounded-md shadow-lg"
        />

        {/* Textual Content Section */}
        <div className="w-full ">

          {/* Post Info */}
          <div className="pb-6 text-sm text-gray-500 ">
            <span>Author: <b>Safari</b></span>
            <span className='px-20'>1 hour ago</span>
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed line-clamp-3 md:line-clamp-none">
            The following is the singlePost Description and Adjustment . <br />
            The following is the singlePost Description and Adjustment. <br />
            The following is the singlePost Description and Adjustment. <br />
            The following is the singlePost Description and Adjustment. <br />
            The following is the singlePost Description and Adjustment.
          </p>
        </div>
        {/* Title + Edit Icon's */}
            <div className="flex pl-96 gap-2 pt-0 text-gray-600 text-lg">
              <i className="fa-solid fa-pen-to-square cursor-pointer hover:text-blue-600"></i>
              <i className="fa-solid fa-trash-can cursor-pointer hover:text-red-600"></i>
           </div>   

      </div>
    </div>
  );
}
//da
export default OnePost;













//CORRECTED CODE TO BE USED IN THE PROJECT


// import img from '../../assets/team4.jpeg'

// function OnePost() {
//   return (
//     <div className='py-10 px-6'>
//       <div className="container mx-auto flex flex-col gap-6">
        
//         {/* Image Section */}
//         <img
//           src={img}
//           alt="Post"
//           className="w-full h-auto object-cover rounded-md shadow-lg"
//         />

//         {/* Textual Content Section - horizontal on md+ */}
//         <div className="flex flex-col md:flex-row gap-6 items-start">

//           {/* Title + Icons */}
//           <div className="relative md:w-1/2">
//             <h1 className="text-2xl font-bold mb-4">This is the Single Post Title</h1>
//             <div className="absolute top-0 right-0 flex gap-3 text-gray-600">
//               <i className="fa-solid fa-pen-to-square cursor-pointer hover:text-blue-600"></i>
//               <i className="fa-solid fa-trash-can cursor-pointer hover:text-red-600"></i>
//             </div>
//           </div>

//           {/* Post Info + Description */}
//           <div className="md:w-1/2">
//             <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-4">
//               <span>Author: <b>Safari</b></span>
//               <span>1 hour ago</span>
//             </div>
//             <p className="text-gray-700 leading-relaxed">
//               The following is the singlePost Description. <br />
//               The following is the singlePost Description. <br />
//               The following is the singlePost Description.
//             </p>
//           </div>

//         </div>

//       </div>
//     </div>
//   );
// }

// export default OnePost;







// RECENT CODE SNIPED WITH  CSS

// import './singlePost.css'
// import img from '../../assets/team4.jpeg'
// function OnePost() {
//   return (
//     <div className='singlePost '>
//         <div className="singlePostwrapper container md:flex-row">
//             <img src={img} className="object-cover" />
//             <h1 className="singlePostTitle">
//                 This is the Single Post Title
//                 <div className="singlePostEdit">
//                 <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
//                 <i className="singlePostIcon fa-solid fa-trash-can"></i>
//                 </div>
//             </h1>
//             <div className="singlePostInfo">
//                 <span className='singlePostAuthor'>Author : <b>Safari</b></span>
//                 <span className='singlePostDate'>1 hour ago </span>
//             </div>
//             <p className='singlePostDesc'>The following is the singlePost Description
//                The following is the singlePost Description
//                The following is the singlePost Description
//                The following is the singlePost Description
//                The following is the singlePost Description
//                The following is the singlePost Description
//                The following is the singlePost Description
//                The following is the singlePost Description
//                The following is the singlePost Description
//                The following is the singlePost Description
//             </p>
//         </div>
//     </div>
//   )
// }

// export default OnePost