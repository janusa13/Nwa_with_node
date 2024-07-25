import { validateStudent } from "../Schemas/student.js";

export class StudentController{

        constructor({ studentModel }) {
            this.studentModel = studentModel
        }

    getAll = async (req, res) => {
        try {
            const page = parseInt(req.query.page, 10) || 1;
            const limit = parseInt(req.query.limit, 10) || 10;

            const { students, totalPages } = await this.studentModel.getAll({ page, limit });
            res.json({ alumnos: students, totalPages });
        } catch (err) {
            console.error('Error fetching students:', err);
            res.status(500).json({ error: err.message });
        }
    }

    getById = async (req, res) => {
        const { id } = req.params
        const student = await this.studentModel.getByID({id})
        if (student) return res.json(student)
        res.status(404).json({message: 'Student not found'})
    }

    create = async (req, res) => {
    const result = validateStudent(req.body);
    
    if (!result.success) {
        return res.status(400).json({ error: result.error.errors });
    }

    const data = result.data;
    data.fecha_nac = new Date(data.fecha_nac);

    try {
        const newStudent = await this.studentModel.create({ input: result.data });
        res.status(201).json(newStudent);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
}