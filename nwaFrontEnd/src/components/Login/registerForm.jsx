import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/users/register', { name, email, password });
            console.log('Usuario registrado:', response.data);
            // Maneja la respuesta del registro (por ejemplo, redirigir al usuario o mostrar un mensaje)
        } catch (err) {
            console.error('Error al registrar usuario:', err);
            if (err.response && err.response.data) {
                setError(err.response.data.error || 'Error desconocido');
            } else {
                setError('Error desconocido');
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nombre"
                required
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                required
            />
            <button type="submit">Registrar</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
};

export default RegisterForm;
