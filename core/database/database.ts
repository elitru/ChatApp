import mysql, { Connection, MysqlError } from 'mysql';

export default class Database{
    private static connection: Connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'Chat',
        port: 3306,
        password: ''
    });

    /* 
        @type
            void
        @params
            result: any, error: MysqlError
    */
    public static query(query: string, params: any[], callback: Function): void{
        this.connection.query(query, params, (err: MysqlError | null, result: any, fields: any) => {
            if(err){
                callback(null, err);
                return;
            }

            callback(result, null);
        });
    }
}