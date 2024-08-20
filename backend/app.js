import express from 'express';
import { corsMiddleware } from './Middlewares/cors.js';
import {createStudentRouter} from './Routes/student.js';
import { createUserRouter } from './Routes/user.js';


export const createApp = ({studentModel, userModel}) => {
    const app = express()

    app.disable('x-powered-by')
    app.use(corsMiddleware());
    app.use(express.json());

    app.use('/students', createStudentRouter({studentModel}));

    app.use('/users', createUserRouter({userModel}));

    const PORT = process.env.PORT ?? 3000

    app.listen(PORT, ()=>{
        console.log(`Server listening on port http://localhost:${PORT}`)
    })

    return app;
}