import Images from "../../utils/images";

export default class ContactItemState{
    public profileImg: any = null;
    public username: string = '';
    public onlineStatus: string = '';
    public newMessageCount: number = 0;
    public isFocused: boolean = false;

    constructor(profileImg: any, username: string, onlineStatus: string, newMessageCount: number, isFocused: boolean){
        this.profileImg = profileImg;
        this.username = username;
        this.onlineStatus = onlineStatus;
        this.newMessageCount = newMessageCount;
        this.isFocused = isFocused;
    }
}