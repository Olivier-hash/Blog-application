import './single.css'
import TempSide from '../../sidebar/TempSide'
import OnePost from '../../singlePost/OnePost'

function Single() {
  return (
    <div className='single'>
        <OnePost/>
        <TempSide/>
    </div>
  )
}

export default Single