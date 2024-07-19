import { Router } from "express";
import { StudentController } from "../Controllers/student.js";

export const studentRouter = Router()

studentRouter.get('/', StudentController.getAll);
studentRouter.get('/:id',StudentController.getById);
studentRouter.post('/',StudentController.create);