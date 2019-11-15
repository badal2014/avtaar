import React from 'react';
import signal from '../images/signal.svg';
import eye from '../images/eye.svg'
import Profile_Img from '../images/Marina.png'
import screen from '../images/screen.jpg'
import laugh_emoji from '../images/emoji/smile.png'
import heart_img from '../images/emoji/heart.png'
import plus from '../images/add.svg'
import audio_img from '../images/speaker.svg'
import video_img  from '../images/vedeo.svg'
import tts_img  from '../images/aud.svg'
import pic_img  from '../images/picture.svg'

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
                <div className="col-md-12 p-t-b-10 border-b">
                    <ul className="nav ml-lg-auto dis_flx">
                        <li className="nav-item head-text2">
                            <a className="nav-link p-t-b-0" href="#" >
                                <img src={eye} width="25" height="25" alt="friends" className="pr-2"/>REPLIES
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
                        <span className="msg_time_send">2hr ago</span>
                    </div>
                    <img src={Profile_Img}  alt="profile" className="chat-img"/>
                </div>
                <div className="col-md-12">
                    <div className="chat-message-text-no-arrw offset-md-1">
                        <span>Hi robin, this seems like a great start  <img src={laugh_emoji} width="14" height="14"/></span>
                    </div>   
                </div>
                <div className="col-md-12 m-top-20">
                    <img src={Profile_Img}  alt="profile" className="chat-img align-btm"/>
                    <img src={screen}  alt="send_img" className="chat-screen-img"/>
                    <div className="smile-emg">
                        <img src={heart_img}  alt="send_img" width="36" height="36" className="pos"/>
                    </div>
                </div>
                <div className="col-md-12 chatting_box">
                    <div className="row m0">
                        <div className="pad-rgt-15 ">
                            <button className="add-sign" onClick={()=> this.rotateAnimate()}>
                                <img className={this.state.rotate ? "position transForm1" : "position transForm"} src ={plus} width="15" height="15"/>
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
                        <div className="col-md-3 text-right p-r-0">
                            <div className="send-msg-box">
                                {/* <img src ={} /> */}
                                <span>send</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 attches-menus">
                        <ul className="list-inline">
                            <li><img src ={audio_img}  width="15" height="15"/>
                                <span>Audio</span>
                            </li>
                            <li>
                                <img src ={video_img}  width="15" height="15"/>
                                <span>Vudio</span> 
                            </li>
                            <li>
                                <img src ={audio_img}  width="15" height="15"/>
                                <span>Text</span> 
                            </li>
                            <li>
                                <img src ={pic_img}  width="15" height="15"/>
                                <span>Image</span> 
                            </li>
                            <li>
                                <img src ={tts_img}  width="15" height="15"/>
                                <span>TTs</span> 
                            </li>
                            <li>
                                <img src ={audio_img}  width="15" height="15"/>
                                <span>Audio and Text</span> 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )}
    }
export default ReplyContainer;