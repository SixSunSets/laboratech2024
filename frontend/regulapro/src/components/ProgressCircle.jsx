import React, { useState } from "react";

function ProgressCircle({ initialStage = 0 }) {
  const stages = [
    { label: "Documento enviado", progress: 0 },
    { label: "Revisión [Huawei OCR]", progress: 50},
    { label: "Recibido correctamente", progress: 100},
 
  ];

  const [currentStage, setCurrentStage] = useState(initialStage);

  const progress = stages[currentStage].progress;

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <div className="flex flex-row items-center gap-8">
        {/* Círculo de progreso */}
        <div className="relative w-36 h-36">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="#e6e6e6"
              strokeWidth="4"
            />
            <circle
              cx="18"
              cy="18"
              r="16"
              fill="none"
              stroke="#0066cc"
              strokeWidth="4"
              strokeDasharray="100"
              strokeDashoffset={`${100 - progress}`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-xl text-gray-800 font-bold">
            {progress}%
          </div>
        </div>

        {/* Lista de etapas */}
        <ul className="w-64 text-left">
          {stages.map((stage, index) => (
            <li
              key={index}
              className={`flex items-center gap-2 p-2 text-sm ${
                index <= currentStage ? "text-pBlue" : "text-gray-400"
              }`}
            >
              <span
                className={`w-4 h-4 rounded-full border-2 ${
                  index <= currentStage ? "bg-pBlue border-pBlue" : "border-gray-400"
                }`}
              ></span>
              {stage.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProgressCircle;
