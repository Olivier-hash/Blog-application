import './singlePost.css'
import img from '../../assets/team4.jpeg'
function OnePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostwrapper">
            <img src={img} className="singlePostImg" />
            <h1 className="singlePostTitle">
                This is the Single Post Title
                <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash-can"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author : <b>Safari</b></span>
                <span className='singlePostDate'>1 hour ago </span>
            </div>
            <p className='singlePostDesc'>The following is the singlePost Description
               The following is the singlePost Description
               The following is the singlePost Description
               The following is the singlePost Description
               The following is the singlePost Description
               The following is the singlePost Description
               The following is the singlePost Description
               The following is the singlePost Description
               The following is the singlePost Description
               The following is the singlePost Description
            </p>
        </div>
    </div>
  )
}

export default OnePost