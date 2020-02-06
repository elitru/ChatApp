export default class ResponseMessages{
    public static readonly INTERNAL_SERVER_ERROR: string = 'An internal server error occured! Please contact an admin.';
    public static readonly UNAUTHORIZED: string = 'To access this endpoint, you need to be authenticated!'
    public static readonly BAD_REQUEST: string = 'Bad request! You are either missing some paramaters or you paramaters have incompatible values';

    public static readonly LOGIN_FAILED: string = 'Username or password was incorrect!';
    public static readonly PASSWORD_REQUIREMENTS_NOT_FULFILLED: string = 'Your password must be at least 5 characters long';
    public static readonly USERNAME_ALREADY_TAKEN: string = 'This username is already taken! Try another one.';
}