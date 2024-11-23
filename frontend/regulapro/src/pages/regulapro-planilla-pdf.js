import Image from "next/image";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

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

export default function RegulaPROPlanillaPdf() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} ${geistHussar.variable} grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]`}
    >
      <Header></Header>
      <main className="row-start-2 w-full flex flex-row gap-8 items-center bg-transparent justify-center p-4">
        <div className="w-11/12 md:w-10/12 gap-4 items-center flex-col sm:flex-row justify-center">
          <p className="text-3xl">
            Visualización del documento acerca del cumplimiento de la normativa
            laboral
          </p>
          <ul className="mt-4 list-disc pl-5">
            <li>
              Revise el documento PDF generado para explorar el estado de
              cumplimiento de su empresa. En esta sección, podrá visualizar y
              descargar el informe completo.
            </li>
          </ul>
          <button className="mt-4 w-full rounded-md p-4 bg-pRed text-white flex flex-row gap-2 items-center justify-center text-lg hover:hover:bg-pRedHover">
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
          </button>
          <iframe
            src="/Planilla_Electrónica_6UV9S7A9Q3E.pdf"
            width="100%"
            height="500px"
            className="mt-4 border border-gray-300"
          />
          <p className="text-3xl mt-12">
            Análisis del documento acerca del cumplimiento de la normativa
            laboral
          </p>
          <ul className="mt-4 list-disc pl-5">
            <li>
              Analizamos la formalidad laboral de su empresa, con esto podrás
              conocer los riesgos asociados a la informalidad y las
              oportunidades para mejorar.
            </li>
          </ul>

          {/* Contenedor de gráficos */}
          <div className="mt-8 grid grid-cols-2 gap-4 w-full">
            {[...Array(8)].map((_, index) => (
              <div
                key={index}
                className="bg-gray-200 rounded-md flex items-center justify-center"
              >
                {/* Imagen con ajuste de tamaño */}
                <Image
                  //src={`/path/to/image${index + 1}.png`} // Reemplaza con las rutas correctas de las imágenes
                  alt={`Gráfico ${index + 1}`}
                  width={300} // Ajusta el ancho según lo necesario
                  height={200} // Ajusta la altura según lo necesario
                  className="w-full h-auto object-contain rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
