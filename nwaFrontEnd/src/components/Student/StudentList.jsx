import React, { useEffect, useState } from "react";
import StudentCard from "./StudentCard";
import axios from "axios";

const StudentList = () => {
    const [alumnos, setAlumnos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 10;

    const fetchAlumnos = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:3000/students?page=${currentPage}&limit=${itemsPerPage}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const data = response.data;

            setAlumnos(data.alumnos);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error('Error en el fetch de Students:', error);
        }
    };

    useEffect(() => {
        fetchAlumnos();
    }, [currentPage]);

    const handleDelete = (id) => {
        setAlumnos((prevAlumnos) => prevAlumnos.filter((alumno) => alumno.id !== id));
    };

    return (
        <div>
            <h1>Listado de Alumnos</h1>
            <div className="alumnos-list">
                {alumnos.map(alumno => (
                    <StudentCard key={alumno.id} alumno={alumno} onDelete={handleDelete} />
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
