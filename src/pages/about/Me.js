import React, {useState} from 'react'
import './about.css'

const Me = ({id, question, answer}) => {
    const [readMore, setReadMore] = useState(false)

    return (
        <article className='about-me-single'>
            <div class='question'>{question}</div>
            <p class='text'>{readMore ? answer : answer.substring(0, 100) + ' ...'}
            <a className='btn-sm' onClick={()=>setReadMore(!readMore)}>{readMore ? 'Read Less' : 'Read More'}</a>
            </p>
        </article>
    )
}

export default Me
