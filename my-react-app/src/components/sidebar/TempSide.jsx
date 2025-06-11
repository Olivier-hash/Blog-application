import './sidebar.css'
import img from '../../assets/team3.jpeg'

function TempSide() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
         <span className='sidebarTitle'>ABOUT ME</span>
         <img className='img' src={img} alt="" />
         <p>Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit.
            Fuga aspernatur illum totam officiis quia <br /> dolorum qui mollitia sequi,
         </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
              <li className="sidebarListItem">Life</li>
              <li className="sidebarListItem">Music</li>
              <li className="sidebarListItem">Style</li>
              <li className="sidebarListItem">Sport</li>
              <li className="sidebarListItem">Tech</li>
              <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarsocial">
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  )
}

export default TempSide