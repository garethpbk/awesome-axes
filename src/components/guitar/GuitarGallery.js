import React from 'react';
import './styles/main.scss';

// import functions
import triggerOnEnter from '../../util/triggerOnEnter';

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
          onKeyDown={e => triggerOnEnter(e.key, () => setActiveImage(img.src))}
          tabIndex="0"
        />
      ))}
    </div>
  );
}

export default GuitarGallery;
