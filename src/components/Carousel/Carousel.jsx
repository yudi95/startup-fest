import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Item, Slider, SliderWrapper, BtnLeft, BtnRight,
} from './styled';

// icons
import LeftArrow from '../../assets/icons/LeftArrow';
import RightArrow from '../../assets/icons/RightArrow';

const Carousel = ({
  children, smooth, height, width, wheel,
}) => {
  const sliderRef = useRef();
  // const [checked, setChecked] = useState(0);

  const coeficienteMovimento = 0.5;

  const handleWheel = (e) => {
    if (!wheel) return;
    const { deltaY } = e;
    if (deltaY > 0) { // para baixo -> para direita.
      sliderRef.current.scrollLeft += (sliderRef.current.offsetWidth * coeficienteMovimento) + 9;
    } else { // para cima -> para esquerda
      sliderRef.current.scrollLeft -= (sliderRef.current.offsetWidth * coeficienteMovimento) + 9;
    }
  };
  const renderChildrens = (c) => {
    if (!c) return null;
    if (Array.isArray(c)) {
      return c.map((Comp) => (
        <Item className="slider-item" key={Comp.key} tabIndex={0}>
          {Comp}
        </Item>
      ));
    }
    return (
      <Item tabIndex={0}>
        {c}
      </Item>
    );
  };

  const moveLeft = () => {
    sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth + 12;
  };

  const moveRigth = () => {
    sliderRef.current.scrollLeft += sliderRef.current.offsetWidth + 12;
  };

  useEffect(() => {
    sliderRef.current.scrollLeft = 0;
  }, []);

  return (
    <SliderWrapper
      id="SlideWrapper"
      height={height}
      width={width}
      tabIndex={-1}
    >
      <Slider
        id="Slider"
        smooth={smooth}
        ref={sliderRef}
        onWheel={handleWheel}
      >
        {renderChildrens(children)}
      </Slider>
      <BtnRight className="btn-steps" onClick={moveRigth}>
        <RightArrow />
      </BtnRight>
      <BtnLeft className="btn-steps" onClick={moveLeft}>
        <LeftArrow />
      </BtnLeft>
    </SliderWrapper>
  );
};

Carousel.propTypes = {
  children: PropTypes.node,
  smooth: PropTypes.bool,
  height: PropTypes.string,
  width: PropTypes.string,
  wheel: PropTypes.bool,
};

Carousel.defaultProps = {
  children: '',
  smooth: false,
  height: '300px',
  width: '80vw',
  wheel: false,
};

export default Carousel;
