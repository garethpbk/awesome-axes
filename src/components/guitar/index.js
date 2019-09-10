import React, { useEffect } from 'react';

function Guitar({ guitars, location, setHeaderHeight }) {
  const path = location.pathname.replace('/guitars/', '');
  const guitarToRender = guitars
    .filter(guitar => guitar.name.toLowerCase().replace(/ /g, '-') === path)
    .reduce(guitar => guitar);
  const { description, image, name } = guitarToRender;

  useEffect(() => {
    setHeaderHeight('header-short');
  }, [setHeaderHeight]);

  return (
    <main>
      <img src={image} alt={name} />
      <h1>{name}</h1>
      <p>{description}</p>
    </main>
  );
}

export default Guitar;
