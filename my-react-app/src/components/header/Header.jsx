import './header.css'
import team from '../../assets/pic.jpg'

function Header() {
  return (
    <div className='header' >
        <div className="headerTitles">
            <span className='headerTitleSm'>React & Node </span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg' src={team} alt="" />
    </div>
  )
}

export default Header