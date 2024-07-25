import express from 'express';
import { corsMiddleware } from './Middlewares/cors.js';
import {createStudentRouter} from './Routes/student.js';

export const createApp = ({studentModel}) => {
    const app = express()

    app.disable('x-powered-by')
    app.use(corsMiddleware());
    app.use(express.json());

    app.use('/students', createStudentRouter({studentModel}));

    const PORT = process.env.PORT ?? 3000

    app.listen(PORT, ()=>{
        console.log(`Server listening on port http://localhost:${PORT}`)
    })
}