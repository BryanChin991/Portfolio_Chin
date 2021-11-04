import React from 'react'
import './ml.css'
import {Supervised, Unsupervised} from './ml_list';
import Footer from '../footer/Footer';

function ML() {
    return (
        <>
            <div className='container-fluid'>
                <div>
                    <div className="section_title">
                        <h1> Machine Learning Projects</h1>
                        <div className="underline"></div>
                    </div>
                </div>

                <div>
                    <h5 className='blink'>Work in Progress</h5>
                </div>


                <div className='grid-container'>
                    <div className='grid-item-1'>
                        <h2>Supervised Learning Algorithms</h2>
                    </div>
                    {Supervised.map(({img, title, content, link})=>{
                        return(
                            <div className='grid-item-2'>
                                <h3>{title}</h3>
                                <p>{content}</p>
                                <a href={link} target='_blank'>
                                    <img src={img} alt={title} />
                                </a>
                            </div>
                        )
                    })}


                    <div className='grid-item-1'>
                        <h2>Unsupervised Learning Algorithms</h2>
                    </div>
                    {Unsupervised.map(({img, title, content, link})=>{
                        return(
                            <div className='grid-item-2'>
                                <h3>{title}</h3>
                                <p>{content}</p>
                                <a href={link} target='_blank'>
                                    <img src={img} alt={title} />
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default ML
