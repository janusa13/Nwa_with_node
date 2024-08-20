import { createApp } from "./app.js";
import { StudentModel } from "./Models/student.js";
import { UserModel } from "./Models/user.js";
import dotenv from 'dotenv';

dotenv.config();

createApp({ 
    studentModel: StudentModel,
    userModel:UserModel
});