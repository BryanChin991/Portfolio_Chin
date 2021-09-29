import React from 'react';
import './projects.css';
import { Project_list } from './project_lists';
import Footer from '../footer/Footer';


const Projects = () => {
    return (
        <>
            <div>
                <div className="section_title">
                    <h1> Data Science Projects</h1>
                    <div className="underline"></div>
                </div>

                {Project_list.map(({img, title, info, content, link}, idx)=>{
                    return(
                        <section className='project_section'>
                            <div className="container_project">
                                <div className="left">
                                    <img src={img} alt={title} />
                                </div>
                                <div className="right">
                                    <div className="content">
                                        <h1>{title}</h1>
                                        <p>{content}</p>
                                        <a href={link} className='btn btn-sm btn-success' target='_blank'>Wanna Check <strong><em>{info}</em></strong> for more ?</a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                })}
            </div>
            <Footer />
        </>
    )
}

export default Projects
