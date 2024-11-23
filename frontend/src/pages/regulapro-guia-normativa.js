import { useState, useEffect, useRef } from "react";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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

// Respuestas predefinidas
const predefinedResponses = {
  "¿Cuál es el objetivo del Reglamento (UE) 2023/1115?":
    "Garantizar que los productos comercializados en la Unión Europea estén libres de deforestación y cumplan con las leyes locales del país de origen.",
  "¿Qué motiva la creación de este reglamento?":
    "La protección de los bosques, la mitigación del cambio climático y la conservación de la biodiversidad, así como la promoción de cadenas de suministro sostenibles.",
  "¿Cuáles son las materias primas más asociadas a la deforestación según el reglamento?":
    "Palma aceitera, soja, madera, cacao, café, ganado bovino y caucho.",
  "¿Qué obligaciones tienen los operadores bajo este reglamento?":
    "Implementar sistemas de diligencia debida que incluyan información sobre el origen de los productos, evaluación y mitigación de riesgos de deforestación.",
  "¿Qué es un sistema de diligencia debida?":
    "Es un sistema que permite garantizar que los productos estén libres de deforestación y cumplan con la legalidad local mediante la recopilación de información, evaluación de riesgos y medidas de mitigación.",
  "¿Cómo se clasifica el riesgo de deforestación de los países?":
    "Los países se clasifican como de bajo, estándar o alto riesgo, y esta clasificación determina los procedimientos de diligencia debida necesarios.",
  "¿Qué medidas de control establece el reglamento?":
    "Controles regulares de autoridades competentes y aduaneras, sistemas de información centralizados y sanciones proporcionales para las infracciones.",
  "¿Qué papel tienen las autoridades aduaneras en este reglamento?":
    "Garantizar que los productos cumplan con el reglamento, mediante controles y verificaciones basadas en declaraciones de diligencia debida.",
  "¿Qué fecha límite establece el reglamento para evaluar la deforestación?":
    "El 31 de diciembre de 2020 es la fecha límite para evitar la deforestación antes de la entrada en vigor del reglamento.",
  "¿Cómo fomenta este reglamento la cooperación internacional?":
    "Promoviendo acuerdos con países productores para mejorar la gobernanza forestal y fomentar el comercio de productos libres de deforestación.",
  "¿Qué sanciones se aplican en caso de incumplimiento del reglamento?":
    "Sanciones efectivas, proporcionadas y disuasorias que pueden incluir la retirada de productos no conformes y multas económicas."
};


export default function RegulaPROGuiaNormativa() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatContainerRef = useRef(null);

  // Efecto para hacer scroll hacia el último mensaje en el contenedor de chat
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  const sendMessage = (text) => {
    setMessages((prevMessages) => [...prevMessages, { text, sender: "user" }]);

    const response =
      predefinedResponses[text] ||
      "Lo siento, no tengo una respuesta para esa pregunta.";

    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: response, sender: "bot" },
      ]);
    }, 500);
  };

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} ${geistHussar.variable} grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]`}
    >
      <Header />
      <main className="row-start-2 w-full flex flex-col gap-8 items-start bg-transparent justify-center p-4">
        <div className=" text-start w-11/12 md:w-10/12 mt-8 mx-auto">
          <p className="text-3xl">Resumen de Normativa europea</p>
        </div>
        <div className="text-start w-11/12 md:w-10/12 mt-8 mx-auto">
          <p className="text-3xl">Asistente de Normativa Europea</p>
          <ul className="mt-4 list-disc pl-6 text-lmx-auto">
            <li className="mt-4">
              Este asistente le ayudará a obtener información sobre la normativa
              laboral y de seguridad europea.
            </li>
            <li className="mt-4">
              Seleccione una pregunta predefinida para obtener respuestas
              rápidas.
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
          {/* Columna izquierda: Input de mensaje y tarjetas */}
          <div className="flex flex-col gap-4 w-full md:w-3/12">
            <form onSubmit={handleSubmit} className="flex gap-2 w-full">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe un mensaje..."
                className="flex-grow p-2 border rounded-xl"
              />
              <button
                type="submit"
                className="bg-pOrange text-white p-3 rounded-full hover:bg-pOrangeHover"
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-send-2"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4.698 4.034l16.302 7.966l-16.302 7.966a.503 .503 0 0 1 -.546 -.124a.555 .555 0 0 1 -.12 -.568l2.468 -7.274l-2.468 -7.274a.555 .555 0 0 1 .12 -.568a.503 .503 0 0 1 .546 -.124z" />
                  <path d="M6.5 12h14.5" />
                </svg>
              </button>
            </form>

            {/* Tarjetas de preguntas predefinidas */}
            <div className="flex gap-2 flex-wrap">
              {Object.keys(predefinedResponses).map((question, index) => (
                <button
                  key={index}
                  onClick={() => sendMessage(question)}
                  className="bg-white text-gray-700 p-2 duration-300 hover:scale-105 shadow-lg rounded-xl"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Columna derecha: Caja de chat */}
          <div className="w-full md:w-7/12 bg-white rounded-md border p-4">
            <div
              className="overflow-y-auto"
              style={{ height: "500px" }}
              ref={chatContainerRef}
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start my-2 ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.sender === "bot" && (
                    <div className="mr-2 border border-black rounded-full p-1">
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
                        className="icon icon-tabler icon-tabler-brand-github-copilot"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 18v-5.5c0 -.667 .167 -1.333 .5 -2" />
                        <path d="M12 7.5c0 -1 -.01 -4.07 -4 -3.5c-3.5 .5 -4 2.5 -4 3.5c0 1.5 0 4 3 4c4 0 5 -2.5 5 -4z" />
                        <path d="M4 12c-1.333 .667 -2 1.333 -2 2c0 1 0 3 1.5 4c3 2 6.5 3 8.5 3s5.499 -1 8.5 -3c1.5 -1 1.5 -3 1.5 -4c0 -.667 -.667 -1.333 -2 -2" />
                        <path d="M20 18v-5.5c0 -.667 -.167 -1.333 -.5 -2" />
                        <path d="M12 7.5l0 -.297l.01 -.269l.027 -.298l.013 -.105l.033 -.215c.014 -.073 .029 -.146 .046 -.22l.06 -.223c.336 -1.118 1.262 -2.237 3.808 -1.873c2.838 .405 3.703 1.797 3.93 2.842l.036 .204c0 .033 .01 .066 .013 .098l.016 .185l0 .171l0 .49l-.015 .394l-.02 .271c-.122 1.366 -.655 2.845 -2.962 2.845c-3.256 0 -4.524 -1.656 -4.883 -3.081l-.053 -.242a3.865 3.865 0 0 1 -.036 -.235l-.021 -.227a3.518 3.518 0 0 1 -.007 -.215z" />
                        <path d="M10 15v2" />
                        <path d="M14 15v2" />
                      </svg>
                    </div>
                  )}
                  <div
                    className={`rounded-xl p-2 ${
                      message.sender === "user"
                        ? "bg-pOrange text-white text-right"
                        : "bg-gray-200 text-left"
                    }`}
                    style={{ maxWidth: "70%" }}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
