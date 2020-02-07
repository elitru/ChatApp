import React, { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import style from './Authenticate.module.css';
import Images from '../../utils/images';
import LoaderType from '../../models/LoaderType';
import LoginState from '../../models/states/LoginState';
import API, { URLS } from '../../api/api';
import StorageKeys from '../../utils/storage-keys';
import LoginRequest from '../../models/requests/LoginRequest';
import LoginResponse from '../../models/responses/LoginResponse';
import ErrorResponse from '../../models/responses/ErrorResponse';

class Login extends React.Component<{loader: LoaderType}, LoginState> {
    private loader: LoaderType;

    constructor(props: any){
        super(props);
        this.loader = props.loader;
        
        this.state = {
            username: '',
            password: '',
            error: ''
        };

        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPaswordChange = this.onPaswordChange.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }

    private onUsernameChange(event: ChangeEvent<HTMLInputElement>): void{
        this.setState({
            username: event.target.value,
            password: this.state.password,
            error: this.state.error
        });
    }

    private onPaswordChange(event: ChangeEvent<HTMLInputElement>): void{
        this.setState({
            username: this.state.username,
            password: event.target.value,
            error: this.state.error
        });
    }

    private onLogin = (): void => {
        if(this.state.username === '' && this.state.password === ''){
            return;
        }

        const request: LoginRequest = new LoginRequest(this.state.username, this.state.password);

        this.loader.showLoader();
        API.post(URLS.LOGIN, request,
        (result: LoginResponse) => {
            this.loader.hideLoader();
            localStorage.setItem(StorageKeys.TOKEN, result.token);
            localStorage.setItem(StorageKeys.USER, JSON.stringify(result.user));
            const props: any = this.props;
            props.history.push('/chat/messages');
        },
        (err: ErrorResponse) => {
            const state: any = this.state;
            state.error = err.errorMesage;
            this.setState(state);
            this.loader.hideLoader();
        });
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
                    <input value={this.state.password} type="password" placeholder="e.g. ●●●●●●●●●●●" onChange={this.onPaswordChange} />
                </div>
                <div>
                    <p className={style.error}>
                        {this.state.error}
                    </p>
                </div>
                <div>
                    <button onClick={this.onLogin}>Login</button>
                </div>
            </div>
        );
    }
};

export default Login;