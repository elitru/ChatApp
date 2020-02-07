import React, { Component } from 'react';
import './Contacts.css';
import ContactItem from './ContactItem';

class Contacts extends Component{
    render(){
        return (
            <div className="contacts-container">
                <ContactItem />
            </div>
        );
    }
}

export default Contacts;