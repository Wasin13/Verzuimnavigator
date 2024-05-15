import React from 'react';
import '../Components/Sponsors.css';
import sponsor1 from '../img/image-10.png';
import sponsor2 from '../img/image-11.png';
import sponsor3 from '../img/image-12.png';
import sponsor4 from '../img/image-13.png';
import sponsor5 from '../img/image-14.png';

function Sponsors() {
  return (
    <div className="sponsors-section">
      <h2 className="sponsors-title">Mogelijk gemaakt door</h2>
      <div className="sponsors-grid">
        <div className="sponsor-item"><img src={sponsor1} alt="Sponsor 1" /></div>
        <div className="sponsor-item"><img src={sponsor2} alt="Sponsor 2" /></div>
        <div className="sponsor-item"><img src={sponsor3} alt="Sponsor 3" /></div>
        <div className="sponsor-item"><img src={sponsor4} alt="Sponsor 4" /></div>
        <div className="sponsor-item"><img src={sponsor5} alt="Sponsor 5" /></div>
      </div>
    </div>
  );
}

export default Sponsors;
