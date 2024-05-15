import React from 'react';
import './About.css';
import backgroundImage from '../img/pexels-pixabay-162534-10.png';

function About() {
  return (
    <div className="about-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay">
        <h2>Wat is de Verzuimnavigator?</h2>
        <div className="about-card-grid">
          <div className="about-card">
            <h3>Samenwerken</h3>
            <p>De Verzuimnavigator is een samenwerking van de Koninklijke Metaalunie, Mevas, NV schade, KMUV en Zilveren Kruis. Het doel? Werkgevers in de metaalbranche ondersteunen bij preventie, verzuim en re-integratie.</p>
          </div>
          <div className="about-card">
            <h3>Vergoedingen op diensten</h3>
            <p>Werkgevers in de metaalbranche kunnen in de Verzuimnavigator diensten aanschaffen met een aantrekkelijke vergoedingen van maximaal 65%. U kunt denken aan trainingen, werkplekonderzoeken en re-integratietrajecten.</p>
          </div>
          <div className="about-card">
            <h3>Relevante thema’s</h3>
            <p>In de Verzuimnavigator vinden werkgevers uitgebreide informatie over verschillende relevante thema’s in de bedrijfstak. Al deze informatie helpt werkgevers om hun bedrijf en medewerkers gezond te maken en te houden.</p>
          </div>
          <div className="about-card">
            <h3>Altijd in beweging</h3>
            <p>Met de Verzuimnavigator zorgen werkgevers ervoor dat hun bedrijf in beweging blijft, maar ook de Verzuimnavigator is altijd in beweging. Er worden continu nieuwe en handige functionaliteiten toegevoegd.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
