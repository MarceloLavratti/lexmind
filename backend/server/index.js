import express from "express";
import cors from "cors";
import aiRoutes from "../server/routes/aiRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// Use o roteador
app.use("/api", aiRoutes);

app.listen(5000, () =>
  console.log("🚀 Servidor Lexmind rodando em http://localhost:5000")
);
