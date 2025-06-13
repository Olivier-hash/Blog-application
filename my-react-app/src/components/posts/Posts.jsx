import Post from '../post/Post'
import './posts.css'

function Posts() {
  return (
    <div className=' md:flex-row'>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

export default Posts