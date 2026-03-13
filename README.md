Mini Network Monitoring System (NMS)

Sistema de monitoreo de red desarrollado con Node.js y Express.js que permite registrar dispositivos y verificar su estado mediante ping automático.

Funcionalidades

Registro de dispositivos de red

Monitoreo automático de dispositivos

Detección de estado online / offline

Medición de latencia

Historial de latencia

Dashboard web de monitoreo

Ejemplo de monitoreo
Router        🟢 Online
Switch        🟢 Online
Servidor      🔴 Offline
Google DNS    🟢 Online
Tecnologías utilizadas

Node.js

Express.js

MongoDB

Mongoose

Ping para monitoreo de dispositivos
 Estructura del proyecto
network-monitor-nms
│
├── models
│   └── Dispositivo.js
│
├── routes
│   └── dispositivos.js
│
├── services
│   └── monitor.js
│
├── public
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── database.js
├── server.js
└── package.json
instalación

Clonar el repositorio:

git clone https://github.com/Sebastiancervin/network-monitor-nms.git

Entrar al proyecto:

cd network-monitor-nms

Instalar dependencias:

npm install

Ejecutar el servidor:

node server.js

Servidor disponible en:

http://localhost:3000
 API Endpoints
Obtener dispositivos
GET /dispositivos
Registrar dispositivo
POST /dispositivos

Ejemplo:

{
 "ip": "8.8.8.8",
 "hostname": "Google DNS"
}
Hacer ping a dispositivo
GET /dispositivos/ping/:id

Autor

Sebastian Cervin

Estudiante de Ingeniería en Tecnologías de la Información.

Objetivo

Proyecto desarrollado como práctica para aprender:

monitoreo de dispositivos de red

desarrollo de APIs REST

integración con bases de datos

automatización de tareas en backend