import React from 'react';
import Profile_Img from '../images/user1.png'
import message from '../images/message.svg';
import friends from '../images/friends.svg';
import vid from '../images/video-camera.svg';


import '../chatCss/main.scss'

class Sidebar extends React.Component{
    
        constructor(props){
            super(props);
            this.state = {

            }
        }


    render(){
        return(
            <div className="side_menu">
                <div className="intro-container">
                    <img src={Profile_Img} alt="Profile_img" className="side-profile-img"/>
                    <p className="p-name">Robin Wang</p>
                    <p className="p-msg">Life starts at the end of your <br /> comfort zone</p>
                </div>
                <div className="message-container m-top-30 ">
                    {/* <button className="btn-msg">
                        <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" id="Capa_1" x="0px" y="0px" width="15px" height="14px" viewBox="0 0 510 510" style={{enableBackground:"new 0 0 510 510"}} ><g><g>
                            <g id="messenger">
                                <path d="M459,0H51C22.95,0,0,22.95,0,51v459l102-102h357c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#ffff"/>
                            </g>
                            </g></g> 
                        </svg>
                        <span>Messages</span>
                     </button> */}
                     <div className="btn-msg shadowBox">
                         <div className="row m0">
                             <div className="col-md-4 pad-0 text-right"><svg xmlns="http://www.w3.org/2000/svg"  version="1.1" id="Capa_1" x="0px" y="0px" width="15px" height="14px" viewBox="0 0 510 510" style={{enableBackground:"new 0 0 510 510"}} ><g><g>
                            <g id="messenger">
                                <path d="M459,0H51C22.95,0,0,22.95,0,51v459l102-102h357c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#ffff"/>
                            </g>
                            </g></g> 
                        </svg></div>
                                 <div className="col-md-8 text-left pad-0"><span>Messages</span></div>
                         </div>
                     </div>
                     <div className="btn-chat col-md-9 offset-md-1">
                        <p>Chats</p>
                     </div>
                     <div className="btn-send-msg col-md-10 offset-md-2">
                        <p>Send Message</p>
                     </div>

                </div>
                <div className="message-container group-container">
                    <div className="btn-msg shadowBox1">
                         <div className="row m0">
                             <div className="col-md-4 pad-0 text-right">
                                 <svg version="1.1" id="Capa_1" x="0px" y="0px"  viewBox="0 0 512 512" style={{enableBackground:"new 0 0 512 512"}} width="15px" ><g><g>
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
                             </div>
                            <div className="col-md-8 text-left pad-0"><span>Groups</span></div>
                         </div>
                     </div>
                     <div className="btn-chat col-md-9 offset-md-1 pad-25">
                        <p>History</p>
                     </div>
                     <div className="btn-send-msg col-md-11 offset-md-1 pad-30">
                        <p>Create Groups</p>
                     </div>
                </div>
                <div className="message-container group-container">
                    <div className="btn-msg shadowBox1">
                        <div className="row m0">
                            <div className="col-md-4 pad-0 text-right">
                                <img src={vid} alt="video_calls" className="side-profile-img" height="14" width="15"/>
                            </div>
                        <div className="col-md-8 text-left pad-0"><span>Video Calls</span></div>
                        </div>
                     </div>
                     <div className="btn-chat col-md-9 offset-md-1 pad-25">
                        <p>History</p>
                     </div>
                     <div className="btn-send-msg pad-rgt-15">
                        <p>Callss</p>
                     </div>
                </div>
            </div>
        )};
    }

export default Sidebar;