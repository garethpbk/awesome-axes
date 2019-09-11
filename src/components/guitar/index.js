import React, { useLayoutEffect, useState } from 'react';
import { Link } from '@reach/router';
import './styles.scss';

// import components
import GuitarGallery from './GuitarGallery';

function Guitar({ guitars, location, setHeaderHeight }) {
  const path = location.pathname.replace('/guitars/', '').replace('/', '');

  const guitarToRender = guitars
    .filter(guitar => guitar.name.toLowerCase().replace(/ /g, '-') === path)
    .reduce(guitar => guitar);

  const { gallery, name, text } = guitarToRender;

  const [activeImage, setActiveImage] = useState(gallery[0].src);

  // useLayoutEffect instead of useEffect to prevent flash of full-height header before DOM fully rendered
  useLayoutEffect(() => {
    setHeaderHeight('header-short');
  }, [setHeaderHeight]);

  return (
    <div className="guitar-wrapper">
      <div className="container">
        <span className="guitar-crumbs">
          <Link to="/guitars">Guitars</Link> / {name}
        </span>
        <img src={activeImage} alt={name} />
        <GuitarGallery activeImage={activeImage} gallery={gallery} name={name} setActiveImage={setActiveImage} />
        <h2 className="guitar-title">{name}</h2>
        <div className="guitar-text" dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  );
}

export default Guitar;
