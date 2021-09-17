import React, {useState} from 'react'
import Popup from '../popup/Popup'
import {MyImage} from './AboutMeImageData'
import * as Cgcons from "react-icons/cg"
import { Slide } from '@material-ui/core'
    
const Home = () => {

    const [openPopUp, setOpenPopUp] = useState(true) // set later to true
    const [current, setCurrent] = useState(0)

    const leftClick = ()=>{
        setCurrent(current===0 ? MyImage.length-1 : current-1)
    }

    const RightClick = ()=>{
        setCurrent(current===MyImage.length-1 ? 0 : current+1)
    }

    console.log(current)

    return (
        <>
            <div className='home'>
                <Popup title='Sign Up Page' openPopup={openPopUp} setOpenPopUp={setOpenPopUp}/>
            </div>

            <div className='slider'>
                <Cgcons.CgChevronDoubleLeft className='left-arrow' onClick={leftClick}/>
                <Cgcons.CgChevronDoubleRight className='right-arrow' onClick={RightClick}/>
                {MyImage.map((image, idx)=>{
                    return (
                    <div className={idx === current ? 'slide active' : 'slide'} key={idx}>
                        {idx === current && <img src={image.img} alt="" className='myImg'/>}
                    </div>
                    )
                })}
            </div>
        </>
    )
}

export default Home
    