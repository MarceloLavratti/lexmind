import express from "express";
import axios from "axios";
import fs from "fs";
import multer from "multer";

const router = express.Router();

// Configuração do multer
const upload = multer({ dest: "uploads/" });

// Rota de teste do Dolphin 3
router.get("/test-dolphin", async (req, res) => {
  try {
    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "dolphin3",
      prompt: "Teste rápido",
      stream: false,
    });
    res.json({ result: response.data.response });
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

// Rota principal para analisar arquivos TXT
router.post("/analyze", upload.array("files", 2), async (req, res) => {
  try {
    const files = req.files;
    if (!files || files.length !== 2) {
      return res
        .status(400)
        .json({ error: "Envie exatamente 2 arquivos TXT." });
    }

    const content1 = fs.readFileSync(files[0].path, "utf8");
    const content2 = fs.readFileSync(files[1].path, "utf8");

    const prompt = `
      Você é um assistente jurídico especializado em tribunais de contas.
      Analise os dois documentos a seguir:
      
      📘 Documento 1 (Serviço de Instrução):
      ${content1}

      📙 Documento 2 (Opinião do MP e decisões anteriores):
      ${content2}

      Gere uma sugestão de opinião de voto técnica e fundamentada,
      de forma objetiva e clara, considerando a coerência jurídica e administrativa.
    `;

    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "dolphin3",
      prompt,
      stream: false,
    });

    files.forEach((f) => fs.unlinkSync(f.path));

    res.json({ result: response.data.response });
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
});

export default router;
