import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './i18n';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Service'));
const Product = lazy(() => import('./pages/Product'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-[#030305] text-zinc-100 selection:bg-purple-600 selection:text-white flex flex-col justify-between overflow-x-hidden">
          {/* Global Header */}
          <Header />

          <main className="flex-grow">
            <Suspense
              fallback={
                <div className="min-h-[60vh] flex items-center justify-center bg-[#030305]">
                  <div className="w-8 h-8 rounded-full border-2 border-purple-500/20 border-t-purple-500 animate-spin" />
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/service" element={<Services />} />
                <Route path="/product" element={<Product />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>

          {/* Global Footer */}
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;