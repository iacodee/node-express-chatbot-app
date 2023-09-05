# Chatbot con ChatGPT usando Node.js y Express

Este es un proyecto simple que demuestra cómo crear un chatbot web utilizando Node.js, Express y la API de ChatGPT de OpenAI. Los usuarios pueden interactuar con el chatbot enviando mensajes y recibiendo respuestas generadas por ChatGPT.

![Captura de pantalla](img/chatbot-app.jpg)

## Características

- Interfaz web básica para interactuar con el chatbot.
- Utiliza Express para manejar las solicitudes HTTP.
- Integración con la API de ChatGPT para generar respuestas.

## Requisitos previos

- Node.js y npm instalados en tu sistema.
- Clave de API de OpenAI para acceder a la API de ChatGPT.

## Instalación

1. Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/iacodee/node-express-chatbot-app.git
```

2. Navega al directorio del proyecto:

```bash
cd REPOSITORIO
```

3. Instala las dependencias:

```bash
npm install
```
4. Crea un archivo .env en el directorio raíz del proyecto y agrega tu clave de API de OpenAI:

```bash
PORT = 3000
OPENAI_API_KEY=TU_CLAVE_DE_API_DE_OPENAI
```
# Uso

1. Inicia la aplicación:
```bash
npm start
```

Accede a http://localhost:3000 en tu navegador para interactuar con el chatbot.

Escribe mensajes en el campo de entrada y recibe respuestas del bot en el chat.

# Licencia
Este proyecto está bajo la Licencia MIT.



