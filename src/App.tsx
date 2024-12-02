import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import APropos from './pages/APropos';
import NotFound from './pages/NotFound';
import FicheLogement from './pages/FicheLogement';

import './styles/App.scss';
import './styles/index.scss';
import './styles/mainLayout.scss'; 


function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/ficheLogement/:id" element={<FicheLogement />} />
          <Route path="*" element={<NotFound />} />
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
