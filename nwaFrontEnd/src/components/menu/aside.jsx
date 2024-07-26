import React, { useState } from "react";
import { Link } from "react-router-dom";


const Aside = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleDropdownToggle = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    return (
        <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
            <nav>
                <ul className="space-y-2">
                    {[
                        {
                            icon: "calendar-alt",
                            text: "Registro",
                            items: [{ name: "Registrar Alumno", path: "/registerStudent" }]
                        },
                        {
                            icon: "money-bill-wave",
                            text: "Clases",
                            items: [{ name: "Ver clases", path: "#" },
                            { name: "Registrar Clases", path: "#" }]
                        },
                        {
                            icon: "chart-bar",
                            text: "Informes",
                            items: [{ name: "Informes de Alumnos", path: "#" },
                            { name: "Informes docentes", path: "#" }]
                        },

                    ].map((option, index) => (
                        <li key={index} className="opcion-con-desplegable">
                            <div
                                className="flex items-center justify-between p-2 hover:bg-gray-700 cursor-pointer"
                                onClick={() => handleDropdownToggle(index)}
                            >
                                <div className="flex items-center">
                                    <i className={`fas fa-${option.icon} mr-2`}></i>
                                    <span>{option.text}</span>
                                </div>
                                <i className="fas fa-chevron-down text-xs"></i>
                            </div>
                            <ul className={`desplegable ml-4 ${openDropdown === index ? "" : "hidden"}`}>
                                {option.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                        <Link to={item.path} className="block p-2 hover:bg-gray-700 flex items-center" >
                                            <i className="fas fa-chevron-down text-xs">Agregar Alumno</i>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
};

export default Aside;