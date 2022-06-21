import React from "react";
import "./footer.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <div >
            <div class="footer pt-4 pb-4  text-center text-md-start position-absolute bottom-0 start-50 translate-middle-x w-100 ">
                <div class="px-5 text-center">
                    <div class="row  ">
                        <div class="col-md-6 col-lg-3 ">
                            <div class="logo ">
                                <img  src="images/musicLogo.png" alt="" />
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-2 ">
                            <div class="COMPANY">
                                <h5 class="">COMPANY</h5>
                                <ul class="list-unstyled lh-lg">
                                    <li>About</li>
                                    <li>Jobs</li>
                                    <li>For the Record</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-2 ">
                            <div class="COMMUNITIES ">
                                <h5 class="">COMMUNITIES</h5>
                                <ul class="list-unstyled  lh-lg">
                                    <li>For Artists</li>
                                    <li>Developers</li>
                                    <li>Advertising</li>
                                    <li>Investors</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-2 ">
                            <div class="links">
                                <h5 class="">Links</h5>
                                <ul class="list-unstyled lh-lg">
                                    <li>USEFUL LINKS</li>
                                    <li>Support</li>
                                    <li>Web Player</li>
                                    <li>Free Mobile App</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="col-md-6 col-lg-3 ">
                            <div class="contact ">
                                <ul class="d-flex justify-content-center list-unstyled gap-4">
                                    <li>
                                        <a class="d-block icon text-light" href="#">
                                            <FontAwesomeIcon size="2x" icon={faGithub} /></a>
                                    </li>
                                    <li>
                                        <a class="d-block icon text-light " href="#">
                                            <FontAwesomeIcon size="2x" icon={faLinkedin} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="copyright  text-light">
                                <span>Germany</span>
                                <div>&copy;<span>{new Date().getFullYear()}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Footer;