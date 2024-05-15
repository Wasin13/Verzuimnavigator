import React, { useState } from 'react';
import './ArticleCarousel.css';
import image60 from '../img/image-60.png';
import image70 from '../img/image-70.png';
import image80 from '../img/image-80.png';

const articles = [
  {
    title: '10 tips voor een gezond voedingspatroon',
    description: 'Hieronder vindt u 10 tips waarmee u een gezonder voedingspatroon realiseert.',
    category: 'Gezonde werknemers',
    readTime: '6 min lezen',
    buttonLabel: 'Artikel lezen',
    buttonIcon: 'fas fa-arrow-right',
    image: image60
  },
  {
    title: '10 tips voor meer ontspanning',
    description: 'Wat kunt u doen om te ontspannen? Hieronder vindt u 10 tips waarmee u sneller kunt ontspannen.',
    category: 'Gezonde werknemers',
    readTime: '10 min lezen',
    buttonLabel: 'Artikel lezen',
    buttonIcon: 'fas fa-arrow-right',
    image: image70
  },
  {
    title: '10 tips om te stoppen met roken',
    description: 'Je wilt stoppen met roken, maar zo makkelijk is dat niet altijd. Hieronder vindt u 10 tips om u op gang te helpen.',
    category: 'Gezonde werknemers',
    readTime: '8 min lezen',
    buttonLabel: 'Artikel lezen',
    buttonIcon: 'fas fa-arrow-right',
    image: image80
  },
  {
    title: 'Extra artikel 1',
    description: 'Beschrijving voor extra artikel 1.',
    category: 'Gezonde werknemers',
    readTime: '5 min lezen',
    buttonLabel: 'Artikel lezen',
    buttonIcon: 'fas fa-arrow-right',
    image: image60
  },
  {
    title: 'Extra artikel 2',
    description: 'Beschrijving voor extra artikel 2.',
    category: 'Gezonde werknemers',
    readTime: '7 min lezen',
    buttonLabel: 'Artikel lezen',
    buttonIcon: 'fas fa-arrow-right',
    image: image70
  },
  {
    title: 'Extra artikel 3',
    description: 'Beschrijving voor extra artikel 3.',
    category: 'Gezonde werknemers',
    readTime: '9 min lezen',
    buttonLabel: 'Artikel lezen',
    buttonIcon: 'fas fa-arrow-right',
    image: image80
  }
];

function ArticleCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((current + 1) % articles.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + articles.length) % articles.length);
  };

  const getGridPosition = (index) => {
    return `translateX(-${current * (100 / 3)}%)`;
  };

  return (
    <div className="carousel-container">
      <h2>Onze nieuwste artikelen</h2>
      <div className="carousel">
        <button className="carousel-button prev" onClick={prevSlide}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <div className="carousel-content">
          <div className="carousel-grid" style={{ transform: getGridPosition(current) }}>
            {articles.map((article, index) => (
              <div className="carousel-item" key={index}>
                <div className="carousel-image" style={{ backgroundImage: `url(${article.image})` }}>
                  <div className="carousel-readtime">{article.readTime}</div>
                </div>
                <div className="carousel-text">
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <p className="carousel-category">{article.category}</p>
                  <button className="button-yellow">
                    {article.buttonLabel} <i className={article.buttonIcon}></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="carousel-button next" onClick={nextSlide}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default ArticleCarousel;
