import React, { useState } from 'react';
import { Router } from '@reach/router';
import './styles.scss';

// import data
import guitars from '../../data/guitars';

// import components
import Carousel from '../carousel';
import Guitar from '../guitar';
import Header from '../header';

function App() {
  const [headerHeight, setHeaderHeight] = useState('header-full');

  return (
    <div>
      <Header headerHeight={headerHeight} />
      <main>
        <div className="container">
          <Router>
            <Carousel guitars={guitars} setHeaderHeight={setHeaderHeight} path="/" />
            <Guitar guitars={guitars} setHeaderHeight={setHeaderHeight} path="/guitars/:name" />
          </Router>
        </div>
      </main>
    </div>
  );
}

export default App;
