import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import './styles.scss';

function isCurrent(current, i) {
  if (current === i) return ' current';

  return '';
}

function Carousel({ guitars, setHeaderHeight }) {
  const [current, setCurrent] = useState(1);
  const [transitionLength, setTransitionLength] = useState('0.25s');

  useEffect(() => {
    setHeaderHeight('header-full');
  }, [setHeaderHeight]);

  // add a clone of first and last slides for seamless transition from first to last or last to first slide
  const slidesWithClones = [guitars[guitars.length - 1], ...guitars, guitars[0]];

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
        setCurrent(guitars.length);
      }, 250);
    }
  };

  const changeSlide = i => {
    setCurrent(i);
    setTransitionLength('0.25s');
  };

  return (
    <div className="carousel-outer">
      <span className="carousel-control left" onClick={reverseSlide}>
        ‹
      </span>
      <section className="carousel-wrapper">
        <ul
          className="carousel-content"
          style={{
            transition: `transform ${transitionLength} ease-in-out`,
            transform: `translateX(${current * -100}%)`,
          }}
        >
          {slidesWithClones.map((slide, i) => (
            <li key={`slide-${i}`} className={`carousel-slide${isCurrent(current, i)}`}>
              <Link to={`guitars/${slide.name.toLowerCase().replace(/ /g, '-')}`}>
                <img src={slide.image} alt={slide.name} />
                <div className="carousel-slide-overlay">
                  <h2>{slide.name}</h2>
                  <p>{slide.description}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <span className="carousel-control right" onClick={advanceSlide}>
        ›
      </span>
      <div className="carousel-select">
        {guitars.map((slide, i) => (
          <span
            key={`slide-control-${i}`}
            className={`carousel-selector${isCurrent(current, i + 1)}`}
            onClick={() => changeSlide(i + 1)}
          />
        ))}
      </div>
      <div className="carousel-controls-mobile">
        <span className="carousel-control" onClick={reverseSlide}>
          ‹
        </span>
        <span className="carousel-control" onClick={advanceSlide}>
          ›
        </span>
      </div>
    </div>
  );
}

export default Carousel;
