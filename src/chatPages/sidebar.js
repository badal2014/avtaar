import React from 'react';
import Profile_Img from '../images/Marina.png'
import message from '../images/message.svg';
import friends from '../images/friends.svg';
import vid from '../images/vid.svg';


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
                                 <img src={friends} alt="groups" className="side-profile-img" height="14" width="15"/>
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