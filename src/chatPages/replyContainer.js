import React from 'react';
import signal from '../images/signalGrey.svg';
import eye from '../images/eye.svg'
import Profile_Img from '../images/Marina.png'
import Profile_user1 from '../images/user1.png'
import screen from '../images/screen.jpg'
import laugh_emoji from '../images/emoji/smile.png'
import heart_img from '../images/emoji/heart.png'
import plus from '../images/add.svg'
import audio_img from '../images/speaker.svg'
import video_img  from '../images/vedeo.svg'
import tts_img  from '../images/aud.svg'
import pic_img  from '../images/picture.svg'
import text_img  from '../images/textT.svg'
import villa1 from '../images/villa.jpg'
import villa2 from '../images/villa2.jpg'
import villa3 from '../images/villa3.jpg'
import villamain from '../images/villa3.jpg'
class ReplyContainer extends React.Component{
    
        constructor(props){
            super(props);
            this.state = {
                rotate:true
            }
        }

        rotateAnimate(){
            this.setState({
                rotate: this.state.rotate ? false : true
            })
        }

    render(){
        return(
            <div className="chat-box">
                <div className="col-md-12  border-b">
                    <ul className="nav ml-lg-auto dis_flx">
                        <li className="nav-item head-text2 rep">
                            <a className="nav-link p-t-b-10 rep_bor" href="#" >
                                <img src={eye} width="25" height="25" alt="reply_img" className="pr-2"/>REPLIES
                            </a>
                        </li>
                        <li className="nav-item head-text2">
                            <a className="nav-link  p-t-b-0" href="#">
                            <img src={signal}  alt="message"  width="20" height="20" className="pr-2"/>REPORTS</a>
                        </li>
                    </ul>  
                </div>
                <div className="col-md-12 text-center today-txt m-top-10">
                    <p>Today</p>
                </div>
                <div className="chat-message text-right p-l-r-20">
                    <div className="chat-message-text">
                        <span>Hey Olivia  <img src={laugh_emoji} width="14" height="14"/>, Did you get a chance <br/>to see venue</span>
                        <span className="msg_time_send">2Hr ago</span>
                    </div>
                    <img src={Profile_user1}  alt="profile" className="chat-img"/>
                </div>
                <div className="col-md-12">
                    <div className="chat-message-text-no-arrw offset-md-1">
                        <span>Hi robin, this seems like a great start  <img src={laugh_emoji} width="14" height="14"/></span>
                    </div>   
                </div>
                <div className="col-md-12 m-top-20">
                    <div className="row m0">
                         <div className="col-md-1 flexImg pad-0">
                            <img src={Profile_Img}  alt="profile" className="chat-img align-btm"/>
                        </div>
                        <div className="col-md-5 pad-0 height">
                            <img src={villamain}  alt="send_img" className="chat-screen-img1"/>
                            <img src={villamain}  alt="send_img" className="chat-screen-img"/>
                            <span class="msg_time_send-left">2Hr ago</span>
                        </div>
                        <div className="col-md-2">
                            <img src={villa3}  alt="send_img" width="50px" height="50px" className="sub-screen"/>
                            <img src={villa1}  alt="send_img" width="50px" height="50px" className="sub-screen"/>
                            <img src={villa2}  alt="send_img" width="50px" height="50px" className="sub-screen"/>
                        </div>
                    </div>
                   
                    <div className="smile-emg">
                        <img src={heart_img}  alt="send_img" width="36" height="36" className="pos"/>
                    </div>
                    <div className="dots">
                        
                    </div>
                    
                   
                </div>
                <div className="col-md-12 chatting_box">
                    <div className="row m0">
                        <div className="pad-rgt-15 ">
                            <button className="add-sign" onClick={()=> this.rotateAnimate()}>
                                <img className={this.state.rotate ? "position transForm1" : "position transForm"} src ={plus} width="16" height="16"/>
                            </button>
                        </div>
                        <div className="col-md-8 msg0">
                            <p>Omg Olivia !!
                                <img src={heart_img}  alt="send_img" width="13" height="13" className="m-l-r-5"/>
                                <img src={heart_img}  alt="send_img" width="13" height="13" className="m-l"/>
                                <img src={heart_img}  alt="send_img" width="13" height="13" className="m-l"/> 
                                <img src={heart_img}  alt="send_img" width="13" height="13" className="m-l"/>    
                            </p>    
                        </div>
                        <div className="col-md-3 msgBox text-right p-r-0">
                            <div className="send-msg-box">
                                <svg  width="15" height="15" viewBox="0 0 18 18" className="m-r-10">
                                    <path fill="#FFF" fill-rule="nonzero" d="M.302 7.748l7.199 2.764 2.767 7.183c.07.184.243.305.436.305h.004a.466.466 0 0 0 .435-.297L17.965.666a.5.5 0 0 0-.098-.522.468.468 0 0 0-.506-.112L.298 6.849A.48.48 0 0 0 0 7.303c0 .196.122.377.302.445zm10.414 8.48l-2.3-5.969 7.818-7.805-5.518 13.774zm4.827-14.433L7.748 9.58 1.786 7.29l13.757-5.495z"/>
                                </svg>
                                <span>send</span>
                            </div>
                        </div>
                    </div>
                    
                    {!this.state.rotate ? <div className="col-md-8 attches-menus">
                        <ul className="list-inline">
                            <li><img src ={audio_img}  width="15" height="15"/>
                                <span>Audio</span>
                            </li>
                            <li>
                                <img src ={video_img}  width="15" height="15"/>
                                <span>Video</span> 
                            </li>
                            <li className="text_back">
                                <img src ={text_img}  width="12" height="10"/>
                                <span>Text</span> 
                            </li>
                            <li>
                                <img src ={pic_img}  width="15" height="15"/>
                                <span>Image</span> 
                            </li>
                            <li>
                                <img src ={tts_img}  width="15" height="15"/>
                                <span>TTS</span> 
                            </li>
                            <li>
                                <img src ={audio_img}  width="15" height="15"/>
                                <span>Audio and Text</span> 
                            </li>
                        </ul>
                    </div>:null}
                </div>
            </div>
        )}
    }
export default ReplyContainer;