import React, { useState } from "react";


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
                            text: "Agenda",
                            items: ["Gestion de citas", "Polizas"]
                        },
                        {
                            icon: "money-bill-wave",
                            text: "Contabilidad",
                            items: ["Tratamientos", "Gastos", "Facturas"]
                        },
                        {
                            icon: "chart-bar",
                            text: "Informes",
                            items: ["Presupuestos", "Informe médico"]
                        },
                        {
                            icon: "file-alt",
                            text: "Documentación",
                            items: ["Firmas pendientes", "Documentos"]
                        }
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
                                        <a href="#" className="block p-2 hover:bg-gray-700 flex items-center">
                                            <i className="fas fa-chevron-right mr-2 text-xs"></i>
                                            {item}
                                        </a>
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