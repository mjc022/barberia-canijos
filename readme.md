# 🧔 BARBERÍA CANIJOS

Proyecto profesionalizante para el Instituto **TECLAB**, desarrollado como sitio web completo para una barbería moderna, combinando **frontend** (HTML, CSS, JS) con un **backend en Node.js** capaz de enviar correos mediante formularios de turnos.

---

## ✂️ Descripción general

**Barbería Canijos** es un sitio institucional pensado para difundir los servicios de una barbería ubicada en el corazón de la ciudad.  
El proyecto abarca la estructura completa de un sitio comercial responsive y funcional:

- **Inicio (Home):** presentación de la barbería, misión, mapa embebido de Google Maps y video institucional.  
- **servicios:** catálogo visual de servicios y artículos para el cuidado del cabello y la barba.  
- **turnos:** formulario con validación, envío de mensajes por correo y enlace directo a WhatsApp.  

---

## 💻 Tecnologías utilizadas

### Frontend
- **HTML5** — estructura semántica del sitio.  
- **CSS3** — diseño visual, animaciones y media queries para un layout responsive.  
- **Reset CSS** — normalización de estilos base.  
- **Google Fonts (Montserrat)** — tipografía principal.  
- **Embeds externos:** Google Maps, video MP4 y botón flotante de WhatsApp.

### Backend
- **Node.js** y **Express** — servidor web.  
- **Nodemailer** — envío de correos desde el formulario.  
- **dotenv** — manejo seguro de variables de entorno (`EMAIL_USER`, `EMAIL_PASS`).  
- **body-parser** y **CORS** — procesamiento seguro de peticiones HTTP.

---

## ⚙️ Estructura del proyecto
barberia-canijos/
│
├── public/
│ ├── CSS/
│ │ └── style.css
│ ├── Images/
│ ├── Tools/
│ │ └── reset.css
│ ├── Views/
│ │ ├── turnos.html
│ │ ├── servicios.html
│ │ └── ...
│ └── index.html
│
├── server.js
├── package.json
├── .gitignore
└── .env

implementada en `server.js`.  
El servidor usa **Nodemailer** para reenviar la información al correo configurado en el archivo `.env`:

```env
EMAIL_USER=tu_correo@gmail.com
EMAIL_PASS=tu_contraseña_de_aplicación 
```
📱 Diseño responsive

El sitio se adapta a distintos tamaños de pantalla:

En móviles, el contenido se apila verticalmente y los botones se ajustan al ancho completo.

En escritorio, mantiene un layout centrado de hasta 1100 px, con el video y el mapa redimensionados para una visualización óptima.

---

🔒 Variables de entorno y seguridad

El archivo .env no se sube al repositorio.

Las credenciales deben ser contraseñas de aplicación generadas en Gmail (cuenta con 2FA activado).

📄 Licencia

Este proyecto fue desarrollado con fines educativos y demostrativos dentro del marco académico del Instituto TECLAB.
Libre para uso educativo y mejora personal.


