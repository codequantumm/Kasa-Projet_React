import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import APropos from './pages/APropos';
import FicheLogement1 from './pages/FicheLogement1';
import FicheLogement2 from './pages/FicheLogement2';
import FicheLogement3 from './pages/FicheLogement3';
import FicheLogement4 from './pages/FicheLogement4';
import FicheLogement5 from './pages/FicheLogement5'; 
import FicheLogement6 from './pages/FicheLogement6';
import './styles/App.scss';
import './styles/index.scss';
import './styles/mainLayout.scss'; 


function App() {
  return (
    <Router>
      <MainLayout>
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
      </MainLayout>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
