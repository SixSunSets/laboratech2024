from flask import Flask, send_file, request
from flask_cors import CORS
from generate_pdf_planilla.planilla import generate_planilla_without_obs
import os
import pythoncom

app = Flask(__name__)
CORS(app)

@app.route("/")
def helloWorld():
    return "Hello, cross-origin-world!"

@app.route("/planilla_without_obs", methods=["GET"])
def planilla_without_obs():
    # Iniciar COM en el hilo actual
    pythoncom.CoInitialize()

    # Obtener el parámetro 'aniomes' desde los parámetros de la URL
    aniomes = request.args.get("aniomes")

    if not aniomes:
        return "Falta el parámetro 'aniomes'", 400  # Respuesta con error si falta el parámetro

    try:
        aniomes = int(aniomes) 
    except ValueError:
        return "El parámetro 'aniomes' debe ser un número válido", 400 

    # Generar el PDF usando el valor de aniomes
    generate_planilla_without_obs(aniomes)

    # Construir la ruta del archivo PDF generado
    pdf_path = f"C:/Users/alexa/Dataton/Labora-Tech-2024/backend/planilla_Electrónica_{aniomes}.pdf"
    
    if os.path.exists(pdf_path):
        # Enviar el archivo como respuesta si existe
        return send_file(pdf_path, as_attachment=True, download_name=os.path.basename(pdf_path))
    else:
        return "El archivo no existe", 404


if __name__ == '__main__':
    app.run()