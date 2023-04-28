import '../style.css'
import Hero1 from '../assets/hero1.jpg';
import Hero2 from '../assets/hero2.jpg';
import Hero3 from '../assets/hero3.jpg';
import SocialFollow from "../SocialFollow.js"
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
    faGithub,
    faTiktok
  } from "@fortawesome/free-brands-svg-icons";


function HeroContentAvatar (){
    return (  
        <section>
            {/* <SocialFollow/> */}
            <div className="row d-flex justify-content-center">
                <div className="col-md-10 col-xl-8 text-center">
                    <h3 className="mb-4">OUR TEAM</h3>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-md-4 mb-5 mb-md-0 py-3" >
                    <div className="card testimonial-card" style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,.2)'}}>
                        <div className="card-up" style={{ backgroundColor: "#7a81a8" }} />
                            <div className="avatar mx-auto bg-white">
                                <img
                                    src={Hero1}
                                    className="rounded-circle img-fluid"
                                />
                            </div>
                            <div className="card-body">
                                <h4 className="mb-2"><strong>Muhammad Saefulloh</strong></h4>
                                <p className="text-muted">Software Engineer</p>
                                <a href="https://www.youtube.com/c/jamesqquick"
                                    className="linkedin social" data-toggle="tooltip" title="LinkedIn">
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                </a>
                                <a href="https://www.instagram.com/learnbuildteach"
                                    className="instagram social" data-toggle="tooltip" title="Github">
                                    <FontAwesomeIcon icon={faGithub} size="2x" />
                                </a>
                                <a href="https://www.instagram.com/learnbuildteach"
                                    className="instagram social" data-toggle="tooltip" title="Instagram">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-5 mb-md-0 py-3" >
                        <div className="card testimonial-card" style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,.2)'}}>
                            <div className="card-up" style={{ backgroundColor: "#7a81a8" }} />
                                <div className="avatar mx-auto bg-white">
                                    <img
                                        src={Hero2}
                                        className="rounded-circle img-fluid"
                                    />
                                </div>
                                <div className="card-body">
                                    <h4 className="mb-2"><strong>Sofia Hidayatun</strong></h4>
                                    <p className="text-muted">Digital Marketing</p>
                                    <a href="https://www.youtube.com/c/jamesqquick"
                                        className="linkedin social" data-toggle="tooltip" title="LinkedIn">
                                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                    </a>
                                    <a href="https://www.instagram.com/learnbuildteach"
                                        className="instagram social" data-toggle="tooltip" title="TikTok">
                                        <FontAwesomeIcon icon={faTiktok} size="2x" />
                                    </a>
                                    <a href="https://www.instagram.com/learnbuildteach"
                                        className="instagram social" data-toggle="tooltip" title="Instagram">
                                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    <div className="col-md-4 mb-5 mb-md-0 py-3" >
                        <div className="card testimonial-card" style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,.2)'}}>
                            <div className="card-up" style={{ backgroundColor: "#7a81a8" }} />
                                <div className="avatar mx-auto bg-white">
                                    <img
                                        src={Hero3}
                                        className="rounded-circle img-fluid"
                                    />
                                </div>
                            <div className="card-body">
                                <h4 className="mb-2"><strong>Cahyadi Maulana</strong></h4>
                                <p className="text-muted">UI/UX Designer</p>
                                <a href="https://www.youtube.com/c/jamesqquick"
                                    className="linkedin social" data-toggle="tooltip" title="LinkedIn">
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                </a>
                                <a href="https://www.instagram.com/learnbuildteach"
                                    className="twitter social" data-toggle="tooltip" title="Twitter">
                                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                                </a>
                                <a href="https://www.instagram.com/learnbuildteach"
                                    className="instagram social" data-toggle="tooltip" title="Instagram">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
        </section>

    )
}
export default HeroContentAvatar;