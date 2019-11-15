import React from 'react';
import Header from './chatPages/header';
import Sidebar from './chatPages/sidebar'; 
import ChatContainer from './chatPages/chatContainer'; 
import ReplyContainer from './chatPages/replyContainer'; 

import expand from './images/expand.svg';

class Main extends React.Component{
    
        constructor(props){
            super(props);
            this.state = {

            }
        }


    render(){
        return(
            <div>
                <Header/>
                <div className="second-section">
                    <div className="sub-container">
                        <div className="row m0">
                            <div className="col-md-2 side-text-center">
                                <Sidebar/>
                            </div>
                            <div className="col-md-10">
                                <div className="row m0">
                                    <div className="col-md-10">
                                        <ul className="list-inline display_inline">
                                            <li>
                                                <svg xmlns="http://www.w3.org/2000/svg"  version="1.1" id="Capa_1" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 510 510" style={{enableBackground:"new 0 0 510 510"}} ><g><g>
                                                    <g id="messenger">
                                                        <path d="M459,0H51C22.95,0,0,22.95,0,51v459l102-102h357c28.05,0,51-22.95,51-51V51C510,22.95,487.05,0,459,0z" data-original="#000000" class="active-path" data-old_color="#000000" fill="#f98278"/>
                                                    </g> </g></g> 
                                                </svg>
                                            </li>
                                            <li className="p-l-15">
                                                <span>Messages</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-2 text-right">
                                        <img src={expand} alt="expand" width="20"/>
                                    </div>
                                </div>

                                <div className="row m0 white">
                                    <div className="col-md-4 border-r p-l-r-0">
                                        <ChatContainer />
                                    </div>
                                    <div className="col-md-8 border-l p-l-r-0">
                                        <ReplyContainer />
                                    </div>
                                </div>


                            </div>
                         </div>
                    </div>
                 </div>
             </div>
        )
    }
}

export default Main;