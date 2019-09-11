import React from 'react';
import { Link } from '@reach/router';
import './styles.scss';

function CarouselSlide({ current, i, isCurrent, slide: { description, gallery, name } }) {
  return (
    <li key={`slide-${i}`} className={`carousel-slide${isCurrent(current, i)}`}>
      <Link to={`guitars/${name.toLowerCase().replace(/ /g, '-')}`}>
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
