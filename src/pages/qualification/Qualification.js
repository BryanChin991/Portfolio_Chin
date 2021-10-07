import { requirePropFactory } from '@material-ui/core';
import React, {useState} from 'react';
import {IBM, QaulificationData, CourseraData, Kaggle, Cousera, UPM, cs50x, Edx, UPM_cert} from './QualificationData';
import * as MdIcons from "react-icons/md"
import './qualification.css'
import { SiDraugiemDotLv } from 'react-icons/si';
import Footer from '../footer/Footer';

const Qualification = () => {
    const [imgClicked, setimgClicked] = useState(null)
    console.log(imgClicked)

    return (
        <div>
            <div className="section_title">
                <h1>Qualifications</h1>
                <div className="underline"></div>
            </div>
            <section className='container'>

                <div className="row upm_row row_content mt-5">
                    <div className="col-12 col-md-3 col_content">
                        <div className="row"><img src={UPM} alt="UPM" /></div>
                        <div className="row offset-1"><strong>University Putra Malaysia</strong></div>
                        <div className="row offset-2"><em>Sep 2011 - Sep 2015</em></div>
                        <div className="row offset-2"><em><strong>CGPA:</strong>  3.788 / 4.0</em></div>
                        <div className="row offset-2"><em>First Class Honours</em></div>
                    </div>

                    <div className="col-auto col-md-9">
                        <img src={UPM_cert} alt="CS50 Certificate" className='upm_cert'/>
                    </div>
                </div>

                <div className="row upm_row row_content">
                    <div className="col-12 col-md-3 col_content">
                        <div className="row mb-5"><img src={Edx} alt="EDx" /></div>
                        <div className="row">Harvard University's introduction to the intellectual enterprises of computer science 
                            and the art of programming. 
                            <a className='p-0' href='https://www.edx.org/search?subject=Computer%20Science&subject=Data%20Analysis%20%26%20Statistics&tab=course' target='_blank'>Click to learn more</a>
                        </div>
                    </div>

                    <div className="col-auto col-md-9">
                        <img src={cs50x} alt="CS50 Certificate" className='upm_cert'/>
                    </div>
                </div>

                <div className='row row_content'>
                    <div className='row_desc'>
                        <img src={Kaggle} alt="" className='ImgTitle'/>
                        <p> Is an online community of data scientists and machine learning practitioners. 
                            Allows users to find and publish data sets, explore and build models in a web-based data-science environment, 
                            work with other data scientists and machine learning engineers, and enter competitions to solve data science 
                            challenges. <a href='https://www.kaggle.com/' target='_blank'>Click to learn more</a>
                            <br/> <em><strong>(Click the image to zoom in)</strong></em></p>
                    </div>
                    <div className='image-grid'>
                        {QaulificationData.map(({img, description}, idx)=>{
                            return(
                                <div>
                                    <img src={img} alt="" onClick={()=>setimgClicked(idx+1)} className='image-individual'/>
                                    <p>{description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {imgClicked && 
                    (QaulificationData.map(({img, description}, idx)=>{
                        if(idx+1 === imgClicked){
                            return(
                                <div className='preview-box'>
                                    <div className="details">
                                        <span className="title">
                                            <b>Course Title</b> <i>{`:  ${description}`}</i>
                                        </span>
                                        <MdIcons.MdCancel className='icon' onClick={()=>setimgClicked(null)}/>
                                    </div>
                                    <div className="image-box">
                                        <img src={img} alt={description} />
                                    </div>
                                </div>
                            )
                        }
                    }))
                }

                <div className='row row_content'>
                    <div className='row_desc'>
                        <div className="row">
                            <div className="col-12 col-sm-1">
                                <img src={Cousera} alt="" className='ImgTitle'/>
                            </div>
                            <div className="col-12 col-sm-10">
                                <img src={IBM} alt="" className='ImgTitle ibm_size'/>
                            </div>
                        </div>
                        <p>The program consists of 9 online courses equip with the latest job-ready tools and skills, 
                            including open source tools and libraries, Python, databases, SQL, data visualization, 
                            data analysis, statistical analysis, predictive modeling, and machine learning algorithms. 
                            This Professional Certificate has a strong emphasis on applied learning, learn data science 
                            through hands-on practice in the IBM Cloud using real data science tools and real-world data sets. 
                            <a href='https://www.coursera.org/professional-certificates/ibm-data-science' target='_blank'>Click to learn more</a>
                            <br/> <em><strong>(Click the image to zoom in)</strong></em></p>
                    </div>

                    <div className='image-grid'>
                        {CourseraData.map(({img, description}, idx)=>{
                            return(
                                <div>
                                    <img src={img} alt="" onClick={()=>setimgClicked(idx+1+QaulificationData.length)} className='image-individual'/>
                                    <p>{description}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {imgClicked && 
                    (CourseraData.map(({img, description}, idx)=>{
                        if(idx+1+QaulificationData.length === imgClicked){
                            return(
                                <div className='preview-box'>
                                    <div className="details">
                                        <span className="title">
                                            <b>Course Title</b> <i>{`:  ${description}`}</i>
                                        </span>
                                        <MdIcons.MdCancel className='icon' onClick={()=>setimgClicked(null)}/>
                                    </div>
                                    <div className="image-box">
                                        <img src={img} alt="" />
                                    </div>
                                </div>
                            )
                        }
                    }))
                }

            </section>
            <Footer />
        </div>
    )
}

export default Qualification
