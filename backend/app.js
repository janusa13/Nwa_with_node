import express from 'express';
import { corsMiddleware } from './Middlewares/cors.js';
import { studentRouter } from './Routes/student.js';

const app = express()

app.disable('x-powered-by')
app.use(corsMiddleware());
app.use(express.json());

app.use('/students', studentRouter);

const PORT = process.env.PORT ?? 3000

app.listen(PORT, ()=>{
    console.log(`Server listening on port http://localhost:${PORT}`)
})