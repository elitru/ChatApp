import React, { Component } from 'react';
import './Contacts.css';
import ContactItem from './ContactItem';
import ContactItemState from '../../../../models/states/ContactItemState';
import Images from '../../../../utils/images';

class Contacts extends Component{
    render(){
        const c1 = new ContactItemState(Images.getSampleProfile(), 'realSuffix', 'online', 2, false);
        const c2 = new ContactItemState(null, 'elitru', 'offline', 3, true);
        const c3 = new ContactItemState(Images.getSampleProfile(), 'KainziHD', 'online', 0, false);

        return (
            <div className="contacts-container">
                <ContactItem contactState={c1} />
                <ContactItem contactState={c2} />
                <ContactItem contactState={c3} />
            </div>
        );
    }
}

export default Contacts;