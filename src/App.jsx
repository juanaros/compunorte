import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import AboutUs from './sections/AboutUs';
import Builds from './sections/Builds';
import Form from './sections/Form';
import Footer from './sections/Footer';
import TermsAndConditions from './sections/Terms';
import ScrollToTop from './components/Scroll';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className='bg-slate-950'>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <AboutUs />
              <Builds />
              <Form />
            </>
          } />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

