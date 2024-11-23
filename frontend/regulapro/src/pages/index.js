import Image from "next/image";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import { Router, useRouter } from "next/router";


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

export default function Home() {
  // Enter by RUC/DNI
  const [selectedForm, setSelectedForm] = useState("RUC");
  // To Regulapro's page
  const router = useRouter();

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]`}
    >
      <Header></Header>
      <main className="row-start-3 w-full flex flex-col gap-8 items-center bg-transparent p-4">
        <div className="w-3/12 gap-4 items-center flex-col sm:flex-row border border-solid border-pRed rounded-md justify-center">
          <p className="p-2 bg-pRed text-white">
            {selectedForm === "RUC" ? "Ingresar por RUC" : "Ingresar por DNI"}
          </p>
          <div className="flex flex-col gap-2 p-2 items-center">
            <div className="flex flex-row justify-center gap-2">
              <button
                className={`rounded-md p-2 mt-4 ${selectedForm === "DNI" ? "bg-pLightGray" : "bg-transparent"} text-black border border-solid hover:bg-pLightGray`}
                onClick={() => setSelectedForm("DNI")}
              >
                Ingresa por DNI
              </button>
              <button
                className={`rounded-md p-2 mt-4 ${selectedForm === "RUC" ? "bg-pLightGray" : "bg-transparent"} text-black border border-solid hover:bg-pLightGray`}
                onClick={() => setSelectedForm("RUC")}
              >
                Ingresa por RUC
              </button>
            </div>
            <form className="mt-4 mb-6" onSubmit={(e) => {
              e.preventDefault();router.push("/regulapro");}}>
              <p className="">{selectedForm === "RUC" ? "RUC" : "DNI"}</p>
              <input
                className="w-full border border-solid rounded-md p-2"
                placeholder="RUC"
                required
              ></input>
              <p className="mt-4">Contraseña</p>
              <input
                className="w-full border border-solid rounded-md p-2"
                placeholder="Contraseña"
                type="password"
                required
              ></input>
              <button className="w-full rounded-md p-2 mt-8 bg-pRed text-white">
                Iniciar sesión
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}
