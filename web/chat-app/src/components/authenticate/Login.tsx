import React, { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import style from './Authenticate.module.css';
import Images from '../../utils/images';
import LoaderType from '../../models/LoaderType';
import LoginState from '../../models/states/LoginState';

class Login extends React.Component<{loader: LoaderType}, LoginState> {
    private loader: LoaderType;

    constructor(props: any){
        super(props);
        this.loader = props.loader;
        
        this.state = {
            username: '',
            password: ''
        };

        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPaswordChange = this.onPaswordChange.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }

    private onUsernameChange(event: ChangeEvent<HTMLInputElement>): void{
        this.setState({
            username: event.target.value,
            password: this.state.password
        });
    }

    private onPaswordChange(event: ChangeEvent<HTMLInputElement>): void{
        this.setState({
            username: this.state.username,
            password: event.target.value
        });
    }

    private onLogin = (): void => {
        console.log(this.state.username)
        console.log(this.state.password)
    };

    render(){
        return (
            <div className={style.container}>
                <img className={style.logo} src={Images.getLogoPrimary1()} />
                <h1>Sign in</h1>
                <p>
                    You don't already have an account?
                </p>
                <Link to="/authenticate/signup" className="link">Sign up here</Link>
                <div className={style.input}>
                    <span>Username</span>
                    <input value={this.state.username} type="text" placeholder="e.g. john_doe" onChange={this.onUsernameChange} />
                </div>
                <div className={style.input}>
                    <span>Password</span>
                    <input value={this.state.password} type="text" placeholder="e.g. ●●●●●●●●●●●" onChange={this.onPaswordChange} />
                </div>
                <div>
                    <button onClick={this.onLogin}>Login</button>
                </div>
            </div>
        );
    }
};

export default Login;