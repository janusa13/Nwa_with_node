import React from "react";
import "./StudentCard.css";

const StudentCard = ({ alumno }) => {
    return (
        <div className="student-card">
            <p>DNI: {alumno.alumn_DNI}</p>
            <p>Nombre: {alumno.nombre}</p>
            <p>Apellido: {alumno.apellido}</p>
            <p>Asistencias: {alumno.asistencias}</p>
            <p>Fecha de Nacimiento: {alumno.fecha_nac}</p>
            <p>Año: {alumno.año}</p>
        </div>
    );
};

export default StudentCard