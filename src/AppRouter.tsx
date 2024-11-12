import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';


function AppRouter() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Route pour gérer les URLs non trouvées */}
          <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
  );
}

export default AppRouter;
