import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa"
import * as RiIcons from "react-icons/ri"
import {SidebarData} from './SidebarData'
import SignUp from '../popup/SignUp';
import './Navbar.css'
// import './Navbar001.css'
import Popup from '../popup/Popup';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)
    const [header, setHeader] = useState('')
    const [openPopUp, setOpenPopUp] = useState(false) // set later to true

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let time = newDate.getHours() + ':' + newDate.getMinutes() + ':' + newDate.getSeconds()
    
    return (
        <>
            <div className='home'>
                <Popup title='Sign Up Page' openPopup={openPopUp} setOpenPopUp={setOpenPopUp}/>
            </div>

            {/* click for on and off side bar */}
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items ">
                        {SidebarData.map((data, idx) =>{
                            const {title, path, icon, cName} = data
                            return(
                                <li key={idx} className={cName}>
                                    <Link to={path} onClick={()=>{setSidebar(false); setHeader(title)}}>
                                        {icon} 
                                        <span className='item'>{title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                </ul>

                <div className="container-fluid navbar fixed-top">
                    <Link to='#' className='menu-bars' onClick={()=>setSidebar(!sidebar)}>
                        <div className='row'>
                            <div className='col-10 '>
                            {sidebar ? <RiIcons.RiEyeCloseLine/> : <FaIcons.FaBars />}
                            </div>
                        </div>
                    </Link>

                    <div className='col-8 header' style={{color:'green'}}>
                        {/* {header} */}
                    </div>

                    <div className='col-2 header '>
                        <p>{date}/{month}/{year} {time}</p>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar
