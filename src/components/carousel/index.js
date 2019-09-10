import React, { useState } from 'react';
import './styles.scss';

const slides = ['red', 'blue', 'green', 'coral'];

// add a clone of first and last slides for seamless transition from first to last or last to first slide
const slidesWithClones = [slides[slides.length - 1], ...slides, slides[0]];

function getClassName(current, i) {
  if (current === i) return 'carousel-slide current';

  return 'carousel-slide';
}

function Carousel() {
  const [current, setCurrent] = useState(1);
  const [transitionLength, setTransitionLength] = useState('0.25s');

  const advanceSlide = () => {
    setCurrent(current => current + 1);
    setTransitionLength('0.25s');

    if (current === slidesWithClones.length - 2) {
      setTimeout(() => {
        setTransitionLength('0s');
        setCurrent(1);
      }, 250);
    }
  };

  const reverseSlide = () => {
    setCurrent(current => current - 1);
    setTransitionLength('0.25s');

    if (current === 1) {
      setTimeout(() => {
        setTransitionLength('0s');
        setCurrent(slides.length);
      }, 250);
    }
  };

  return (
    <>
      <section className="carousel-wrapper">
        <ul
          className="carousel-content"
          style={{
            transition: `transform ${transitionLength} ease-in-out`,
            transform: `translateX(${current * -100}%)`,
          }}
        >
          {slidesWithClones.map((slide, i) => (
            <li key={`slide-${i}`} id={slide} className={getClassName(current, i)}>
              {i}
            </li>
          ))}
        </ul>
      </section>
      {slides.map((slide, i) => (
        <span key={`slide-control-${i}`} className="carousel-selector" onClick={() => setCurrent(i)}>
          {i + 1}
        </span>
      ))}
      <br />
      <button onClick={reverseSlide}>Previous</button>
      <button onClick={advanceSlide}>Next</button>
    </>
  );
}

export default Carousel;
