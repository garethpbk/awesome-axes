import React, { useRef } from 'react';
import { Link } from '@reach/router';
import './styles/main.scss';

function CarouselSlide({ current, i, isCurrent, slide: { clone = false, description, gallery, name } }) {
  const slideRef = useRef(null);

  // trying to prevent the slideshow from moving when slides are focused...this like kind of works?
  // keyboard navigation in general needs a bit of optimization
  slideRef.current && slideRef.current.focus({ preventScroll: true });

  return (
    <li key={`slide-${i}`} className={`carousel-slide${isCurrent(current, i)}`}>
      <Link to={`guitars/${name.toLowerCase().replace(/ /g, '-')}`} tabIndex={clone ? -1 : 0} ref={slideRef}>
        <img src={gallery[0].src} alt={name} />
        <div className="carousel-slide-overlay">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </Link>
    </li>
  );
}

export default CarouselSlide;
