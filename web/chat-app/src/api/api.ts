import StorageKeys from "../utils/storage-keys";
import ErrorResponse from "../models/responses/ErrorResponse";
import LoginResponse from "../models/responses/LoginResponse";

export default class API{
    public static post(url: string, body: object, then: Function, error: Function): void{
        console.log(url)
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: API.getHeaders()
        })
        .then((res: Response) => {
            if(res.status !== 200){
                res.json().then((err: ErrorResponse) => {
                    error(err);
                    return;
                });
                return;
            }

            res.json().then((result: LoginResponse) => {
                then(result);
            });
        })
        .catch((err: any) => {
            error(err);
        })
    }

    private static getHeaders(): any{
        const headers: any =  {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        };

        const token: any = localStorage.getItem(StorageKeys.TOKEN);

        if(token != null){
            headers['auth'] = token;
        }

        return headers;
    }
}

export class URLS{
    private static PORT: number = 12345;
    private static readonly BASE: string = 'http://localhost:' + URLS.PORT + '/';

    public static readonly LOGIN: string = URLS.BASE + 'user/login';
    public static readonly REGISTER: string = URLS.BASE + 'user/register';
}