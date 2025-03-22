import './TopBar.css'
import img from '../../assets/passport.jpg'
import { Link } from 'react-router-dom';

function TopBar() {
    const user = false;
  return (
    <div className='top'>
        <div className='topLeft'>
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-square-pinterest"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className='topCenter'>
            <ul className="topList">
                <li className='topListItem'>
                    <Link className='link' to="/" >HOME</Link>
                </li>
                <li className='topListItem'><Link className='link' to="/" >ABOUT</Link></li>
                <li className='topListItem'><Link className='link' to="/" >CONTACT</Link></li>
                <li className='topListItem'><Link className='link' to="/write" >WRITE</Link></li>
                <li className='topListItem'>
                    {user && "LOGOUT.."}
                </li>
            </ul>
        </div>
        <div className='topRight'>
            <img 
               className='topImg' 
               src={img} alt="" 
            />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default TopBar