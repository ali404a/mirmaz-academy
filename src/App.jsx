import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* We will add /experience later */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
