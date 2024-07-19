import React, { useEffect, useState } from "react";
import StudentCard from "./StudentCard";

const StudentList = () => {
    const [alumnos, setAlumnos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 10;

    const fetchAlumnos = async () => {
        try {
            const response = await fetch(`http://localhost:3000/students?page=${currentPage}&limit=${itemsPerPage}`);
            const data = await response.json();
            if (response.ok) {
                setAlumnos(data.alumnos);
                setTotalPages(data.totalPages);
            } else {
                console.error('Error en la respuesta:', data.error);
            }
        } catch (error) {
            console.error('Error en el fetch de Students:', error);
        }
    };

    useEffect(() => {
        fetchAlumnos();
    }, [currentPage]);

    return (
        <div>
            <h1>Listado de Alumnos</h1>
            <div className="alumnos-list">
                {alumnos.map(alumno => (
                    <StudentCard key={alumno.id} alumno={alumno} />
                ))}
            </div>
            <div>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button key={index} onClick={() => setCurrentPage(index + 1)}>
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default StudentList;