import React, { Component } from 'react';
import './Messages.css';
import LoaderType from '../../../models/LoaderType';
import Contacts from './contacts/Contacts';
import ChatArea from './chat-area/ChatArea';

class Messages extends Component<{ loader: LoaderType }>{

    private loader: LoaderType;

    constructor(props: any){
        super(props);
        this.loader = props.loader;
    }

    render(){
        return(
            <div className="messages">
                <div className="contacts">
                    <Contacts />
                </div>
                <div className="chat-area">
                    <ChatArea />
                </div>
            </div>
        );
    }
}

export default Messages;