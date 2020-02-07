import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import style from './Authenticate.module.css';
import Background from './../../images/login_background.jpg';
import Login from './Login';
import Register from './Register';
import Loader from '../loader/redirect/Loader';

const Authenticate = (props: any) => {

    const loader = props.loader;
    const showLoader = props.showLoader;
    const hideLoader = props.hideLoader;

    return (
        <div className={style.authenticate}>
            {loader}
            <Router>
                <Switch>
                    <Route path="/authenticate/signin" render={(props) => <Login {...props} loader={{showLoader, hideLoader}} />} />
                    <Route path="/authenticate/signup" render={(props) => <Register {...props} loader={{showLoader, hideLoader}} />} />
                </Switch>
            </Router>
        </div>
    )
};

export default Authenticate;