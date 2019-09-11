import React from 'react';
import './styles.scss';

function GuitarGallery({ activeImage, gallery, name, setActiveImage }) {
  return (
    <div className="guitar-gallery-wrapper">
      {gallery.map(img => (
        <img
          key={img.src}
          src={img.src}
          alt={`${name} ${img.alt}`}
          className={activeImage === img.src ? 'active' : null}
          onClick={() => setActiveImage(img.src)}
        />
      ))}
    </div>
  );
}

export default GuitarGallery;
