import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa"
import * as RiIcons from "react-icons/ri"
import {SidebarData} from './SidebarData'
import './Navbar.css'

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)
    const [header, setHeader] = useState('')

    return (
        <>
            <div className="container-fluid navbar">
                <Link to='#' className='menu-bars' onClick={()=>setSidebar(!sidebar)}>
                    <div className='row'>
                        <div className='col'>
                        {sidebar ? <RiIcons.RiEyeCloseLine/> : <FaIcons.FaBars />}
                        </div>

                        <div className='col header'>
                            {header ? header : 'Welcome'}
                        </div>
                    </div>
                </Link>
            </div>

            {/* click for on and off side bar */}
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items">
                        {SidebarData.map((data, idx) =>{
                            const {title, path, icon, cName} = data
                            return(
                                <li key={idx} className={cName}>
                                    <Link to={path} onClick={()=>{setSidebar(false); setHeader(title)}}>
                                        {icon} 
                                        <span>{title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                </ul>
            </nav>
        </>
    )
}

export default Navbar
