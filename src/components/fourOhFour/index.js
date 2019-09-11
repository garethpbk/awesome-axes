import React from 'react';
import { Link } from '@reach/router';
import './styles.scss';

// import hooks
import useSetTitle from '../../hooks/useSetTitle';

function FourOhFour() {
  useSetTitle('Ohhh Nooooo');

  return (
    <div className="four-oh-four-wrapper">
      <div className="container">
        <h2 className="fancy-title">Ohhhh noooooo</h2>
        <p>You've found a route that doesn't exist!</p>
        <Link to="/">Please click here to return to the safety of home.</Link>
      </div>
    </div>
  );
}

export default FourOhFour;
