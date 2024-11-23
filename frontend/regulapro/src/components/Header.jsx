import React, { useState } from "react";
import { useRouter } from "next/router";

function Header() {
  // On regulapro route
  const router = useRouter();
  const isRegulaPro =
    router.pathname === "/regulapro" ||
    router.pathname === "/regulapro-planilla" ||
    router.pathname === "/regulapro-planilla-pdf" ||
    router.pathname === "/regulapro-guia-normativa" ||
    router.pathname === "/regulapro-declaracion-jurada";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleModal = () => setIsModalOpen((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleLogout = () => {
    console.log("Cerrar sesión");
    setIsModalOpen(false);
  };

  return (
    <header className="row-start-1 w-full flex flex-col flex-wrap items-center justify-center bg-transparent">
      <div className="w-full bg-pRed p-5 flex flex-col sm:flex-row items-center justify-center gap-4">
        <img src="/logo-gob.svg" width={144} alt="Logo Gob" />
        <div className="flex flex-col text-white">
          {/*
          <p className="">Ministerio de Trabajo y Promoción del Empleo</p>
          <p className="">Plataforma del Centro Integrado Formaliza Perú</p>*/}
        </div>
        <img src="/logodataton.png"></img>
      </div>
      <div className="w-full bg-pGray p-2 flex flex-row items-center sm:justify-start">
        <p className="text-white font-semibold text-lg tracking-wider ml-4 sm:ml-32">
          FORMALIZA AHORA
        </p>
        {isRegulaPro && (
          <div className="ml-auto flex items-center gap-4 mr-4 sm:mr-32">
            <button
              className="text-white p-2 rounded-md bg-transparent hover:bg-pRed"
              onClick={() => router.push("/regulapro")}
            >
              INICIO
            </button>
            <button className="text-white p-2 rounded-md bg-transparent hover:bg-pRed flex flex-row items-center gap-1" onClick={toggleDropdown}>
              SERVICIOS
              <svg  xmlns="http://www.w3.org/2000/svg"  width="20"  height="20"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute z-50 mt-52 w-full origin-top-right rounded-md shadow-lg lg:w-48 bg-white">
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => router.push("/regulapro-planilla")}
                >
                  Planilla electrónica
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => router.push("/regulapro-declaracion-jurada")}
                >
                  Declaración jurada
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => router.push("/regulapro-guia-normativa")}
                >
                  Guía de normativa europea
                </button>
              </div>
            )}
            <button
              className="bg-pRed text-white p-2 rounded-full hover:bg-pRedHover"
              onClick={toggleModal}
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
                class="icon icon-tabler icons-tabler-outline icon-tabler-door-exit"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M13 12v.01" />
                <path d="M3 21h18" />
                <path d="M5 21v-16a2 2 0 0 1 2 -2h7.5m2.5 10.5v7.5" />
                <path d="M14 7h7m-3 -3l3 3l-3 3" />
              </svg>
            </button>
            {/* Sign out modal */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg p-8 w-80">
                  <p className="mb-4">Confirme el cierre de sesión</p>
                  <button
                    className="w-full bg-pRed text-white py-2 rounded-md mb-2"
                    onClick={handleLogout}
                  >
                    Cerrar sesión
                  </button>
                  <button
                    className="w-full bg-pLightGray py-2 rounded-md"
                    onClick={toggleModal}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
