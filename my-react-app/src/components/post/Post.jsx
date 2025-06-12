import img from '../../assets/team(i).jpeg'
import './post.css'

function Post() {
  return (
    <div className='post'>
        <img className='postImg' src={img} alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">This is sampled text to be replaced</span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className='postDesc'>
          This is the place for the post description
        </p>
    </div>
    
  )
}

export default Post