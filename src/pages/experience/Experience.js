import React, {useState} from 'react'
import { my_experience } from './ExperienceData'
import Footer from '../footer/Footer'
import './experience.css'
import { FaAngleDoubleRight } from 'react-icons/fa'
import ResumeDownload from '../resumeDownload/ResumeDownload'

const Experience = () => {
    const [value, setValue] = useState(0)

    const {id, company, position, year, scope} = my_experience[value]

    return (
        <>
            <div className="section_title">
                <h1>Experience</h1>
                <div className="underline"></div>
                <ResumeDownload/>
            </div>

            <section className='section'>
                <div className="job-title ">
                    <div className="btn-container">
                        {my_experience.map((item, idx) =>{
                            return(
                                <button key={idx} onClick={()=>setValue(idx)}
                                    className={`job-btn ${idx===value && 'active-btn'}`}>{item.company}</button>
                            )
                        })}
                    </div>

                    <article className='job-info'>
                        <h3>{position}</h3>
                        <h4>{company}</h4>
                        <p className='job-year'>{year}</p>
                        {scope.map((duty, idx)=>{
                            return(
                                <div className="job-desc" key={idx}>
                                    <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                                    <p>{duty}</p>
                                </div>
                            ) 
                        })}
                    </article>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Experience
