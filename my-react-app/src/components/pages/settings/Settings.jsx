import Sidebar from '../../sidebar/TempSide'
import './settings.css'
import img from '../../../assets/team5.jpeg';

function Settings() {
  return (
    <div className='settings'>
      <div className="settingsWrapper">
        <div className="settingsTitle">
             <span className="settingsUpdateTitle">Update your Account</span>
             <span className="settingsDeleteTitle">Delete your Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile picture</label>
          <div className="settingsPP">
                <img src={img} alt="" />
             <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-regular fa-circle-user"></i>
             </label>
             <input type="file" id='fileInput' style={{display:"none"}} />
          </div>
          <label >Username</label>
          <input type="text" placeholder='olivier-hash' />
          <label >Email</label>
          <input type="email" placeholder='olivierhash@gmail.com' />
          <label >Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  )
}

export default Settings