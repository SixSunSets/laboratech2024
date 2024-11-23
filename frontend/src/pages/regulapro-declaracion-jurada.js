import Image from "next/image";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { useState } from "react";
import ProgressCircle from "@/components/ProgressCircle";

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

export default function RegulaPRODeclaracionJurada() {
  const router = useRouter();

  const [declaracionJurada, setDeclaracionJurada] = useState(null);
  const [isDeclaracionSent, setIsDeclaracionSent] = useState(false);

  const handleFileChange = (event, type) => {
    const file = event.target.files[0];
    setDeclaracionJurada(file);
    setIsDeclaracionSent(false); // Resetear el estado de envío
  };

  const handleSubmit = (type) => {
    setIsDeclaracionSent(true); // Cambiar a estado de enviado
  };

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} ${geistHussar.variable} grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]`}
    >
      <Header></Header>
      <main className="row-start-2 w-full flex flex-col gap-8 items-center bg-transparent justify-center p-4">
        <div className="w-11/12 md:w-10/12 gap-4 items-center flex-col sm:flex-row justify-center">
          <p className="text-3xl">Subir Declaración Jurada</p>
          <ul className="mt-4 list-disc pl-6">
            <li className="mt-2">
              Descargue el archivo de <strong>Declaración Jurada</strong>.
            </li>
            <li className="mt-2">
              Llene los campos requeridos en el documento descargado.
            </li>
            <li className="mt-2">
              Firme el documento de forma digital o física.
            </li>
            <li className="mt-2">
              Suba el archivo firmado a la plataforma en la sección
              correspondiente.
            </li>
          </ul>
        </div>

        {/* Instrucciones y Descarga */}
        <section className="w-10/12 p-4 rounded-md border">
          <div className="flex flex-row items-center gap-2">
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
              class="icon icon-tabler icons-tabler-outline icon-tabler-download"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
              <path d="M7 11l5 5l5 -5" />
              <path d="M12 4l0 12" />
            </svg>{" "}
            <p className="text-xl">Descargar formato de Declaración Jurada</p>
          </div>
          <div className="mt-4">
            <a
              href="/declaracion_jurada_12345678910.pdf"
              download
              className="inline-block py-2 px-4 bg-pBlue text-white rounded-md hover:bg-pBlueHover"
            >
              Descargar Declaración Jurada
            </a>
          </div>
        </section>

        {/* Sección Declaración Jurada */}
        <section className="w-10/12 p-4 bg-white rounded-md border">
          <div className="flex flex-row items-center gap-2">
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
              class="icon icon-tabler icons-tabler-outline icon-tabler-scan"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 7v-1a2 2 0 0 1 2 -2h2" />
              <path d="M4 17v1a2 2 0 0 0 2 2h2" />
              <path d="M16 4h2a2 2 0 0 1 2 2v1" />
              <path d="M16 20h2a2 2 0 0 0 2 -2v-1" />
              <path d="M5 12l14 0" />
            </svg>
            <p className="text-xl">Enviar Declaración Jurada</p>
          </div>
          <div className="mt-4">
            <input
              type="file"
              onChange={(e) => handleFileChange(e, "declaracionJurada")}
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-pBlue file:text-white hover:file:bg-pBlueHover"
            />
            {declaracionJurada && (
              <p className="mt-2 text-sm text-gray-700">
                Archivo seleccionado: <strong>{declaracionJurada.name}</strong>
              </p>
            )}
            {declaracionJurada && !isDeclaracionSent && (
              <button
                className="mt-4 w-full py-2 px-4 bg-pBlue text-white rounded-md hover:bg-pBlueHover"
                onClick={() => handleSubmit("declaracionJurada")}
              >
                Enviar documento
              </button>
            )}
            {isDeclaracionSent && (
              <div className="mt-4 flex flex-col gap-4 items-start text-green-600">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="ml-2">Enviado correctamente</span>
                </div>
                {/* Progreso con las etapas */}
                <div className="justify-center w-full">
                <ProgressCircle initialStage={0} />
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
}
