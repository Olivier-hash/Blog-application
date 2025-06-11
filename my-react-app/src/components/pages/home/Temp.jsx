import Header from '../../header/Header'
import Posts from '../../posts/Posts'
import SideBar from '../../sidebar/TempSide'
import './home.css'

const Temp = () => {
  return (
    <>
       <Header/>
      <div className='home'>
        <Posts/>
        <SideBar/>

      </div>
    </>
  )
}

export default Temp