import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaugh, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import './ChatArea.css';

class ChatArea extends Component{
    
    constructor(props: any){
        super(props);
    }

    render(){
        const emoji = <FontAwesomeIcon icon={faLaugh} />
        const send = <FontAwesomeIcon icon={faLocationArrow} />

        return(
            <div className="chat-area">
                <div className="message-area">

                </div>
                <div className="editor">
                    <div className="emojis">
                        {emoji}
                    </div>
                    <div className="input">
                        <textarea maxLength={1000} placeholder="Type a message"></textarea>
                    </div>
                    <div className="send">
                        <button>
                            {send}
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChatArea;