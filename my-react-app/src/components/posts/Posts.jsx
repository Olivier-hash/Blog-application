import Post from '../post/Post'
import './posts.css'

function Posts() {
  return (
    <div className='gap-6 grid grid-cols-1 px-4 pt-4 pb-4'>
        <Post/>
        <Post/>
        <Post/>
    </div>
  )
}

export default Posts