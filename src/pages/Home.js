import React, {useState} from 'react'
import Popup from '../popup/Popup'
import {MyImage} from './AboutMeImageData'
import * as Cgcons from "react-icons/cg"
import { Slide } from '@material-ui/core'
    
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

            <article className='container mt-3'>
                Key strength in effective communication, data analysis & system improvement. Enthusiast in programming languages (Python, JavaScript, SQL) and data management, seeking the opportunity to involve in Data Scientist Career.
                Participated in Kaggle competition (the world’s largest community of data scientists), and finished at top 20% out of 7,573 teams by building an XGBRegressor model with k-fold technique, Optuna framework and feature engineering.
                Visit link below for detail <a href='https://gist.github.com/BryanChin991/24250ccc9e7eb8b6ad2bfc4dd0cff8d2'>here</a>

                Project leader in Big Data such as Supervisory Control and Data Acquisition (SCADA), and Manufacturing execution systems (MES) for raw data collection improvement. Developed machine indices dashboard using Excel Power Query for machine failure early prediction. Key person in department to analyze and manage production volume in order to meet production schedule, to ensure smooth production flow, estimate worker overtime, outsourcing material volume and budget segregation.

                Successfully obtained LinkedIn Skill Assessment badge in Python language, familiar with SQL, Django (python web frontend framework) and React (backend framework)
            </article>
        </>
    )
}

export default Home
    