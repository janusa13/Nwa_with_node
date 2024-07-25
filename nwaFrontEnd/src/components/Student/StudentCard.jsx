import React from "react";


const StudentCard = ({ alumno }) => {
    return (
        <div className="p-4 border rounded-lg shadow-md bg-grey">
            <p className="text-lg font-semibold">DNI: {alumno.alumn_DNI}</p>
            <p>Nombre: {alumno.nombre}</p>
            <p>Apellido: {alumno.apellido}</p>
            <p>Asistencias: {alumno.asistencias}</p>
            <p>Fecha de Nacimiento: {alumno.fecha_nac}</p>
            <p>Año: {alumno.año}</p>
        </div>
    );
};

export default StudentCard