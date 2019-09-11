import React, { useLayoutEffect } from 'react';
import { Link } from '@reach/router';
import './styles.scss';

function Guitar({ guitars, location, setHeaderHeight }) {
  const path = location.pathname.replace('/guitars/', '').replace('/', '');

  const guitarToRender = guitars
    .filter(guitar => guitar.name.toLowerCase().replace(/ /g, '-') === path)
    .reduce(guitar => guitar);

  const { image, name, text } = guitarToRender;

  useLayoutEffect(() => {
    setHeaderHeight('header-short');
  }, [setHeaderHeight]);

  return (
    <div className="guitar-wrapper">
      <div className="container">
        <span className="guitar-crumbs">
          <Link to="/guitars">Guitars</Link> / {name}
        </span>
        <img src={image} alt={name} />
        <h2 className="guitar-title">{name}</h2>
        <div className="guitar-text" dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  );
}

export default Guitar;
