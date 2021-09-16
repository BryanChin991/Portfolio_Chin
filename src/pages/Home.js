import React, {useState} from 'react'
import Popup from '../popup/Popup'
    
const Home = () => {

    const [openPopUp, setOpenPopUp] = useState(true)

    return (
        <div className='home'>
            <h1>Home</h1> 
            <Popup title='Sign Up Page' openPopup={openPopUp} setOpenPopUp={setOpenPopUp}>
            </Popup>
        </div>
    )
}

export default Home
    