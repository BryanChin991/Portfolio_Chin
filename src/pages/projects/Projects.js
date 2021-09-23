import React from 'react';
import './projects.css';
import { Project_list } from './project_lists';


const Projects = () => {
    return (
        <div>
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
                                    <a href={link} className='btn btn-sm btn-light'>{`Click to ${info} project`}</a>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            })}


            
        </div>
    )
}

export default Projects
