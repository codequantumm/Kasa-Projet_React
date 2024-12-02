import React, { useState } from 'react';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; 
import '../styles/carousel.scss';
import { BannerCarouselProps } from '../definitions/bannerCarouselProps';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const BannerCarousel: React.FC<BannerCarouselProps> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };


  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="banner-carousel">
      <button className="carousel-button prev" onClick={prevImage}>
      <FontAwesomeIcon icon={faChevronLeft} /> 
      </button>

      <div className="carousel-container">
     
        <img
          src={images[currentImageIndex]}
          alt={`Carrousel ${currentImageIndex + 1}`}
          className="carousel-image"
        />
      </div>
      

      <button className="carousel-button next" onClick={nextImage}>
      <FontAwesomeIcon icon={faChevronRight} />
      </button>

      <div className="carousel-pagination">
        {currentImageIndex + 1}/{images.length}
      </div>
    </div>
  );
};

export default BannerCarousel;
