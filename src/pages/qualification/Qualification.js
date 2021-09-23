import { requirePropFactory } from '@material-ui/core';
import React, {useState} from 'react';
import {QaulificationData, CourseraData, Kaggle, Cousera, UPM, cs50x, Edx, IBM} from './QualificationData';
import * as MdIcons from "react-icons/md"
import './qualification.css'
import { SiDraugiemDotLv } from 'react-icons/si';

const Qualification = () => {
    const [imgClicked, setimgClicked] = useState(null)
    console.log(imgClicked)

    return (
        <section className='container'>

            <div className="row upm_row row_content mt-5">
                <div className="col-12 col-sm-6 col_content">
                    <div className="row"><img src={UPM} alt="UPM" /></div>
                    <div className="row offset-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, asperiores.</div>
                </div>

                <div className="col-6 col-sm-6">
                    <img src={cs50x} alt="CS50 Certificate" className='upm_cert' onClick=''/>
                </div>
            </div>

            <div className="row upm_row row_content">
                <div className="col-12 col-sm-6 col_content">
                    <div className="row mb-5"><img src={Edx} alt="EDx" /></div>
                    <div className="row offset-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, asperiores.</div>
                </div>

                <div className="col-6 col-sm-6">
                    <img src={cs50x} alt="CS50 Certificate" className='upm_cert' onClick=''/>
                </div>
            </div>

            <div className='row row_content'>
                <div className='row_desc'>
                    <img src={Kaggle} alt="" className='ImgTitle'/>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti corrupti architecto tempore? Temporibus aspernatur in error enim mollitia, cupiditate recusandae magnam a harum vitae delectus facilis, quae, numquam culpa.</p>
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
                                    <img src={img} alt="" />
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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati deleniti corrupti architecto tempore? Temporibus aspernatur in error enim mollitia, cupiditate recusandae magnam a harum vitae delectus facilis, quae, numquam culpa.</p>
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
    )
}

export default Qualification
