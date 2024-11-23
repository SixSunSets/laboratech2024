import Image from "next/image";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { downloadPlanillaPDF } from "./api/PdfsEndpoint";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const geistHussar = localFont({
  src: "./fonts/HussarBoldWeb-bf92.woff",
  variable: "--font-geist-hussar",
  weight: "100 900",
});

export default function RegulaPROPlanilla() {
  const router = useRouter();
  const [showDates, setShowDates] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  //const [showSections, setShowSections] = useState(false);
  const [data, setData] = useState({ observaciones: [], alertas: [] });
  const [loadingPdf, setLoadingPdf] = useState(false);
  const [showSectionsAfterGenerate, setShowSectionsAfterGenerate] =
    useState(false);
  const [showPdf, setShowPdf] = useState(false);

  const toggleDates = () => setShowDates(true);
  const togglePdf = () => setShowPdf(!showPdf);

  const handleDateClick = (date) => {
    setSelectedDate(date);
    //setShowSections(true);
  };

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const getMonthName = (date) => {
    const [year, month] = date.split("-");
    return `${months[parseInt(month, 10) - 1]} de ${year}`;
  };

  const fetchPdfData = async (date) => {
    setLoadingPdf(true);
    try {
      const aniomes = date.replace("-", "");
      await downloadPlanillaPDF(aniomes, `Planilla_Electronica_${date}.pdf`);
      setLoadingPdf(false);
    } catch (error) {
      console.error("Error al cargar el archivo PDF:", error);
      setLoadingPdf(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/response.json");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error al cargar el archivo JSON:", error);
      }
    };
    fetchData();
  }, []);

  const generateDateRange = (start, end) => {
    const dates = [];
    let current = start;

    while (current <= end) {
      const year = Math.floor(current / 100);
      const month = current % 100;

      // Asegurar formato YYYY-MM
      dates.push(`${year}-${month.toString().padStart(2, "0")}`);

      // Incrementar el mes
      if (month === 12) {
        current = (year + 1) * 100 + 1;
      } else {
        current += 1;
      }
    }

    return dates;
  };

  const dateRange = generateDateRange(202401, 202406);

  const handleGenerateDocument = async () => {
    if (!selectedDate) {
      alert("Por favor selecciona una fecha antes de generar el documento.");
      return;
    }

    setLoadingPdf(true);

    try {
      const aniomes = selectedDate.replace("-", "");
      const filename = `Planilla_Electronica_${selectedDate}.pdf`;

      await fetchPdfData(aniomes, filename);

      setLoadingPdf(false);

      setShowSectionsAfterGenerate(true);
    } catch (error) {
      console.error("Error al generar el PDF:", error);
      setLoadingPdf(false);
    }
  };

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} ${geistHussar.variable} grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]`}
    >
      <Header />
      <main className="row-start-2 w-full flex flex-col gap-8 items-center bg-transparent justify-center p-4">
        <div className="w-11/12 md:w-10/12 gap-4 flex-col items-center justify-center">
          <p className="text-3xl">
            Generación del documento acerca del cumplimiento de la normativa
            laboral
          </p>
          <ul className="mt-4 list-disc pl-5">
            <li className="mt-4">
              Para generar un reporte de formalidad laboral, busque la fecha de
              registro en la planilla para su empresa.
            </li>
            <li className="mt-4">
              En poco tiempo, usted obtendrá un análisis de la formalidad de su
              empresa y un documento PDF con Alertas y/o Comentarios generados
              por IA.
            </li>
          </ul>
          <div className="flex flex-col gap-2 p-2 items-start mt-4">
            <div className="w-full mt-4">
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Selecciona una fecha
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pBlue focus:border-pBlue text-lg"
                value={selectedDate}
                onChange={(e) => handleDateClick(e.target.value)}
              >
                <option value="" disabled className="text-gray-500">
                  -- Elige una fecha --
                </option>
                {dateRange.map((date, index) => (
                  <option key={index} value={date}>
                    {getMonthName(date)}
                  </option>
                ))}
              </select>
            </div>

            {selectedDate && !loadingPdf && (
              <div className="w-full flex flex-col  gap-4 mt-4">
                {" "}
                {/* Contenedor principal con flex-direction: column para apilar los elementos */}
                {/* Contenedor para el texto */}
                {/*<p className="text-3xl ">
                  Análisis de cumplimiento de la normativa laboral:{" "}
                  <span className="font-bold">
                    {getMonthName(selectedDate)}
                  </span>
                </p>*/}
                {/* Contenedor para el botón */}
                <div className="w-full flex justify-center items-center mt-2">
                  <button
                    className="rounded-md p-4 bg-pRed text-white flex flex-row gap-2 items-center justify-center text-lg hover:bg-pRedHover w-full"
                    onClick={handleGenerateDocument}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-file-type-pdf"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                      <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
                      <path d="M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" />
                      <path d="M17 18h2" />
                      <path d="M20 15h-3v6" />
                      <path d="M11 15v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z" />
                    </svg>
                    Generar documento PDF
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Dashboard Section */}
        {showSectionsAfterGenerate && !loadingPdf && (
          <div className="w-11/12 md:w-10/12 gap-4 flex-col items-center justify-center">
            <p className="text-3xl">
              Análisis de cumplimiento de la normativa laboral:{" "}
              <span className="font-bold">{getMonthName(selectedDate)}</span>
            </p>
            <ul className="mt-4 list-disc pl-5">
              <li className="mt-4">
                Analizamos la formalidad laboral de su empresa, con esto podrás
                conocer los riesgos asociados a la informalidad y las
                oportunidades para mejorar.
              </li>
            </ul>
          </div>
        )}

        {/* Observaciones y Alertas Section */}
        {showSectionsAfterGenerate && !loadingPdf && (
          <>
            {/* Contenedor para Alertas */}
            <div className="w-11/12 md:w-10/12 gap-4 flex-col items-center justify-center border-2 border-pRed p-4 rounded-l-xl rounded-t-xl">
              <div className="flex flex-row items-center justify-start gap-4">
                <div className="bg-pRed text-white rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-alert-circle"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
                    <path d="M12 8v4" />
                    <path d="M12 16h.01" />
                  </svg>
                </div>
                <p className="text-3xl text-pRed ">Alertas</p>
              </div>
              <ul className="list-disc pl-5 mt-4">
                {data.alertas.map((alert, index) => (
                  <li key={index} className="text-pRed mt-4">
                    {alert}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contenedor para Observaciones */}
            <div className="w-11/12 md:w-10/12 gap-4 flex-col items-center justify-center mt-0 border-2 border-pGray p-4 rounded-l-xl rounded-t-xl">
              <div className="flex flex-row items-center justify-start gap-4">
                <div className="bg-pGray text-white rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-ai"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 16v-6a2 2 0 1 1 4 0v6" />
                    <path d="M8 13h4" />
                    <path d="M16 8v8" />
                  </svg>
                </div>
                <p className="text-3xl">Observaciones</p>
              </div>
              <ul className="list-disc pl-5 mt-4">
                {data.observaciones.map((obs, index) => (
                  <li key={index} className="mt-4">
                    {obs}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
        {/* PDF Actions */}
        {showSectionsAfterGenerate && !loadingPdf && (
          <div className="w-11/12 md:w-10/12 mt-0 flex flex-col gap-4">
            <button className=" w-full rounded-md p-4 bg-pRed text-white flex flex-row gap-2 items-center justify-center text-lg hover:hover:bg-pRedHover">
              <a
                href="/Planilla_Electrónica_6UV9S7A9Q3E.pdf"
                download="Planilla_Electrónica_6UV9S7A9Q3E.pdf"
                className="flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-download"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                  <path d="M7 11l5 5l5 -5" />
                  <path d="M12 4l0 12" />
                </svg>
                Descargar documento PDF
              </a>
            </button>
            <button
              className="w-full rounded-md p-4 bg-pGray text-white flex flex-row gap-2 items-center justify-center text-lg hover:hover:bg-pPurpleHover"
              //onClick={togglePdf}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-eye"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
              </svg>
              Visualizar documento PDF
            </button>
            {showPdf && (
              <iframe
                src="/Planilla_Electrónica_6UV9S7A9Q3E.pdf"
                width="100%"
                height="500px"
                className="mt-4 border border-gray-300"
              />
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
