// server.js (CommonJS)
const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
// Use porta 3001 para alinhar com proxy do Vite
const PORT = process.env.PORT || 3001;

// 1) Habilita CORS antes de qualquer rota
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.options('*', cors());

// 2) Certifica-se de que a pasta uploads existe
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

// 3) Configura Multer para salvar PDFs
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `cv-${Date.now()}${ext}`);
  }
});
const upload = multer({
  storage,
  fileFilter: (_req, file, cb) => {
    if (file.mimetype !== 'application/pdf') {
      return cb(new Error('Apenas arquivos PDF são permitidos'));
    }
    cb(null, true);
  },
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB
});

// 4) Rota de submissão de candidatura
app.post('/api/apply', upload.single('cv'), (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'PDF obrigatório' });
    }
    const {
      name,
      email,
      phone,
      linkedin,
      city,
      salaryExpectation,
      jobId,
      jobName
    } = req.body;

    console.log('Nova candidatura:', {
      name,
      email,
      phone,
      linkedin,
      city,
      salaryExpectation,
      jobId,
      jobName,
      file: req.file.filename
    });

    return res.json({ message: 'Candidatura recebida com sucesso' });
  } catch (err) {
    console.error('Erro em /api/apply:', err);
    next(err);
  }
});

// 5) Middleware de erros para multer e validações
app.use((err, _req, res, _next) => {
  console.error('Erro na aplicação:', err.message || err);
  res.status(400).json({ error: err.message || 'Erro interno' });
});

// 6) Inicia o servidor
app.listen(PORT, () => console.log(`API rodando em http://localhost:${PORT}`));
