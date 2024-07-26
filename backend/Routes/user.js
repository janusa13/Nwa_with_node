import {Router} from 'express';
import { UserController } from '../Controllers/user.js';

export const createUserRouter = ({userModel}) =>{
    const userRouter = Router();
    const userController = new UserController({userModel});

    userRouter.post('/register', userController.register);
    userRouter.post('/login', userController.login);

    return userRouter
}
