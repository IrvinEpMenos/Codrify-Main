import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv"; // Cargar variables de entorno

dotenv.config(); // Cargar .env si está en local

const app = express();
const port = process.env.PORT || 10000; // Puerto dinámico para Render

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Configuración de Nodemailer con variables de entorno
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465, // Puerto SSL
    secure: true,
    auth: {
        user: process.env.EMAIL_USER, // Desde variables de entorno
        pass: process.env.EMAIL_PASS,
    },
});

// Ruta para manejar el envío de correos
app.post("/send-email", async (req, res) => {
    const { name, company, phone, subject } = req.body;

    if (!name || !company || !phone || !subject) {
        return res.status(400).json({ error: "Todos los campos son obligatorios." });
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: ["21307007@utcgg.edu.mx"], // Destinatario
        subject: `Nueva solicitud de contacto`,
        html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #058A8C; padding: 20px; border-radius: 8px; background-color: #050520; color: #fff;">
            <div style="text-align: center; margin-bottom: 20px;">
                <h2 style="color: #058A8C;">NUEVA SOLICITUD</h2>
            </div>
            <div style="background-color: #050520; padding: 15px; border-radius: 8px; margin-bottom: 20px;">
                <p style="font-size: 16px;"><strong>Nombre:</strong> ${name}</p>
                <p style="font-size: 16px;"><strong>Empresa:</strong> ${company}</p>
                <p style="font-size: 16px;"><strong>Teléfono:</strong> ${phone}</p>
                <p style="font-size: 16px;"><strong>Asunto:</strong> ${subject}</p>
            </div>
            <footer style="text-align: center; color: #fff; font-size: 14px;">
                <p>Este es un mensaje automático, por favor no responda a este correo.</p>
            </footer>
        </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Correo enviado correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al enviar el correo" });
    }
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${port}`);
});
