import React, { useState } from 'react';
import './styles.scss';

// import slide assets
import slide0 from '../../assets/images/slides/slide-0.jpg';
import slide1 from '../../assets/images/slides/slide-1.jpg';
import slide2 from '../../assets/images/slides/slide-2.jpg';

const slides = [
  {
    image: slide0,
    name: 'Acoustic Guitar',
    description: 'Play some nice chords on this wooden thing.',
  },
  { image: slide1, name: 'Pretty Guitar', description: "It's so nice to look at!" },
  { image: slide2, name: 'Cool Red Guitar', description: 'Better buy an amp with this one.' },
];

// add a clone of first and last slides for seamless transition from first to last or last to first slide
const slidesWithClones = [slides[slides.length - 1], ...slides, slides[0]];

function isCurrent(current, i) {
  if (current === i) return ' current';

  return '';
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
              <img src={slide.image} alt={slide.name} />
              <div className="carousel-slide-overlay">
                <h2>{slide.name}</h2>
                <p>{slide.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <span className="carousel-control right" onClick={advanceSlide}>
        ›
      </span>
      <div className="carousel-select">
        {slides.map((slide, i) => (
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
