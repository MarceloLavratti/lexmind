import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";

const App = () => {
  const [aiResult, setAiResult] = useState("");

  return (
    <div>
      <header></header>
      <div className="page-container">
        <Sidebar onResult={setAiResult} />
        <main className="page-content">
          <div className="text-content">{aiResult && <p>{aiResult}</p>}</div>
        </main>
      </div>
    </div>
  );
};

export default App;
