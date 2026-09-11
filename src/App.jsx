import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingActions from './components/layout/FloatingActions';
import ScrollToTop from './components/common/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import ServicesCatalog from './pages/ServicesCatalog';
import ServiceDetail from './pages/ServiceDetail';
import BookServicePage from './pages/BookServicePage';
import Contact from './pages/Contact';
import ImageCreditsPage from './pages/ImageCreditsPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#050505] text-[#E0E0E0] selection:bg-gold selection:text-black">
        {/* Sticky Luxury Navbar */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesCatalog />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/book-service" element={<BookServicePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/credits" element={<ImageCreditsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Multi-column Black & Gold Footer */}
        <Footer />

        {/* 24/7 Desktop Floating WhatsApp & Sticky Mobile Action Bar */}
        <FloatingActions />
      </div>
    </BrowserRouter>
  );
}
