import User from "../other/User";

export default class RegisterResponse{
    public user: User;
    public token: string;

    constructor(user: User, token: string){
        this.user = user;
        this.token = token;
    }

    public static create(user: User, token: string): string{
        return JSON.stringify(
            new RegisterResponse(user, token)  
        );
    }
}