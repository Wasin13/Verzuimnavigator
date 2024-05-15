import React from 'react';
import '../App.css';
import Button from './Button.js';
import './Herosection.css';

function Herosection() {
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Navigeer naar gezond werk</h1>
        <p>De Verzuimnavigator heeft de grootste verzameling informatie over ziekteverzuim en preventie in de metaalbranche. Hier vindt u hulp om medewerkers te begeleiden bij ziekte of om samen te werken aan een gezonde werkplek. En als u een dienst aanschaft ter ondersteuning, dan ontvangt u extra vergoedingen!</p>
        <div className="search-wrapper">
          <div className="search-container">
            <input type="text" className="search-input" placeholder="Ik zoek hulp voor mijn medewerker..." />
          </div>
          <Button className="search-button" buttonStyle="btn--outline" buttonSize="btn--large">
            Zoeken
          </Button>
        </div>
      </div>
      <div className="scroll-indicator" onClick={scrollToNextSection}>
        <i className="fas fa-arrow-down scroll-arrow"></i>
      </div>
    </div>
  );
}

export default Herosection;
