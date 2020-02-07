import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Chat.css';
import Sidebar from './Sidebar';
import Messages from './messages/Messages';
import LoaderType from '../../models/LoaderType';

class Chat extends Component<{showLoader: any, hideLoader: any}>{

    private loader: LoaderType;

    constructor(props: any){
        super(props);
        this.loader = new LoaderType();
        this.loader.showLoader = props.showLoader;
        this.loader.hideLoader = props.hideLoader;
    }

    render(){
        return(
            <div className="chat">
                <div className="box">
                    <Sidebar />
                    <div className="content">
                        <Router>
                            <Switch>
                                <Route path="/chat/messages" component={(props: any) => <Messages {...props} loader={this.loader} />} />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

export default Chat;