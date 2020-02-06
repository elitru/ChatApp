export default class ErrorResponse{
    public errorCode: number;
    public errorMesage: string;

    constructor(errorCode: number, errorMessage: string){
        this.errorCode = errorCode;
        this.errorMesage = errorMessage;
    }

    public static create(errorCode: number, errorMesage: string): string{
        return JSON.stringify(
          new ErrorResponse(errorCode, errorMesage)
        );
    }
}