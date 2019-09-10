import React from 'react';
import './styles.scss';

// import components
import Carousel from '../carousel';
import Header from '../header';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Carousel />
      </div>
    </div>
  );
}

export default App;
