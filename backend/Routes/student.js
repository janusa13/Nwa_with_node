import { Router } from "express";
import { StudentController } from "../Controllers/student.js";
import { authenticateToken } from "../Middlewares/auth.js";

export const createStudentRouter = ({ studentModel }) => {
    const studentRouter = Router();
    const studentController = new StudentController({ studentModel });

    studentRouter.use(authenticateToken);

    studentRouter.get('/', studentController.getAll);
    studentRouter.get('/:id', studentController.getById);
    studentRouter.post('/', studentController.create);
    studentRouter.delete('/:id', studentController.delete);
    return studentRouter;
};