import React from "react";

import "./global.css";
import "./Sidebar.css";
import "./App.css";

import DevForm from "./components/DevForm";

function App() {
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
