import React, { useLayoutEffect, useState } from 'react';
import { Link } from '@reach/router';
import './styles/main.scss';

// import hooks
import useSetTitle from '../../hooks/useSetTitle';

// import components
import GuitarGallery from './GuitarGallery';

function Guitar({ guitars, location: { pathname, state: locationState }, setHeaderHeight }) {
  const path = pathname.replace('/guitars/', '').replace('/', '');

  const guitarToRender = guitars
    .filter(guitar => guitar.name.toLowerCase().replace(/ /g, '-') === path)
    .reduce(guitar => guitar);

  const { gallery, name, text } = guitarToRender;

  useSetTitle(name);

  const [activeImage, setActiveImage] = useState(
    locationState && locationState.guitarImage ? locationState.guitarImage : gallery[0].src
  );

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
        <h2 className="fancy-title">{name}</h2>
        <div className="guitar-text" dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  );
}

export default Guitar;
