// PdfsEndpoint.js

const BASE_URL = "http://localhost:5000"; // Cambia esto según la URL de tu servidor Flask

/**
 * Solicita el PDF generado por el servidor enviando el año y mes como parámetro.
 * @param {number} aniomes - Año y mes en formato YYYYMM.
 * @param {string} filename - El nombre del archivo con el que se descargará el PDF.
 */
export const downloadPlanillaPDF = async (aniomes, filename) => {
  try {
    const response = await fetch(`${BASE_URL}/planilla_without_obs?aniomes=${aniomes}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error("Error al obtener el PDF del servidor");
    }

    const blob = await response.blob(); // Convierte la respuesta a un Blob
    const url = window.URL.createObjectURL(blob); // Crea una URL para el Blob
    const a = document.createElement("a");
    a.href = url;
    a.download = filename; // Nombre del archivo con el que se descargará
    document.body.appendChild(a);
    a.click();
    a.remove();
  } catch (error) {
    console.error("Error al descargar el PDF:", error);
  }
};
