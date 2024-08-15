import React from 'react';
import './Menu_Principal.css';

function Menu_Principal() {
  return (
    <div className="menu-container">
      <aside className="sidebar">
        <button className="sidebar-button">?</button>
        <button className="sidebar-button">?</button>
        <button className="sidebar-button">?</button>
        <button className="sidebar-button">?</button>
        <button className="sidebar-button">?</button>
        <button className="sidebar-button">?</button>
      </aside>
      <main className="main-content">
        <h1 className="menu-message">Menu principal</h1>
      </main>
    </div>
  );
}

export default Menu_Principal;