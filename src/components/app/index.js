import React, { useLayoutEffect, useState } from 'react';
import { Router } from '@reach/router';
import './styles.scss';

// import data
import guitars from '../../data/guitars';

// import components
import Carousel from '../carousel';
import Footer from '../footer';
import FourOhFour from '../fourOhFour';
import Guitar from '../guitar';
import Guitars from '../guitars';
import Header from '../header';

// fix for Reach router scrolling down the page on route changes
const ScrollToTop = ({ children, location }) => {
  useLayoutEffect(() => window.scrollTo(0, 0), [location.pathname]);
  return children;
};

function App() {
  const [headerHeight, setHeaderHeight] = useState('header-full');

  return (
    <div className="app-wrapper">
      <div className="app-content">
        <Header headerHeight={headerHeight} />
        <main>
          <Router>
            <ScrollToTop path="/">
              <Carousel guitars={guitars} setHeaderHeight={setHeaderHeight} path="/" />
              <Guitar guitars={guitars} setHeaderHeight={setHeaderHeight} path="/guitars/:name" />
              <Guitars guitars={guitars} setHeaderHeight={setHeaderHeight} path="/guitars" />
              <FourOhFour path="/404" default />
            </ScrollToTop>
          </Router>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
