const express = require('express');
const cors = require('cors');
const multer = require('multer');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
const upload = multer({ storage: multer.memoryStorage() });

app.post('/api/apply', upload.single('cv'), async (req, res) => {
  const {
    name,
    email,
    phone,
    linkedin,
    city,
    salaryExpectation,
    jobId,
    jobName,
  } = req.body;
  const cvFile = req.file;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.DEST_EMAIL,
      subject: `Candidatura para ${jobName} (ID ${jobId})`,
      text: `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\nLinkedIn: ${linkedin}\nCidade: ${city}\nSalário pretendido: ${salaryExpectation}`,
      attachments: cvFile
        ? [{ filename: cvFile.originalname, content: cvFile.buffer }]
        : [],
    });
    res.json({ ok: true });
  } catch (err) {
    console.error('Erro ao enviar e-mail:', err);
    res.status(500).json({ ok: false });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
