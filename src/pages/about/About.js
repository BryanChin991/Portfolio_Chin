import React from 'react'
import Footer from '../footer/Footer'
import { AboutMeLists } from './AboutMeList'
import Me from './Me'
import './about.css'

const About = () => {

    return (
        <section>
            <div className="section_title">
                <h1>About Me</h1>
                <div className="underline"></div>
            </div>

            <div className='container'>
                {AboutMeLists.map(me=>{
                    return <Me key={me.id} {...me} />
                })}
            </div>

            <div className='container text px-5' style={{fontStyle:'italic', fontWeight:'bold'}}>Lastly, thank you for your time to get to know me. Feel free to <a href="tel:+60182088303"> call</a> or <a href="mailto:hejunchin991@gmail.com">email </a>me if you have any doubt, or just wanna be friend with me. I hope you are well, stay safe and have a nice day. </div>

            <Footer/>
        </section>
    )
}

export default About
