import mysql from 'mysql2/promise';

const config = {
    host: 'localhost',
    user: 'root',
    port:'3306',
    password:'',
    database:'laravel'
}

const connection = await mysql.createConnection(config);

export class UsertModel {

    static async getUserByEmail(email){
        const [rows] = await connection.execute(`SELECT * FROM users WHERE email = ?`, [email]);
        return rows[0];
    };

    static async createUser(name, email, password){
        const [result] = await connection.execute(
            `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`,
            [name, email, password]
        );
        return result;
    }
}