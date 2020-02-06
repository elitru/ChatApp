import hash from 'password-hash';

export default class Passwords{
    public static encrypt(password: string): string{
        return hash.generate(password);
    }

    public static verify(password: string, passwordCorrect: string): boolean{
        return hash.verify(password, passwordCorrect);
    }
}