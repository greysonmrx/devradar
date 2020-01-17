import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./global.css";
import "./Sidebar.css";
import "./App.css";

import DevForm from "./components/DevForm";

function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get("/devs");

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    console.log(data);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>
      <main></main>
    </div>
  );
}

export default App;
