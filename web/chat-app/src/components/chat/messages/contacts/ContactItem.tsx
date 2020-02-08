import React, { Component } from 'react';
import './ContactItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Images from '../../../../utils/images';
import ContactItemState from '../../../../models/states/ContactItemState';

class ContactItem extends Component<{contactState: ContactItemState}, ContactItemState>{
    constructor(props: any){
        super(props);

        this.state = props.contactState;
    }

    render(){
        const user = <FontAwesomeIcon icon={faUser} />
        var contactItemClass = 'contact-item';
        contactItemClass += this.state.isFocused ? ' contact-item-active' : '';

        return (
            <div className={contactItemClass}>
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