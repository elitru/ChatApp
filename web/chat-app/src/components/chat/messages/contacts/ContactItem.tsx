import React, { Component } from 'react';
import './ContactItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Images from '../../../../utils/images';
import ContactItemState from '../../../../models/states/ContactItemState';

class ContactItem extends Component<{contact: ContactItemState, onFocusChange: Function}, ContactItemState>{
    private onFocusChange: Function;

    constructor(props: any){
        super(props);

        this.state = props.contact;
        this.onFocusChange = props.onFocusChange;

        this.onFocus = this.onFocus.bind(this);
    }

    private onFocus(): void{
        // const state: ContactItemState = this.state;
        // state.isFocused = true;
        // this.setState(state);
        this.onFocusChange(this.state.username);
    }

    render(){
        const user = <FontAwesomeIcon icon={faUser} />
        var contactItemClass = 'contact-item';
        contactItemClass += this.state.isFocused ? ' contact-item-active' : '';

        return (
            <div className={contactItemClass} onClick={this.onFocus}>
                <div className="profile-img">
                    <img className={this.state.profileImg == null ? 'hidden' : ''} src={this.state.profileImg} />
                    {
                        this.state.profileImg == null ? user : null
                    }
                </div>
                <div className="data">
                    <span className="username">
                        {this.state.username}
                    </span>
                    <span className="online-status">
                        {this.state.onlineStatus}
                    </span>
                </div>
                <div className="message-notification">
                    <span className={this.state.newMessageCount == 0 ? 'hidden' : ''}>
                        {this.state.newMessageCount}
                    </span>
                </div>
            </div>
        );
    }
}

export default ContactItem;