import React from 'react';
import './styles/main.scss';

// import functions
import triggerOnEnter from '../../util/triggerOnEnter';

// import icons
import { ReactComponent as AcousticGuitarIcon } from '../../assets/images/svg/acoustic-guitar-icon.svg';
import { ReactComponent as AmplifierIcon } from '../../assets/images/svg/amplifier-icon.svg';
import { ReactComponent as ElectricGuitarIcon } from '../../assets/images/svg/electric-guitar-icon.svg';

const icons = {
  acousticGuitarIcon: <AcousticGuitarIcon />,
  amplifierIcon: <AmplifierIcon />,
  electricGuitarIcon: <ElectricGuitarIcon />,
};

function CarouselSelect({ changeSlide, current, guitars, isCurrent }) {
  return (
    <div className="carousel-select">
      {guitars.map((slide, i) => (
        <span
          key={`slide-control-${i}`}
          className={`carousel-selector${isCurrent(current, i + 2)}`}
          onClick={() => changeSlide(i + 2)}
          onKeyDown={e => triggerOnEnter(e.key, () => changeSlide(i + 2))}
          tabIndex="0"
        >
          {icons[slide.icon]}
        </span>
      ))}
    </div>
  );
}

export default CarouselSelect;
