import React, { useState, useEffect } from 'react';

const SeccionAgricultura = () => {
    // Estado para almacenar los datos
    const [data, setData] = useState(null);

    // useEffect para cargar los datos cuando el componente se monte
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Suponiendo que los datos están en un archivo JSON local o una API
                const response = await fetch('/info_page_1.json'); // O tu URL de API
                const result = await response.json();
                setData(result); // Guardamos los datos en el estado
            } catch (error) {
                console.error('Error al cargar los datos:', error);
            }
        };

        fetchData();
    }, []); 

    if (!data) {
        return <div>Cargando...</div>;
    }
    
    return (
        <div className="px-4 py-8 max-w-5xl mx-auto space-y-8">
            {Object.entries(data.Secciones).map(([seccionNombre, seccion]) => (
                <div key={seccionNombre} className="seccion pb-6">
                    <h2 className="text-2xl font-bold text-red-700 mb-2">{seccionNombre}</h2>
                    <p className="text-gray-700 mb-4">{seccion.desc}</p>

                    {Object.entries(seccion.Divisiones).map(([divisionNombre, division]) => (
                        <div key={divisionNombre} className="division pl-4   border-blue-100 mb-4">
                            <h3 className="text-xl font-semibold text-red-600 mb-1">{divisionNombre}</h3>
                            <p className="text-gray-600 mb-3">{division.desc}</p>

                            {Object.entries(division.Grupos).map(([grupoNombre, grupo]) => (
                                <div key={grupoNombre} className="grupo pl-6   border-blue-200 mb-3">
                                    <h4 className="text-lg font-medium text-red-500 mb-1">{grupoNombre}</h4>
                                    <p className="text-gray-500 mb-2">{grupo.desc}</p>

                                    <ul className="clases list-disc list-inside ml-6 space-y-1 text-gray-500">
                                        {Object.entries(grupo.Clases).map(([codigoClase, claseDescripcion]) => (
                                            <li key={codigoClase} className="text-gray-700">
                                                <span className="font-semibold text-red-400">{codigoClase}</span> - {claseDescripcion}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default SeccionAgricultura;

