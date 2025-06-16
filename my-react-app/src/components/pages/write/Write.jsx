import './write.css'
import img from '../../../assets/side.jpeg'

function Write() {
  return (
    // writeImg
    <div className='write w-full'>
      <div className='flex flex-col md:ml-20'>
        <img className='writeImg' src={img} alt="" />
        <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i  className="writeIcon fa-solid fa-plus"></i> 
                </label>
                <input type="file" id='fileInput' style={{display: "none"}} />
                <input type="text" placeholder='Title' className='writeInput' autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea placeholder='Tell your story...' type='text' className='writeInput writeText'></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
        </form>
        </div>
    </div>
  )
}

export default Write