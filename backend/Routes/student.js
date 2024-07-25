import { Router } from "express";
import { StudentController } from "../Controllers/student.js";

export const createStudentRouter = ({ studentModel }) => {
    const studentRouter = Router();
    const studentController = new StudentController({ studentModel });

    studentRouter.get('/', studentController.getAll);
    studentRouter.get('/:id', studentController.getById);
    studentRouter.post('/', studentController.create);

    return studentRouter;
};