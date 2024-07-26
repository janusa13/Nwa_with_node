import { createApp } from "./app.js";
import { StudentModel } from "./Models/student.js";
import { UsertModel } from "./Models/user.js";

createApp({ 
    studentModel: StudentModel,
    userModel:UsertModel
});