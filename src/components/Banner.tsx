import React from 'react';
import '../styles/banner.scss';
import { BannerProps } from '../definitions/bannerProps';


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

