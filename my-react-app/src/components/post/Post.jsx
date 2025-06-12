import img from '../../assets/team(i).jpeg'
import './post.css'

function Post() {
  return (
    <div className='container mx-auto pt-10 '>
        <img className='' src={img} alt="" />
        <div className="">
            <div className="">
                <span className="">Music</span>
                <span className="">Life</span>
            </div>
            <span className="">This is sampled text to be replaced</span>
            <hr />
            <span className="">1 hour ago</span>
        </div>
        <p className=''>
          This is the place for the post description
        </p>
    </div>
    
  )
}

export default Post