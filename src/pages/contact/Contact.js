import React from 'react'
import Footer from '../footer/Footer'

const Contact = () => {
    return (
        <>
            <div className='container'>
                <div className="section_title">
                    <h1> Contact Me</h1>
                    <div className="underline"></div>
                </div>
                

                <div className="row">
                    <div class="col-12 col-sm-5">
                        <h3>Location Information</h3>

                        <div className="row">
                            <div class="col-12 offset-sm-2">
                            <h5>Address</h5>
                            <address style={{fontSize:'100%'}}>
                                Jalan 7, 217, Kampung Sri Indah,<br/>
                                47000, Sungai Buloh, <br/>
                                Selangor Darul Ehsan<br />
                                <i class="fa fa-phone"></i>: +60 18 2088 303<br />
                                <i class="fa fa-envelope"></i>:
                                <a href="mailto:hejunchin991@gmail.com">  hejunchin991@gmail.com</a>
                            </address>
                        </div>

                        <div className="row">
                            <div class="col-12 offset-sm-2">
                                <div class="btn-group" role="group">
                                    <a role="button" class="btn btn-primary m-1" href="tel:+60182088303"
                                    ><i class="fa fa-phone"> </i> Call </a>
                                    <a role="button" class="btn btn-info m-1" href='https://join.skype.com/invite/verL6u4qWNMK'>
                                        <i class="fa fa-skype"></i> Skype</a>
                                    <a
                                    role="button"
                                    class="btn btn-success m-1"
                                    href="mailto:hejunchin991@gmail.com"
                                    ><i class="fa fa-envelope-o"></i> Email</a
                                    >
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="col-12 col-sm-7 mb-3">
                        {/* <h5>Map of our Location</h5> */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.4824641022146!2d101.57158631408944!3d3.2293953535563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc45ab06331059%3A0x6301b78856fc59a4!2s217%2C%20Jalan%207%2C%20Kampung%20Sri%20Indah%20A%2C%2047000%20Sungai%20Buloh%2C%20Selangor!5e0!3m2!1sen!2smy!4v1632840965484!5m2!1sen!2smy" 
                                width="650" 
                                height="350" 
                                style={{border:'0'}}
                                allowfullscreen="" 
                                loading="lazy">
                        </iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact
