import React, { useEffect, useState } from 'react';
import './styles.scss';

// import components
import CarouselSelect from './CarouselSelect';
import CarouselSlide from './CarouselSlide';

function isCurrent(current, i) {
  if (current === i) return ' current';

  return '';
}

function Carousel({ guitars, setHeaderHeight }) {
  // start at index 2 of the cloned slides as the first two are copies
  const [current, setCurrent] = useState(2);
  const [transitionLength, setTransitionLength] = useState('0.25s');

  useEffect(() => {
    setHeaderHeight('header-full');
  }, [setHeaderHeight]);

  // add a clone of first 2 and last 2 slides for seamless transition from first to last or last to first slide
  const slidesWithClones = [
    guitars[guitars.length - 2],
    guitars[guitars.length - 1],
    ...guitars,
    guitars[0],
    guitars[1],
  ];

  const advanceSlide = () => {
    setCurrent(current => current + 1);
    setTransitionLength('0.25s');

    // if on last slide, go to the clone of the first slide, then do a "hidden transition" back to actual first slide
    if (current === slidesWithClones.length - 3) {
      setTimeout(() => {
        setTransitionLength('0s');
        setCurrent(2);
      }, 250);
    }
  };

  const reverseSlide = () => {
    setCurrent(current => current - 1);
    setTransitionLength('0.25s');

    // if on first slide, go to the clone of the last slide, then do a "hidden transition" back to actual last slide
    if (current === 2) {
      setTimeout(() => {
        setTransitionLength('0s');
        setCurrent(guitars.length + 1);
      }, 250);
    }
  };

  const changeSlide = i => {
    setCurrent(i);
    setTransitionLength('0.25s');
  };

  return (
    <div className="carousel-outer">
      <span className="carousel-control left" onClick={reverseSlide} />
      <section className="carousel-wrapper">
        <ul
          className="carousel-content"
          style={{
            transition: `transform ${transitionLength} ease-in-out`,
            transform: `translateX(${current * -25 + (current - 1) * -25}%)`,
          }}
        >
          {slidesWithClones.map((slide, i) => (
            <CarouselSlide key={`slide=${i}`} current={current} i={i} isCurrent={isCurrent} slide={slide} />
          ))}
        </ul>
      </section>
      <span className="carousel-control right" onClick={advanceSlide} />
      <CarouselSelect changeSlide={changeSlide} current={current} guitars={guitars} isCurrent={isCurrent} />
    </div>
  );
}

export default Carousel;
