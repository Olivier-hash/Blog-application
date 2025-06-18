import Post from '../post/Post'
import './posts.css'

function Posts() {
  return (
    <div className='gap-4 grid grid-cols-1 '>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

export default Posts