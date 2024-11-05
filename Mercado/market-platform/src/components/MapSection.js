import React from 'react';
import './MapSection.css';

const MapSection = () => {
  return (
    <div className="map-section">
      <img src="./mapa-brasil.png" alt="Mapa do Brasil" />
      <div className="region-highlight">
        Atendimentos na região <strong>SUL</strong>
      </div>
    </div>
  );
};

export default MapSection;
