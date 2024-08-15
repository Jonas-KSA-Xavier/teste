import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Menu_Principal from './components/Menu_Principal'; // Certifique-se de que o caminho está correto

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/success" element={<Menu_Principal />} />
    </Routes>
  );
}

export default App;