import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './i18n';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Service';
import Product from './pages/Product';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';
import Blog from './pages/Blog'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop/>
        <div className="min-h-screen bg-[#030305] text-zinc-100 selection:bg-purple-600 selection:text-white flex flex-col justify-between overflow-x-hidden">
          {/* Global Header */}
          <Header />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/service" element={<Services/>}/>
              <Route path="/product" element={<Product/>} />
              <Route path="/blog" element={<Blog/>}/>
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;