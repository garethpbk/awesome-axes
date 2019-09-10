import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import './styles.scss';

// import icons
import { ReactComponent as AcousticGuitarIcon } from '../../assets/images/svg/acoustic-guitar-icon.svg';
import { ReactComponent as AmplifierIcon } from '../../assets/images/svg/amplifier-icon.svg';
import { ReactComponent as ElectricGuitarIcon } from '../../assets/images/svg/electric-guitar-icon.svg';

const icons = {
  acousticGuitarIcon: <AcousticGuitarIcon />,
  amplifierIcon: <AmplifierIcon />,
  electricGuitarIcon: <ElectricGuitarIcon />,
};

function isCurrent(current, i) {
  if (current === i) return ' current';

  return '';
}

function Carousel({ guitars, setHeaderHeight }) {
  const [current, setCurrent] = useState(2);
  const [transitionLength, setTransitionLength] = useState('0.25s');

  useEffect(() => {
    setHeaderHeight('header-full');
  }, [setHeaderHeight]);

  // add a clone of first and last slides for seamless transition from first to last or last to first slide
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
      <span className="carousel-control right" onClick={advanceSlide} />
      <div className="carousel-select">
        {guitars.map((slide, i) => (
          <span
            key={`slide-control-${i}`}
            className={`carousel-selector${isCurrent(current, i + 2)}`}
            onClick={() => changeSlide(i + 2)}
          >
            {icons[slide.icon]}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
