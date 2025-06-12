import img from '../../assets/team(i).jpeg'
import './post.css'

function Post() {
  return (
    <div className='container mx-auto pt-10 py-4 md:px-20 lg:px-32 overflow-hidden'>
        <img className='' src={img} alt="" />
        <div className=" bottom-5  justify-center">
            <div className="inline-block flex flex-col bg-white w-3/4 px-4 py-2 shadow-md">
                <span className="text-xl font-semibold text-gray-800">Music</span>
                <span className="text-xl font-semibold text-gray-800">Life</span>
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