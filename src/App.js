import React from 'react';
import Navbar from './Components/Navbar';
import Herosection from './Components/Herosection';
import Cardsection from './Components/CardSection.js';
import Sponsors from './Components/Sponsors.js';
import AboutSection from './Components/About';
import ArticleCarousel from './Components/ArticleCarousel';
import Footer from './Components/Footer.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Herosection />
            <Cardsection />
            <AboutSection />
            <ArticleCarousel />
            <Sponsors />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
