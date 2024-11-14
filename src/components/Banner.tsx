import React from 'react';
import '../styles/banner.scss';
import banner from '../assets/banner.png'; 

const Banner: React.FC = () => {
  return (
    <section className="banner">
      <img src={banner} alt="Bannière" className="banner-image" />
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <h2>Chez vous, partout et ailleurs</h2>
      </div>
    </section>
  );
};

export default Banner;
