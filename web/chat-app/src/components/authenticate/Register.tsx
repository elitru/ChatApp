import React from 'react';
import { Link } from 'react-router-dom';
import style from './Authenticate.module.css';
import Images from '../../utils/images';

const Register = (props: any) => {
    return (
        <div className={style.container}>
            <img className={style.logo} src={Images.getLogoPrimary1()} />
            <h1>Sign up</h1>
            <p>
                You already have an account?
            </p>
            <Link to="/authenticate/signin" className="link">Sign in here</Link>
            <div className={style.input}>
                <span>Username</span>
                <input type="text" placeholder="e.g. john_doe" />
            </div>
            <div className={style.input}>
                <span>Password</span>
                <input type="text" placeholder="e.g. ●●●●●●●●●●●" />
            </div>
            <div className={style.input}>
                <span>Repeat password</span>
                <input type="text" placeholder="e.g. ●●●●●●●●●●●" />
            </div>
            <div>
                <button>Register</button>
            </div>
        </div>
    )
};

export default Register;