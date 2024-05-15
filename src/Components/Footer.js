import React from 'react';
import '../Components/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Ons aanbod</h3>
          <ul>
            <li><a href="/artikelen">Artikelen</a></li>
            <li><a href="/stappenplan">Stappenplan</a></li>
            <li><a href="/diensten">Diensten</a></li>
            <li><a href="/preventiefonds">Preventiefonds</a></li>
            <li><a href="/vergoedingen">Vergoedingen</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Gebruikersvoorwaarden</h3>
          <ul>
            <li><a href="/disclaimer">Disclaimer</a></li>
            <li><a href="/privacy">Privacy</a></li>
            <li><a href="/cookies">Cookies</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li>Tel. nummer: 085 - 0045 341</li>
            <li><a href="mailto:service@verzuimnavigator.nl">E-mail: service@verzuimnavigator.nl</a></li>
            <li><a href="/meer-hulp">Meer hulp nodig?</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
