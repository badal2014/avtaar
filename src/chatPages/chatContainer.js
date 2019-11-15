import React from 'react';
import Profile_Img from '../images/Marina.png'
import view from '../images/view.svg'
import signal from '../images/signal.svg'
import imgGirl from '../images/girl.png'
import laugh_emoji from '../images/emoji/smile.png'
import ice_emoji from '../images/ice-cream.svg'
import headphones_emoji from '../images/headphones.svg'
import profile_user_alex from '../images/user2.png'
import img_maria from '../images/maria.png'
import Profile_img_user from '../images/maria.png'

class ChatContainer extends React.Component{
    
        constructor(props){
            super(props);
            this.state = {

            }
        }


    render(){
        return(
        <div className="chat-box">
            <div className="col-md-12 p-t-b-10 border-b">
                <div className="row m0">
                    <div className="col-md-4 pad-0"><span className="chats_text">Chats</span></div>
                    <div className="col-md-8 pad-0 text-right"><span className="chats_count">29/30</span></div>
                </div>   
            </div>
            <div className="col-md-12 gradientColor ">
               <div className="row m0 pad-top-10 pad-bot-0 p-r-l-15">
                  <div className="col-md-2 avatar avatar-sm rounded-circle p-l-r-0">
                        <img src={Profile_Img}  width="40" height="40" alt="profile" />
                  </div>
                  <div className="col-md-9 ">
                        <div className="align-items-center side-prile-box">
                            <h6 className="head-name">Olivia Sol</h6>
                            <p className="msg-text grad-box">Hey robin,this seems like a great start
                                <img src={laugh_emoji} width="15" />
                            </p>
                        </div>
                  </div>
                  <div className="col-md-6 con-time-date p-l-r-0">
                      <p>19 June,2018<span>|</span>3:49 pm</p>
                   </div>
                   <div className="col-md-6 p-l-r-0 con-time-date text-right">
                        <p>
                            <img src={view} alt="" width="15" height="15"/><span>20 Replies</span><span>|</span>
                            <img src={signal} alt="" className="signal"/><span>290/300</span>
                        </p>
                   </div>
                   <div className="line"></div>
                </div>

            </div>

            {/* ----------- */}
            <div className="col-md-12 pad-top-10 pad-bot-0 ">
               <div className="row m0">
               <div className="col-md-2 avatar avatar-sm rounded-circle p-l-r-0">
                    <img src={profile_user_alex}  width="40" height="40" alt="profile" />
                </div>
                  <div className="col-md-8 ">
                        <div className="align-items-center side-prile-box">
                            <h6 className="noHover-name">Alexander</h6>
                            <p className="msg-text">I'll be send the mail soon.</p>
                        </div>
                  </div>
                  <div className="col-md-6 con-time-date p-l-r-0">
                      <p>19 June,2018<span>|</span>3:39 pm</p>
                   </div>
                   <div className="col-md-6 p-l-r-0 con-time-date text-right">
                        <p>
                            <img src={view} alt="" width="15" height="15"/><span>20 Replies</span><span>|</span>
                            <img src={signal} alt="" className="signal"/><span>290/300</span>
                        </p>
                   </div>
                   <div className="line line1"></div>
                </div>
            </div>
            {/* ======== */}
             {/* ----------- */}
             <div className="col-md-12 pad-top-10 pad-bot-0">
               <div className="row m0">
                  <div className="col-md-2 avatar avatar-sm rounded-circle p-l-r-0">
                        <img src={Profile_img_user}  width="40" height="40" alt="profile" />
                  </div>
                  <div className="col-md-8 ">
                        <div className="align-items-center side-prile-box">
                            <h6 className="noHover-name">Sophia Richie</h6>
                            <p className="msg-text">Thanks, how about an <img src={ice_emoji} width="13" />?</p>
                        </div>
                  </div>
                  <div className="col-md-6 con-time-date p-l-r-0">
                      <p>19 June,2018<span>|</span>3:39 pm</p>
                   </div>
                   <div className="col-md-6 p-l-r-0 con-time-date text-right">
                        <p>
                            <img src={view} alt="" width="15" height="15"/><span>20 Replies</span><span>|</span>
                            <img src={signal} alt="" className="signal"/><span>290/300</span>
                        </p>
                   </div>
                   <div className="line line1"></div>
                </div>
            </div>
            {/* ======== */}
            {/* ----------- */}
            <div className="col-md-12 pad-top-10 pad-bot-0">
               <div className="row m0">
                  <div className="col-md-2 avatar avatar-sm rounded-circle p-l-r-0">
                        <img src={profile_user_alex}  width="40" height="40" alt="profile" />
                  </div>
                  <div className="col-md-8 ">
                        <div className="align-items-center side-prile-box">
                            <h6 className="noHover-name">Ethan Malson</h6>
                            <p className="msg-text">Woohoo <img src={headphones_emoji} width="10" /></p>
                        </div>
                  </div>
                  <div className="col-md-6 con-time-date p-l-r-0">
                      <p>18 Jan,2018<span>|</span>10:30 am</p>
                   </div>
                   <div className="col-md-6 p-l-r-0 con-time-date text-right">
                        <p>
                            <img src={view} alt="" width="15" height="15"/><span>20 Replies</span><span>|</span>
                            <img src={signal} alt="" className="signal"/><span>290/300</span>
                        </p>
                   </div>
                   <div className="line line1"></div>
                </div>
            </div>
            {/* ======== */}
             {/* ----------- */}
             <div className="col-md-12 pad-top-10 pad-bot-0">
               <div className="row m0">
                  <div className="col-md-2 avatar avatar-sm rounded-circle p-l-r-0">
                        <img src={profile_user_alex}  width="40" height="40" alt="profile" />
                  </div>
                  <div className="col-md-8">
                        <div className="align-items-center side-prile-box">
                            <h6 className="noHover-name">William</h6>
                            <p className="msg-text">Okay please tell me </p>
                        </div>
                  </div>
                  <div className="col-md-6 con-time-date p-l-r-0">
                      <p>18 Jan,2018<span>|</span>08:10 am</p>
                   </div>
                   <div className="col-md-6 p-l-r-0 con-time-date text-right">
                        <p>
                            <img src={view} alt="view" width="15" height="15"/><span>20 Replies</span><span>|</span>
                            <img src={signal} alt="signal" className="signal"/><span>290/300</span>
                        </p>
                   </div>
                   <div className="line line0"></div>
                </div>
            </div>
            {/* ======== */}

        </div>
         
        )}
    }
export default ChatContainer;