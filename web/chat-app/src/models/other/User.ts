export default class User{
    public username: string = '';
    public password: string = '';
    public status: string = '';

    constructor(username: string, password: string, status: string){
        this.username = username;
        this.password = password;
        this.status = status;
    }
}