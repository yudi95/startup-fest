import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Item, Slider, SliderWrapper } from './styled';

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
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth * coeficienteMovimento;
    } else { // para cima -> para esquerda
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth * coeficienteMovimento;
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
      {/* <BtnRight />
      <BtnLeft /> */}
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
