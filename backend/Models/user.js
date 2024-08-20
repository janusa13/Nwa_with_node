import mysql from 'mysql2/promise';

const config = {
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: '',
    database: 'laravel'
};

// Crear la conexión a la base de datos
const getConnection = async () => {
    const connection = await mysql.createConnection(config);
    return connection;
};

export class UserModel {
    static async getUserByEmail(email) {
        const connection = await getConnection();
        const [rows] = await connection.execute('SELECT * FROM users WHERE email = ?', [email]);
        connection.end(); // Cierra la conexión después de la consulta
        return rows[0];
    }

    static async createUser(name, email, password) {
        const connection = await getConnection();
        const [result] = await connection.execute(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [name, email, password]
        );
        connection.end(); // Cierra la conexión después de la inserción
        return result;
    }
}