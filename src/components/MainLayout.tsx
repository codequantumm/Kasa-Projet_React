import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import logoFooter from '../assets/logoFooter.png'
import '../styles/mainLayout.scss'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="page-container">
        <header className="header">
          <div className="header__logo">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <Link to="/">Accueil</Link>
              </li>
              <li className="header__nav-item">
                <Link to="/a-propos">À propos</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="main-content">{children}</main>
      </div>
      <footer className="footer">
        <img src={logoFooter} alt="logo" className="footer-logo" />
        <p>&copy; 2024 Kasa. All rights reserved.</p>
      </footer>
    </>
  )
}

export default MainLayout
