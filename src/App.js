// App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';


import Services from './components/Services';

function App() {
  return (
    
    <Router>
     
      <Navbar />
      <HeroSection />
     
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
