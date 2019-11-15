import React from 'react';

import '../chatCss/main.scss'

import logo from '../images/logo.svg';
import friends from '../images/friends.svg';
import message from '../images/message.svg';
import vid from '../images/video-camera.svg';
import info from '../images/information.svg';
import noty from '../images/notification.svg';
import Profile_Img from '../images/user1.png'
import arrow from '../images/arrow.svg';


class Header extends React.Component{
    
        constructor(props){
            super(props);
            this.state = {

            }
        }


    render(){
        return(
                <header className="header">
                    <nav className="navbar navbar-expand-lg navbar-dark  before-toggle-icon nv-inline pad-0">
                        <div className="row m0">
                            <div className="col-md-4">
                                <a href="# "className="navbar-brand m-l-20">
                                    <img src={logo} width="20" alt="logo"/> <span className="text-logo">italk</span>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <ul className="nav ml-lg-auto">
                                    <li className="nav-item head-text">
                                        <a className="nav-link p-l-r hoverBorderHeader active-clr "  href="#" >
                                            <svg version="1.1" id="Capa_1" x="0px" y="0px"  viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512"}} width="20px" className="pr-2"><g><g>
                                                <g>
                                                    <path d="M155.327,57.142c-51.531,0-93.454,44.45-93.454,99.086c0,54.636,41.923,99.086,93.454,99.086s93.455-44.45,93.455-99.086    C248.782,101.592,206.859,57.142,155.327,57.142z" data-original="#000000" className="active-path" data-old_color="#000000" fill="#A9A9A9"/>
                                                </g>
                                                </g><g>
                                                    <g>
                                                        <path d="M367.798,71.321c-0.211,0-0.425,0.001-0.636,0.002c-21.626,0.179-41.826,9.31-56.878,25.713    c-14.788,16.113-22.829,37.37-22.644,59.854c0.186,22.484,8.577,43.605,23.628,59.473c15.17,15.991,35.265,24.773,56.651,24.773    c0.215,0,0.43-0.001,0.646-0.002c21.626-0.179,41.826-9.311,56.878-25.713c14.788-16.113,22.829-37.37,22.644-59.855    C447.702,108.972,411.747,71.321,367.798,71.321z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#A9A9A9"/>
                                                    </g>
                                                </g><g>
                                                    <g>
                                                        <path d="M371.74,257.358h-7.76c-36.14,0-69.12,13.74-94.02,36.26c6.23,4.78,12.16,9.99,17.78,15.61    c16.58,16.58,29.6,35.9,38.7,57.42c8.2,19.38,12.88,39.8,13.97,60.83H512v-29.87C512,320.278,449.08,257.358,371.74,257.358z" data-original="#000000" className="active-path" data-old_color="#000000" fill="#A9A9A9"/>
                                                    </g>
                                                </g><g>
                                                    <g>
                                                        <path d="M310.35,427.478c-2.83-45.59-25.94-85.69-60.43-111.39c-25.09-18.7-56.21-29.77-89.92-29.77h-9.34    C67.45,286.319,0,353.768,0,436.978v17.88h310.65v-17.88C310.65,433.788,310.55,430.618,310.35,427.478z" data-original="#000000" className="active-path" data-old_color="#000000" fill="#A9A9A9"/>
                                                    </g>
                                            </g></g> 
                                        </svg>
                                            Groups
                                        </a>
                                    </li>
                                    <li className="nav-item head-text">
                                        <a className="nav-link hoverBorderHeader " href="#">
                                            <svg  version="1.1" id="Capa_1" x="0px" y="0px" width="20px" height="17px" viewBox="0 0 510 510" style={{enableBackground:"new 0 0 510 510"}} className="pr-2"><g><g>
                                                <g id="messenger">
                                                    <path d="M459,0H51C22.95,0,0,22.95,0,51v459l102-102h357c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z" data-original="#000000" className="active-path" data-old_color="#000000" fill="#a9a9a9"/>
                                                </g>
                                                </g></g> 
                                            </svg>
                                        Messages</a>
                                    </li>
                                    <li className="nav-item head-text">
                                        <a className="nav-link hoverBorderHeader" href="#">
                                            <svg  height="17px" viewBox="0 -87 432 432" width="23px" className="pr-2">
                                                <g>
                                                <path d="m278.90625 0h-248.90625c-16.5625.0195312-29.9804688 13.4375-30 30v197.421875c.0195312 16.5625 13.4375 29.980469 30 30h248.90625c16.558594-.019531 29.980469-13.4375 30-30v-197.421875c-.019531-16.5625-13.441406-29.9804688-30-30zm0 0" data-original="#000000" class="active-path" data-old_color="#000000" fill="#A9A9A9"/>
                                                <path d="m328.90625 169.800781 103.09375 56.285157v-194.105469l-103.09375 56.285156zm0 0" data-original="#000000" class="active-path" data-old_color="#000000" fill="#A9A9A9"/></g> 
                                            </svg>Video Calls
                                        </a>
                                    </li>
                                    <span class="border"></span>
                                </ul>
                            </div>
                            <div className="col-md-4 p-r-0">
                                <ul className="nav floatR side-drop ">
                                    <li className="nav-item ">
                                        <a className="nav-link  p-r-0" href="#" >
                                            <img src={info} width="17" alt="info"/>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <img src={noty} width="17" alt="notificaton"/>
                                        </a>
                                    </li>
                                    <li className="nav-item Profile_name head-text">
                                        <img src={Profile_Img}  alt="profile" class="img-pro"/>
                                        <span>Robin Wang</span>
                                        <img src={arrow} width="23" height="8" alt="arrow"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>    
                </header>
        )
    }
 }

 export default Header;