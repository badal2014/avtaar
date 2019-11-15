import React from 'react';

import '../chatCss/main.scss'

import logo from '../images/logo.svg';
import friends from '../images/friends.svg';
import message from '../images/message.svg';
import vid from '../images/vid.svg';
import info from '../images/information.svg';
import noty from '../images/notification.svg';
import Profile_Img from '../images/Marina.png'
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
                            <div className="col-md-4 pad-t-b">
                                <a href="# "className="navbar-brand m-l-20">
                                    <img src={logo} width="20" alt="logo"/> <span className="text-logo">italk</span>
                                </a>
                            </div>
                            <div className="col-md-4 pad-t-b">
                                <ul className="nav ml-lg-auto">
                                    <li className="nav-item head-text">
                                        <a className="nav-link p-l-r" href="#" >
                                            <img src={friends} width="25" alt="friends" class="pr-2"/>Groups
                                        </a>
                                    </li>
                                    <li className="nav-item head-text">
                                        <a className="nav-link" href="#">
                                            <img src={message} width="25" alt="message" class="pr-2"/>Messages</a>
                                    </li>
                                    <li className="nav-item head-text">
                                        <a className="nav-link" href="#">
                                            <img src={vid} width="25" alt="video_calls" class="pr-2"/>Video Calls</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-4 pad-t-b">
                                <ul className="nav floatR side-drop">
                                    <li className="nav-item head-text">
                                        <a className="nav-link" href="#" >
                                            <img src={info} width="17" alt="info"/>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">
                                            <img src={noty} width="17" alt="notificaton"/>
                                        </a>
                                    </li>
                                    <li className="nav-item Profile_name">
                                        <img src={Profile_Img}  alt="profile" class="img-pro"/>
                                        <span>Robin Wang</span>
                                        <img src={arrow} width="25" height="9" alt="arrow"/>
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