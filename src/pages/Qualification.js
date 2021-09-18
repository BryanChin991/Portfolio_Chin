import { requirePropFactory } from '@material-ui/core';
import React, {useState} from 'react';
import {QualificatinData, CourseraData} from './QualificationData';
import { Kaggle, Cousera } from './QualificationData';
import * as MdIcons from "react-icons/md"

const Qualification = () => {
    const [imgClicked, setimgClicked] = useState(null)
    console.log(imgClicked)

    return (
        <section className='container'>
            <div className='row'>
                <div className=''>
                    <img src={Kaggle} alt="" className='ImgTitle'/>
                </div>
                <div className='image-grid'>
                    {QualificatinData.map(({img, description}, idx)=>{
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
                (QualificatinData.map(({img, description}, idx)=>{
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

            <div className='row'>
                <div className=''>
                    <img src={Cousera} alt="" className='ImgTitle'/>
                </div>
                <div className='image-grid'>
                    {CourseraData.map(({img, description}, idx)=>{
                        return(
                            <div>
                                <img src={img} alt="" onClick={()=>setimgClicked(idx+1+QualificatinData.length)} className='image-individual'/>
                                <p>{description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>

              {imgClicked && 
                (CourseraData.map(({img, description}, idx)=>{
                    if(idx+1+QualificatinData.length === imgClicked){
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
