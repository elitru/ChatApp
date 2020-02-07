import React, { Component } from 'react';
import './Messages.css';
import LoaderType from '../../../models/LoaderType';
import Contacts from './contacts/Contacts';

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

                </div>
            </div>
        );
    }
}

export default Messages;