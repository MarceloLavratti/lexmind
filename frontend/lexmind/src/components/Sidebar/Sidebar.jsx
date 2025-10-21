import { useState } from "react";
import FileDropZone from "../FileDropZone/FileDropZone";
import "./Sidebar.css";

const Sidebar = ({ onResult }) => {
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFile1 = (file) => setFile1(file);
  const handleFile2 = (file) => setFile2(file);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file1 || !file2) {
      alert("Envie os dois arquivos.");
      return;
    }

    const formData = new FormData();
    formData.append("files", file1);
    formData.append("files", file2);

    try {
      setLoading(true);

      const res = await fetch("http://localhost:5000/api/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      onResult(data.result); // Passa a resposta para o App
    } catch (err) {
      console.error(err);
      alert("Erro ao processar os arquivos.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <aside className="aside-container">
      <img
        src="../../../src/assets/images/lexmind_logo.png"
        alt="lexmind logo"
      />
      <FileDropZone
        label="Arraste ou clique para enviar a informação do serviço de instrução"
        onFileSelected={handleFile1}
      />
      <FileDropZone
        label="Arraste ou clique para enviar a opinião do MP/decisões anteriores"
        onFileSelected={handleFile2}
      />
      <button onClick={handleSubmit}>
        <span className="material-symbols-outlined">upload</span>
      </button>
    </aside>
  );
};

export default Sidebar;
