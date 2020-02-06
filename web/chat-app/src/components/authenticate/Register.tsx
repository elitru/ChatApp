import React, { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import style from './Authenticate.module.css';
import Images from '../../utils/images';
import LoaderType from '../../models/LoaderType';
import RegisterState from '../../models/states/RegisterState';
import { throws } from 'assert';
import API, { URLS } from '../../api/api';
import RegisterRequest from '../../models/requests/RegisterRequest';
import RegisterResponse from '../../models/responses/RegisterResponse';
import ErrorResponse from '../../models/responses/ErrorResponse';
import StorageKeys from '../../utils/storage-keys';

class Register extends React.Component<{loader: LoaderType}, RegisterState> {
    private loader: LoaderType;

    constructor(props: any){
        super(props);
        this.loader = props.loader;
        
        this.state = {
            username: '',
            password: '',
            repeatPassword: '',
            error: ''
        };

        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onRepeatPasswordChange = this.onRepeatPasswordChange.bind(this);
        this.onRegister = this.onRegister.bind(this);
    }

    private onUsernameChange(event: ChangeEvent<HTMLInputElement>): void{
        const state: RegisterState = this.state;
        state.username = event.target.value;
        this.setState(state);
    }

    private onPasswordChange(event: ChangeEvent<HTMLInputElement>): void{
        const state: RegisterState = this.state;
        state.password = event.target.value;
        this.setState(state);
    }

    private onRepeatPasswordChange(event: ChangeEvent<HTMLInputElement>): void{
        const state: RegisterState = this.state;
        state.repeatPassword = event.target.value;
        this.setState(state);
    }

    private onRegister(): void{
        if(this.state.username == '' || this.state.password == '' || this.state.repeatPassword == ''){
            const state: RegisterState = this.state;
            state.error = 'You need to fill in all fields';
            this.setState(state);
            return;
        }

        if(this.state.password !== this.state.repeatPassword){
            const state: RegisterState = this.state;
            state.error = 'Your passwords do not match';
            this.setState(state);
            return;
        }

        if(this.state.password.length < 5){
            const state: RegisterState = this.state;
            state.error = 'Your password is too short! It needs to be at least 5 characters long.';
            this.setState(state);
            return;
        }

        this.loader.showLoader();

        const request: RegisterRequest = new RegisterRequest(this.state.username, this.state.password, this.state.repeatPassword);

        API.post(URLS.REGISTER, request,
        (result: RegisterResponse) => {
            this.loader.hideLoader();
            localStorage.setItem(StorageKeys.TOKEN, result.token);
            localStorage.setItem(StorageKeys.USER, JSON.stringify(result.user));
            //TODO: forward to chat
            // const props: any = this.props;
            // props.history.push('/');
        },
        (err: ErrorResponse) => {
            const state: any = this.state;
            state.error = err.errorMesage;
            this.setState(state);
            this.loader.hideLoader();
        });
    }

    render(){
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
                    <input value={this.state.username} type="text" placeholder="e.g. john_doe" onChange={this.onUsernameChange} />
                </div>
                <div className={style.input}>
                    <span>Password</span>
                    <input value={this.state.password} type="password" placeholder="e.g. ●●●●●●●●●●●" onChange={this.onPasswordChange} />
                </div>
                <div className={style.input}>
                    <span>Repeat password</span>
                    <input value={this.state.repeatPassword} type="password" placeholder="e.g. ●●●●●●●●●●●" onChange={this.onRepeatPasswordChange} />
                </div>
                <div>
                    <p className={style.error}>
                        {this.state.error}
                    </p>
                </div>
                <div>
                    <button onClick={this.onRegister}>Register</button>
                </div>
            </div>
        )
    }
};

export default Register;