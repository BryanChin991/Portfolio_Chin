import React, {useState} from 'react'
import { my_experience } from './ExperienceData'
import Footer from '../footer/Footer'

const Experience = () => {
    const [value, setValue] = useState(0)

    const {id, company, position, year, scope} = my_experience[value]

    return (
        <>
            <div className='container mt-5'>
                <div className="row">
                    <h1>Experience</h1>
                </div>

                <div className="row">
                    <div className="col-12 col-sm-2">
                        {my_experience.map((item, idx) =>{
                            return(
                                <button key={idx} onClick={()=>setValue(idx)}>{item.company}</button>
                            )
                        })}
                    </div>

                    <div className="col-12 col-sm-10">
                        <div>{company}</div>
                        <div>{position}</div>
                        <div>{year}</div>
                        {scope.map((s)=>{
                            return <div> {s} </div>
                        })}
                    </div>

                </div>
            </div>
            <Footer />
        </>
    )
}

export default Experience
