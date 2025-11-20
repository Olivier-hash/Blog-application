import img from '../../assets/passport.jpg';
import { Link } from 'react-router-dom';

function TopBar() {


  return (
    <div className="w-full sticky top-0 bg-white z-[999] ">
      <div className="container mx-auto flex items-center justify-between h-14 px-4 md:px-8 font-sans">
        
        {/* Left - Social Icons */}
        <div className="flex gap-3 text-gray-700 text-lg">
          <i className="fa-brands fa-square-facebook cursor-pointer hover:text-blue-600" />
          <i className="fa-brands fa-square-twitter cursor-pointer hover:text-blue-400" />
          <i className="fa-brands fa-square-pinterest cursor-pointer hover:text-red-500" />
          <i className="fa-brands fa-square-instagram cursor-pointer hover:text-pink-500" />
        </div>

        {/* Center - Navigation */}
        <div className="flex flex-col justify-center items-center  pt-1 md:px-20 lg:px-32 bg-trasparent">
          <ul className="flex gap-2 text-sm font-medium text-gray-700">
            <li><Link to="/" className="hover:text-blue-600">HOME</Link></li>
            <li><Link to="/post" className="hover:text-blue-600">ABOUT</Link></li>
            <li><Link to="/settings" className="hover:text-blue-600">CONTACT</Link></li>
            <li><Link to="/write" className="hover:text-blue-600">WRITE</Link></li>
          </ul>
        </div>

        {/* Right - Avatar, Auth Links, Search */}
        <div className="flex items-center gap-4">
            <img src={img} alt="user" className="w-10 h-10 rounded-full object-cover" />
            <ul className="flex gap-4 text-sm font-medium text-gray-700">
              <li><Link to="/login" className="hover:text-blue-600">LOGIN</Link></li>
              <li><Link to="/register" className="hover:text-blue-600">REGISTER</Link></li>
            </ul>
          
          <i className="fa-solid fa-magnifying-glass text-gray-600 text-sm cursor-pointer hover:text-blue-500" />
        </div>
      </div>
    </div>
  );
}

export default TopBar;




//2nd EDITED CODE WITH TAILWIND AND CSS

// import './topbar.css'
// import img from '../../assets/passport.jpg'
// import { Link } from 'react-router-dom';

// function TopBar() {
//     const user = false;
//   return (
//     <div className='w-full overflow-hidden flex md:flex-row'>
//     <div className='top'>
//         <div className='topLeft'>
//             <i className="topIcon fa-brands fa-square-facebook"></i>
//             <i className="topIcon fa-brands fa-square-twitter"></i>
//             <i className="topIcon fa-brands fa-square-pinterest"></i>
//             <i className="topIcon fa-brands fa-square-instagram"></i>
//         </div>
//         <div className='topCenter'>
//             <ul className="topList">
//                 <li className='topListItem'>
//                     <Link className='link' to="/" >HOME</Link>
//                 </li>
                
//                 <li className='topListItem'><Link className='link' to="/post" >ABOUT</Link></li>
//                 <li className='topListItem'><Link className='link' to="/settings" >CONTACT</Link></li>
//                 <li className='topListItem'><Link className='link' to="/write" >WRITE</Link></li>
//             </ul>
//         </div>
//         <div className='topRight'>
//            <img  className='topImg' src={img} alt=""  />
//                 <ul className='topList'>
//                     <li className='topListItem'><Link className='link' to="/login" >LOGIN</Link></li>
//                     <li className='topListItem'><Link className='link' to="/register" >REGISTER</Link></li> 
//                 </ul>
               
            
//             <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
//         </div>
//     </div>
//     </div>
//   )
// }

// export default TopBar







// ORIGINAL CODE BELOW

// import './topbar.css'
// import img from '../../assets/passport.jpg'
// import { Link } from 'react-router-dom';

// function TopBar() {
//     const user = false;
//   return (
//     <div className='w-full overflow-hidden'>
//     <div className='top'>
//         <div className='topLeft'>
//             <i className="topIcon fa-brands fa-square-facebook"></i>
//             <i className="topIcon fa-brands fa-square-twitter"></i>
//             <i className="topIcon fa-brands fa-square-pinterest"></i>
//             <i className="topIcon fa-brands fa-square-instagram"></i>
//         </div>
//         <div className='topCenter'>
//             <ul className="topList">
//                 <li className='topListItem'>
//                     <Link className='link' to="/" >HOME</Link>
//                 </li>
                
//                 <li className='topListItem'><Link className='link' to="/" >ABOUT</Link></li>
//                 <li className='topListItem'><Link className='link' to="/" >CONTACT</Link></li>
//                 <li className='topListItem'><Link className='link' to="/write" >WRITE</Link></li>
//                 <li className='topListItem'>
//                     {user && "LOGOUT.."}
//                 </li>
//             </ul>
//         </div>
//         <div className='topRight'>
//             {
//                user ? (

//                 <img 
//                className='topImg' 
//                src={img} alt="" 
//             />
//                ) : (
//                 <ul className='topList'>
//                     <li className='topListItem'><Link className='link' to="/login" >LOGIN</Link></li>
//                     <li className='topListItem'><Link className='link' to="/register" >REGISTER</Link></li> 
//                 </ul>
//                )
//             }
            
//             <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
//         </div>
//     </div>
//     </div>
//   )
// }

// export default TopBar