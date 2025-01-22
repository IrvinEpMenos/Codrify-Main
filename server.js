import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
const port = 5000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Configuración de Nodemailer
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465, // Puerto para SSL
    secure: true,
    auth: {
        user: "21307011@utcgg.edu.mx", // Tu correo Gmail
        pass: "kjegidrzqxspwfpl", // Contraseña o app password de Gmail
    },
});

// Ruta para manejar el envío de correos
app.post("/send-email", (req, res) => {
    const { name, company, phone, subject } = req.body;

    const mailOptions = {
        from: "21307011@utcgg.edu.mx",
        to: "21307007@utcgg.edu.mx", // Destinatario
        subject: `Nuevo mensaje de contacto: ${subject}`,
        text: `
      Nombre: ${name}
      Empresa: ${company}
      Teléfono: ${phone}
      Asunto: ${subject}
    `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send("Error al enviar el correo");
        } else {
            res.status(200).send("Correo enviado correctamente");
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
