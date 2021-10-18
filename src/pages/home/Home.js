import React, {useState, useEffect} from 'react'
import {MyImage} from './AboutMeImageData'
import * as Cgcons from "react-icons/cg"
import { Slide } from '@material-ui/core'
import './home.css'
import Footer from '../footer/Footer'
import video001 from './video/video001.mp4'
import my from './img/my.jpg'

const my_img = my
    
const Home = () => {

    const [current, setCurrent] = useState(0)

    const leftClick = ()=>{
        setCurrent(current===0 ? MyImage.length-1 : current-1)
    }

    const RightClick = ()=>{
        setCurrent(current===MyImage.length-1 ? 0 : current+1)
    }

    console.log(current)

    useEffect(()=>{
        let slider = setInterval(()=>{
            setCurrent(current===MyImage.length-1 ? 0 : current+1)
        },5000)
        return ()=>clearInterval(slider)
    },[current])

    return (
        <div>
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
                    <h1 style={{textAlign:'center'}}>Hallo, my name is <strong>Chin Fook Hee </strong>(Bryan)</h1>
                </div>

                <div className="col-12 row">
                    <article className="col-md-6 mt-md-5">
                        <div className="row">
                            <p className='mb-5 offset-1'>Key strength in <strong><em> effective communication, data analysis & system improvement</em> </strong>. Enthusiast in programming languages (Python, JavaScript, SQL) and data management, seeking the opportunity to involve in Data Scientist Career.</p>
                        
                            <p className='mb-5 motto offset-1'><em>Adventurous, Curiosity and <br/>Never Give up</em></p>

                            <div className="card card-body bg-light offset-1 mb-5">
                                <blockquote>
                                    <p ><em>“I’m interested in things that change the world or that affect the future and wondrous, new technology where you see it, and you’re like, ‘Wow, how did that even happen? How is that possible?”</em></p>
                                    <footer className='blockquote-footer bg-dark text-light mt-2'>
                                        Elon Musk, 
                                        <cite title="Source Title">
                                            founder, CEO, CTO and chief designer of SpaceX
                                        </cite>
                                    </footer>
                                </blockquote>
                            </div>
                        
                        </div>
                    </article>

                    <div className="col-12 offset-md-1 col-md-5">
                        <img src={my_img} className='pic' alt="my image" />
                    </div>
                </div>
            </div>

            <div>
                 <video loop={true} autoPlay={true} muted={true} className='video'>
                    <source src={video001} type="video/mp4" />
                </video>
            </div>

            <Footer />
        </div>
    )
}

export default Home
    