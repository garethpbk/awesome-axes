import React, { useState } from 'react';
import { Router } from '@reach/router';
import './styles.scss';

// import data
import guitars from '../../data/guitars';

// import components
import Carousel from '../carousel';
import Footer from '../footer';
import Guitar from '../guitar';
import Header from '../header';

function App() {
  const [headerHeight, setHeaderHeight] = useState('header-full');

  return (
    <div className="app-wrapper">
      <div className="app-content">
        <Header headerHeight={headerHeight} />
        <main>
          <Router primary={false}>
            <Carousel guitars={guitars} setHeaderHeight={setHeaderHeight} path="/" />
            <Guitar guitars={guitars} setHeaderHeight={setHeaderHeight} path="/guitars/:name" />
          </Router>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
