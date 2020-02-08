import React, { Component } from 'react';
import './Contacts.css';
import ContactItem from './ContactItem';
import ContactItemState from '../../../../models/states/ContactItemState';
import Images from '../../../../utils/images';

class Contacts extends Component<{}, {contacts: any}>{
    c1 = new ContactItemState(Images.getSampleProfile(), 'realSuffix', 'online', 2, false);
    c2 = new ContactItemState(null, 'elitru', 'offline', 3, true);
    c3 = new ContactItemState(Images.getSampleProfile(), 'KainziHD', 'online', 0, false);
    
    private focusedContact: string = 'elitru';

    constructor(props: any){
        super(props);

        this.state = {
            contacts: [this.c1, this.c2, this.c3]
        }

        this.onFocusChange = this.onFocusChange.bind(this);
    }

    public onFocusChange(username: string){
        if(username === this.focusedContact){
            return;
        }

        for(let i = 0; i < this.state.contacts.length; i++){
            if(this.state.contacts[i].username === username){
                this.state.contacts[i].isFocused = true;
                continue;
            }

            this.state.contacts[i].isFocused = false;
        }

        this.setState(this.state);
        //TODO: load load chat of new person
    }

    render(){
        return (
            <div className="contacts-container">
                <ContactItem contact={this.c1} onFocusChange={this.onFocusChange} />
                <ContactItem contact={this.c2} onFocusChange={this.onFocusChange} />
                <ContactItem contact={this.c3} onFocusChange={this.onFocusChange} />
            </div>
        );
    }
}

export default Contacts;