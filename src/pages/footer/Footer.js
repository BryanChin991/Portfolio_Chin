import React from 'react'
import * as FaIcons from "react-icons/fa"
import * as MdIcons from "react-icons/md"
import * as ImIcons from "react-icons/im"
import './footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">Home</a></li>
                            <li><a href="/experience">Experience</a></li>
                            <li><a href="/projects">Projects</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="/qualification">Qualification</a></li>
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
                            class="btn btn-social-icon btn-github"
                            href="http://google.com/+"
                            ><i class="fa fa-github fa-lg"></i
                        ></a>
                        <a
                            class="btn btn-social-icon btn-facebook"
                            href="http://www.facebook.com/profile.php?id="
                            ><i class="fa fa-facebook fa-lg"></i
                        ></a>
                        <a
                            class="btn btn-social-icon btn-linkedin"
                            href="http://www.linkedin.com/in/"
                            ><i class="fa fa-linkedin fa-lg"></i
                        ></a>
                        <a
                            class="btn btn-social-icon btn-twitter"
                            href="http://twitter.com/"
                            ><i class="fa fa-twitter fa-lg"></i
                        ></a>
                        <a
                            class="btn btn-social-icon btn-google"
                            href="http://youtube.com/"
                            ><i class="fa fa-link fa-lg"></i
                        ></a>
                        <a class="btn btn-social-icon btn-facebook" href="mailto:"
                            ><i class="fa fa-envelope-o fa-lg"></i
                        ></a>
                        </div>
                    </div>
                </div>

                 <div class="row justify-content-center">
                    <div class="col-auto">
                        <p>© Copyright 2021 Chin Fook Hee</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
