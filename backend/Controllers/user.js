import bcrypto from 'bcrypt';
import jwt from 'jsonwebtoken';
import { validateUser } from '../Schemas/user.js';

export class UserController {
    constructor({ userModel }) {
        this.userModel = userModel;
    }

    register = async (req, res) => {
        const result = validateUser(req.body);
        if (!result.success) {
            return res.status(400).json({ error: result.error.errors });
        }

        const { name, email, password } = result.data;

        try {
            const existingUser = await this.userModel.getUserByEmail(email);
            if (existingUser) {
                return res.status(400).json({ error: 'El usuario ya existe' });
            }
            const hashedPassword = await bcrypto.hash(password, 10);

            await this.userModel.createUser(name, email, hashedPassword);
            res.status(201).json({ message: 'Usuario creado' });
        } catch (error) {
            console.error('Error al crear usuario: ', error);
            res.status(500).json({ error: 'Error al crear usuario' });
        }
    };

    login = async (req, res) => {
        const { email, password } = req.body;

        try {
            const user = await this.userModel.getUserByEmail(email);
            if (!user) {
                return res.status(401).json({ error: 'Email no válido' });
            }

            const passwordValid = await bcrypto.compare(password, user.password);
            if (!passwordValid) {
                return res.status(401).json({ error: 'Contraseña no válida' });
            }

            const token = jwt.sign({ userId: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '2h' });
            res.json({ token });
        } catch (error) {
            console.error('Error en el login: ', error);
            res.status(500).json({ error: 'Error en el login' });
        }
    };
}
