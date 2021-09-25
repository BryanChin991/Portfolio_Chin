import React, {useState} from 'react'
import {MyImage} from './AboutMeImageData'
import * as Cgcons from "react-icons/cg"
import { Slide } from '@material-ui/core'
import './home.css'
import Footer from '../footer/Footer'

const my_img = 'https://scontent.fkul13-1.fna.fbcdn.net/v/t1.18169-9/11954701_10207934638350833_7438649839304062851_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGBPRKNRG3-FhOPxgkt1JKE_iyl6Q1gZZ7-LKXpDWBlnmXvVqY-pqX2B4mDzR1LHvk&_nc_ohc=dTX_pzzy-RYAX_SyRJy&_nc_ht=scontent.fkul13-1.fna&oh=a5728df2411a7ba123be9fc5d9758af2&oe=6171CB16'
    
const Home = () => {

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

            <div className="container">
                <div className="row name">
                    <h2 style={{textAlign:'center'}}>Hallo, my name is Chin Fook Hee (Bryan)</h2>
                </div>

                <div className="row row-content">
                    <div className="col-6">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil corporis ex sit delectus sapiente explicabo iure fuga officia dolores maxime.</p>
                    </div>

                    <div className="col-6">
                        <img src={my_img} alt="my image" />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Home
    