const express = require('express');
const cors = require('cors');
const multer = require('multer');
require('dotenv').config();

const app = express();
app.use(cors());
const upload = multer({ storage: multer.memoryStorage() });

app.post('/api/apply', upload.single('cv'), async (req, res) => {
  try {
    const formData = new FormData();
    for (const [k, v] of Object.entries(req.body)) {
      formData.append(k, v);
    }

    if (req.file) {
      formData.append(
        'cv',
        new Blob([req.file.buffer], { type: req.file.mimetype }),
        req.file.originalname
      );
    }

    const response = await fetch(process.env.FORMSPREE_ENDPOINT, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Formspree respondeu com status ${response.status}`);
    }

    res.json({ ok: true });
  } catch (err) {
    console.error('Erro ao enviar para o Formspree:', err);
    res.status(500).json({ ok: false });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
