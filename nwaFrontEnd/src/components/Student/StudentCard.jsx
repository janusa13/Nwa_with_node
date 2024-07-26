import React from "react";


const StudentCard = ({ alumno, onDelete }) => {
    const handleDelete = async () => {
        if (window.confirm("¿Estás seguro de que deseas eliminar este estudiante ?")) {
            try {
                const response = await fetch(`http://localhost:3000/students/${alumno.id}`, {
                    method: 'DELETE',
                });
                if (!response.ok) {
                    throw new Error('Error al eliminar estudiante');
                }
                const data = await response.json();
                console.log('Estudiante eliminado: ', data);
                onDelete(alumno.id);
            } catch (error) {
                console.error('Error al eliminar: ', error)
            }
        }
    };
    return (
        <div className="p-4 border rounded-lg shadow-md bg-grey">
            <p className="text-lg font-semibold">DNI: {alumno.alumn_DNI}</p>
            <p>Nombre: {alumno.nombre}</p>
            <p>Apellido: {alumno.apellido}</p>
            <p>Asistencias: {alumno.asistencias}</p>
            <p>Fecha de Nacimiento: {alumno.fecha_nac}</p>
            <p>Año: {alumno.año}</p>
            <button className="mt-2 p-2 bg-red-500 text-white rounded" onClick={handleDelete} >
                Eliminar
            </button>
        </div>
    );
};

export default StudentCard