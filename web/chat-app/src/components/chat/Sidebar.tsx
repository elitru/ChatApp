import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Images from '../../utils/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faUsers, faComments, faPlus } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';

class Sidebar extends Component{

    constructor(props: any){
        super(props);
    }

    render(){
        const cogs = <FontAwesomeIcon icon={faCog} />
        const contacts = <FontAwesomeIcon icon={faUsers} />
        const messages = <FontAwesomeIcon icon={faComments} />
        const addContact = <FontAwesomeIcon icon={faPlus} />

        return(
            <div className="sidebar">
                <div className="logo">
                    <img src={Images.getLogoWhite()} />
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <NavLink className="link" activeClassName="active" to="/chat/messages">
                                {messages}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="link" activeClassName="active" to="/chat/contacts">
                                {contacts}
                            </NavLink>
                        </li>
                        <li className="plus">
                            <NavLink className="link" activeClassName="active" to="/chat/addContact">
                                {addContact}
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="settings">
                    {cogs}
                </div>
            </div>
        );
    }
}

export default Sidebar;