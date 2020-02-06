export default class RegisterRequest{
    public readonly username: string = '';
    public readonly password: string = '';
    public readonly repeatPassword: string = '';

    constructor(username: string, password: string, repeatPassword: string){
        this.username = username;
        this.password = password;
        this.repeatPassword = repeatPassword;
    }
}