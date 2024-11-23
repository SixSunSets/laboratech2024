import React from "react";

function Footer() {
  return (
    <footer className="row-start-6 w-full flex flex-col items-start bg-pGray pr-12 pl-12 pb-6 py-20 text-white">
      <div className="flex flex-col sm:flex-row items-start gap-2 mb-4">
        <img
          src="/logo-escudo.png"
          alt="Escudo"
          width={32}
        />
        {/*<p className="font-semibold text-lg">FORMALIZA PERÚ</p>*/}
        <img src="/logodataton.png"></img>
      </div>
      <p className="max-w-sm text-sm">
        El Centro Integrado Formaliza Ahora tiene como objetivo promover y
        facilitar el ingreso y permanencia en la formalización laboral.
      </p>
      <div className="w-full border-t-2 border-white mt-20 py-4 px-5"><p className="text-sm">
        Copyright © MTPE 2024. Todos los derechos reservados.
      </p></div>
      
    </footer>
  );
}

export default Footer;
