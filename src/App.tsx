import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import APropos from './pages/APropos';
import FicheLogement1 from './pages/FicheLogement1';
import FicheLogement2 from './pages/FicheLogement2';
import FicheLogement3 from './pages/FicheLogement3';
import FicheLogement4 from './pages/FicheLogement4';
import FicheLogement5 from './pages/FicheLogement5'; 
import FicheLogement6 from './pages/FicheLogement6';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
    <Router>
      <Header /> 
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<APropos />} />
          <Route path="/ficheLogement1" element={<FicheLogement1 />} />
          <Route path="/ficheLogement2" element={<FicheLogement2 />} />
          <Route path="/ficheLogement3" element={<FicheLogement3 />} />
          <Route path="/ficheLogement4" element={<FicheLogement4 />} />
          <Route path="/ficheLogement5" element={<FicheLogement5 />} />
          <Route path="/ficheLogement6" element={<FicheLogement6 />} />
        </Routes>
      </main>

      <Footer /> 
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
