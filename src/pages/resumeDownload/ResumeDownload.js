import React from 'react';
import MyResume from './resume/CV_CFH.pdf'

const ResumeDownload = () => {

    return (
        <div>
           <a className='btn btn-sm btn-success' href={MyResume} download='Chin_Fook_Hee_resume.pdf'> Download resume</a>
        </div>
    )
}

export default ResumeDownload
