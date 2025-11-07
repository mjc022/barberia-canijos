const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/enviar", async (req, res) => {
  const { nombre, email, telefono, mensaje, horario, contacto } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS, // app password recomendado
    },
  });

  // verificar configuración y mostrar errores tempranos
  transporter.verify((err, success) => {
    if (err) console.error("Transporter verify error:", err);
    else console.log("Servidor SMTP listo para enviar mensajes");
  });

  try {
    const info = await transporter.sendMail({
      from: `"Barbería Canijos" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "Nuevo mensaje desde la web",
      text: `Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}\nMedio de contacto: ${contacto}\nHorario: ${horario}\nMensaje: ${mensaje}`,
    });
    console.log("Correo enviado:", info);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));
