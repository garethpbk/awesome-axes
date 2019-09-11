import React, { useLayoutEffect, useState } from 'react';
import './styles.scss';

// import components
import GuitarEntry from './GuitarEntry';

function Guitars({ guitars, setHeaderHeight }) {
  // useLayoutEffect instead of useEffect to prevent flash of full-height header before DOM fully rendered
  useLayoutEffect(() => {
    setHeaderHeight('header-short');
  }, [setHeaderHeight]);

  const [hoveredGuitar, setHoveredGuitar] = useState(null);

  return (
    <div className="guitars-wrapper">
      <div className="container">
        <h2 className="fancy-title">All Guitars</h2>
        <div className="guitars-content">
          {guitars.map(guitar => (
            <GuitarEntry key={guitar.name} guitar={guitar} setHoveredGuitar={setHoveredGuitar} />
          ))}
        </div>
        <h3 className="guitar-hovered-name">{hoveredGuitar}</h3>
      </div>
    </div>
  );
}

export default Guitars;
