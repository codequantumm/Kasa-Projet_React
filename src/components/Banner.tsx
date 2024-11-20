import React from 'react';
import '../styles/banner.scss';

interface BannerProps {
  src: string;
  alt: string;
  text: string;
}

const Banner: React.FC<BannerProps> = ({ src, alt, text }) => {
  return (
    <section className="banner">
      <img src={src} alt={alt} className="banner-image" />
      <div className="banner-overlay"></div>
      <div className="banner-content">
        <h2>{text}</h2>
      </div>
    </section>
  );
};

export default Banner;

