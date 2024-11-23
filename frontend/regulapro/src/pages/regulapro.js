import Image from "next/image";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
import { useRouter } from "next/router";

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

export default function RegulaPRO() {
  const router = useRouter();
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} ${geistHussar.variable} grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]`}
    >
      <Header></Header>
      <main className="row-start-2 w-full flex flex-row gap-40 items-center bg-transparent justify-center p-4">
        <div className="w-11/12 md:w-10/12 gap-4 items-center flex-col sm:flex-row justify-center">
          <p className="text-4xl text-center font-[family-name:var(--font-geist-hussar)]">
            RegulaPRO
          </p>
          <p className="mt-4 text-2xl text-center">
            Automatizamos y simplificamos la verificación del cumplimiento de la
            normativa laboral para potenciar su empresa exportadora
          </p>
          <ul className="mt-8 list-disc pl-5 text-lg">
            <li className="flex items-center gap-4 mb-6 border p-4 pt-8 pb-8 rounded-2xl">
              <img
                src="/compass-6620_256.gif"
                width={120}
                className="mx-auto"
              />
              <span className="p-8">
                <span className="font-bold">
                  Cumplimiento sin complicaciones
                </span>{" "}
                Le ayudamos a mantener su empresa al día con las últimas
                normativas laborales, sin complicaciones ni pérdida de tiempo.
              </span>
            </li>
            <li className="flex items-center gap-4 mb-6 border p-4 pt-8 pb-8 rounded-2xl">
              <img
                src="/to-write-6621_256.gif"
                width={120}
                className="mx-auto"
              />
              <span className="p-8">
                <span className="font-bold">Reportes automáticos</span>{" "}
                Generamos informes de cumplimiento listos para usar, de forma
                que ayudamos a asegurar el acceso de su empresa al mercado
                europeo.
              </span>
            </li>
            <li className="flex items-center gap-4 mb-6 border p-4 pt-8 pb-8 rounded-2xl">
              <img src="/data-6608_256.gif" width={120} className="mx-auto" />
              <span className="p-8">
                <span className="font-bold">Acceso a datos oficiales</span>{" "}
                Conectamos directamente con SUNAT y RENIEC para brindarle
                información actualizada y confiable en cada paso.
              </span>
            </li>
          </ul>
          <p className="mt-8 text-2xl ">¿En qué podemos ayudarle hoy?</p>
          <div className="flex flex-col sm:flex-row justify-center mt-12 gap-12">
            <button
              className="rounded-2xl p-8 duration-300 hover:scale-110 hover:bg-pOrange shadow-lg"
              onClick={() => router.push("/regulapro-planilla")}
            >
              PLANILLA ELECTRÓNICA
            </button>
            <button
              className="rounded-2xl p-8 duration-300 hover:scale-110 hover:bg-pOrange shadow-lg"
              onClick={() => router.push("/regulapro-declaracion-jurada")}
            >
              DECLARACIÓN JURADA
            </button>
            <button
              className="rounded-2xl p-8 duration-300 hover:scale-110 hover:bg-pOrange shadow-lg"
              onClick={() => router.push("/regulapro-guia-normativa")}
            >
              GUÍA DE NORMATIVA EUROPEA
            </button>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
