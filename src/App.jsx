import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topbar from './components/Topbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Fleet from './components/Fleet';
import Technology from './components/Technology';
import Coverage from './components/Coverage';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Topbar />
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/la-empresa" element={<About />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/flota" element={<Fleet />} />
            <Route path="/tecnologia" element={<Technology />} />
            <Route path="/cobertura" element={<Coverage />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
