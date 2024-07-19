import mysql from 'mysql2/promise';

const config = {
    host: 'localhost',
    user: 'root',
    port:'3306',
    password:'',
    database:'laravel'
}

const connection = await mysql.createConnection(config);

export class StudentModel{

 static async getAll({ page = 1, limit = 10 }) {
        const offset = (page - 1) * limit;
        console.log('Page:', page, 'Limit:', limit, 'Offset:', offset); // Log de los valores

        // Obtener los alumnos con paginación
        const [students] = await connection.query(
            `SELECT id, alumn_DNI, nombre, apellido, fecha_nac, año 
            FROM students 
            LIMIT ? OFFSET ?`, [limit, offset]
        );

        // Contar el total de alumnos
        const [[{ total }]] = await connection.query(
            `SELECT COUNT(*) as total FROM students`
        );

        return {
            students,
            totalPages: Math.ceil(total / limit)
        };
    }

    static async getByID({id}){
        const [student] = await connection.query(
            `SELECT  id, alumn_DNI, nombre, apellido, fecha_nac 
            FROM students WHERE id = ?`, [id]
            )
        if(student.length === 0) return null
        return student[0]
    }

    static async create({ input }) {
        const {
            alumn_DNI,
            nombre,
            apellido,
            fecha_nac,
            año
        } = input;
        try {
            const result = await connection.query(
                `INSERT INTO students (alumn_DNI, nombre, apellido, fecha_nac, año)
                VALUES (?, ?, ?, ?, ?)`,
                [alumn_DNI, nombre, apellido, fecha_nac, año]
            );
            return result;
        } catch (err) {
            console.error('Error al insertar el estudiante:', err);
            throw err;
        }
    }

    
}