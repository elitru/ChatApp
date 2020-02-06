export default class LoginRequest{
    public readonly username: string = '';
    public readonly password: string = '';

    constructor(username: string, password: string){
        this.username = username;
        this.password = password;
    }
}