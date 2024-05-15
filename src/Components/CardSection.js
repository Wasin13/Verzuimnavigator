import React from 'react';
import './CardSection.css';

function CardSection() {
  return (
    <div className="card-section">
      <div className="card">
        <h3>Stappenplan zieke medewerker</h3>
        <p>In het stappenplan wordt u meegenomen in de acties die van u, als werkgever, worden verwacht bij een zieke medewerker.</p>
        <button className="card-button">Bekijk stappenplan 
          <span className="icon-wrapper">
            <i className="fas fa-arrow-right"></i>
          </span>
        </button>
      </div>
      <div className="card">
        <h3>Neus even rond in onze artikelen</h3>
        <p>Verken ons uitgebreide assortiment aan bronnen, tools en tips om de gezondheid en het welzijn van uw team én uzelf te bevorderen.</p>
        <button className="card-button">Bekijk alle artikelen 
          <span className="icon-wrapper">
            <i className="fas fa-arrow-right"></i>
          </span>
        </button>
      </div>
      <div className="card">
        <h3>Presenteren van ons prototype</h3>
        <p>Bescherming begint hier. Ontdek onze uitgebreide selectie preventiemiddelen en zorg voor een veilige werkomgeving voor uw team.</p>
        <button className="card-button">Bekijk preventiemiddelen 
          <span className="icon-wrapper">
            <i className="fas fa-arrow-right"></i>
          </span>
        </button>
      </div>
    </div>
  );
}

export default CardSection;
