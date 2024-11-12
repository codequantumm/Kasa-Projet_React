import React from 'react';
import { Link } from 'react-router-dom';

interface MainLayoutProps {
  children: React.ReactNode;  
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/fiches-logement">Fiches Logement</Link>
          <Link to="/a-propos">À propos</Link>
        </nav>
      </header>

      <main>{children}</main>

      <footer>
        <p>Footer Content</p>
      </footer>
    </div>
  );
};

export default MainLayout;

