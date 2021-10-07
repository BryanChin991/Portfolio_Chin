import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as MdIcons from "react-icons/md"
import * as ImIcons from "react-icons/im"
import './footer.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from '../home/Home'
import Projects from '../projects/Projects'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/projects'>Projects</Link></li>
                            <li><Link to='/experience'>Experience</Link></li>
                            <li><Link to='/qualification'>Qualification</Link></li>
                            <li><Link to='/about'>About me</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>

                    <div className="col-7 col-sm-5">
                        <h5>Address</h5>
                        <address>
                            Jalan 7, 217, Kampung Sri Indah <br />
                            47000, Sungai Buloh <br/>
                            Selangor, Darul Ehsan<br/>
                            <i><FaIcons.FaPhoneAlt/> Tel.: <a href="tel:+60182088303">+6018 2088 303</a></i><br/>
                            <i><MdIcons.MdEmail/> Email: </i><a href="mailto:hejunchin991@gmail.com">hejunchin991@gmail.com</a>
                        </address>
                    </div>

                    <div class="col-12 col-sm-4 align-self-center">
                        <div class="text-center">
                        <a
                            class="btn btn-social-icon btn-github m-1"
                            href="https://github.com/BryanChin991" 
                            target='_blank'
                            ><i class="fa fa-github fa-lg"></i
                        ></a>
                        <a
                            class="btn btn-social-icon btn-facebook m-1"
                            href="https://www.facebook.com/hejunchin" 
                            target='_blank'
                            ><i class="fa fa-facebook fa-lg"></i
                        ></a>
                        <a
                            class="btn btn-social-icon btn-linkedin m-1"
                            href="https://www.linkedin.com/in/fook-hee-chin-121282140" 
                            target='_blank'
                            ><i class="fa fa-linkedin fa-lg"></i
                        ></a>
                        <a
                            class="btn btn-social-icon btn-twitter m-1"
                            href="https://join.skype.com/invite/verL6u4qWNMK"
                            target='_blank'
                            ><i class="fa fa-skype fa-lg"></i
                        ></a>
                        <a
                            class="btn btn-social-icon btn-google m-1"
                            href="http://youtube.com/"
                            target='_blank'
                            ><i class="fa fa-link fa-lg"></i
                        ></a>
                        <a class="btn btn-social-icon btn-facebook" 
                            href="mailto:hejunchin991@gmail.com"
                            target='_blank'
                            ><i class="fa fa-envelope-o fa-lg"></i
                        ></a>
                        </div>
                    </div>
                </div>

                 <div class="row justify-content-center mt-2">
                    <div class="col-auto">
                        <p>© Copyright 2021 Chin Fook Hee</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
