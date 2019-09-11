import React, { useState } from 'react';
import { Link } from '@reach/router';
import './styles.scss';

function getRandomImage(gallery) {
  const random = Math.floor(Math.random() * gallery.length);

  return random;
}

function setImageAndHover(gallery, name, setGuitarImage, setHoveredGuitar) {
  const random = getRandomImage(gallery);
  setHoveredGuitar(name);
  setGuitarImage(gallery[random].src);
}

function GuitarEntry({ guitar: { gallery, name }, setHoveredGuitar }) {
  const [guitarImage, setGuitarImage] = useState(gallery[0].src);

  return (
    <Link
      to={name.toLowerCase().replace(/ /g, '-')}
      key={name}
      // pass the randomized image to location state here so that the Guitar component can load with the same image set as the active image
      state={{ guitarImage }}
      onMouseEnter={() => setImageAndHover(gallery, name, setGuitarImage, setHoveredGuitar)}
      onMouseLeave={() => setHoveredGuitar(null)}
    >
      <img className="guitars-entry" src={guitarImage} alt={name} />
    </Link>
  );
}

export default GuitarEntry;
