import React, { useState } from "react";
import Input from "./inputs";
import Select from "./select";

const Formulario = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        alumn_DNI: '',
        asistencias: '',
        fecha_nac: '',
        año: 'primero'
    });

    const handleChange = (event) => {
        const { name, value, type } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'number' ? Number(value) : value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formattedData = {
            ...formData,
            fecha_nac: new Date(formData.fecha_nac).toISOString().split('T')[0]
        };
        console.log(formattedData);
        try {
            const response = await fetch('http://localhost:3000/students', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formattedData)
            });

            if (!response.ok) {
                throw new Error('algo no fue bien');
            }
            const data = await response.json();
            console.log('Bien: ', data);
        } catch (error) {
            console.error('Error: ', error);
        }
    };

    return (
        <div className="min-h-screen  p-0 sm:p-12">
            <div className="mx-auto max-w-md px-6 py-12  border-0 shadow-lg sm:rounded-3xl">
                <h1 className="text-2xl font-bold mb-8">Ingresar Alumno</h1>
                <form onSubmit={handleSubmit}>
                    {[
                        {
                            htmlFor: "nombre",
                            type: "text",
                            name: "nombre",
                            placeholder: "Escribe tu nombre"
                        },
                        {
                            htmlFor: "apellido",
                            type: "text",
                            name: "apellido",
                            placeholder: "Apellido del Alumno"
                        },
                        {
                            htmlFor: "alumn_DNI",
                            type: "text",
                            name: "alumn_DNI",
                            placeholder: "Escribe el DNI"
                        },
                        {
                            htmlFor: "asistencias",
                            type: "number",
                            name: "asistencias",
                            placeholder: "Ingresar la cantidad de asistencias"
                        },
                        {
                            htmlFor: "fecha_nac",
                            type: "date",
                            name: "fecha_nac",
                            placeholder: "Ingresar fecha de nacimiento",
                        }
                    ].map((option, index) => (
                        <div key={index}>
                            < Input
                                htmlFor={option.htmlFor}
                                type={option.type}
                                name={option.name}
                                placeholder={option.placeholder}
                                value={formData[option.name]}
                                onChange={handleChange}
                            />
                        </div>
                    ))}
                    <Select
                        htmlFor="año"
                        name="año"
                        options={['primero', 'segundo', 'tercero']}
                        value={formData.año}
                        onChange={handleChange}
                    />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
};

export default Formulario;
