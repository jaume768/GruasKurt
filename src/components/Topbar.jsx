import React from 'react';
import './css/Topbar.css';

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="container-topbar">
        <div className="contact-info">
          <span><i className="fas fa-phone"></i> (+34) 971 43 18 40</span>
          <span><i className="fas fa-envelope"></i> info@gruasmallorca.es</span>
        </div>
        <div className="reac-info">
          <span>REAC - Red de Empresas de Auxilio en Carretera</span>
        </div>
      </div>
    </div>
  );
}
