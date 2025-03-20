import Header from '../../header/Header'
import Posts from '../../posts/Posts'
// import Sidebar from '../../sidebar/SideBar'
import './home.css'

const Home = () => {
  return (
    <>
       <Header/>
      <div className='home'>
        <Posts/>
        <Sidebar/>

      </div>
    </>
  )
}

export default Home