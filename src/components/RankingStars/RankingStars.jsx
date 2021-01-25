import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Star from './Star';

// TODO: quando der hover nas estrelas pintar todas até a que deu hover.
// (não só a que está com mouse em cima)

function RankingStars({
  rate, type, rateFunc, disabled,
}) {
  const aux = [1, 2, 3, 4, 5];
  const [rateAux, setRateAux] = useState(() => rate);
  const isHalf = (v) => {
    if (v < -1) return false;
    const n = Math.abs(v);
    const decimal = n - Math.floor(n);
    return decimal < 1 && decimal > 0;
  };

  const handleOnClick = (rating) => {
    if (disabled) return;
    console.log({ rating, type });
    setRateAux(rating);
    rateFunc(type, rating);
  };

  useEffect(() => {
    setRateAux(rate);
  }, [rate]);

  return (
    <div styled={{ display: 'flex' }}>
      {aux.map((b) => (
        <Star
          disabled={disabled}
          filled={rateAux - b >= 0}
          half={isHalf(rateAux - b)}
          key={b}
          onClick={() => handleOnClick(b)}
        />
      ))}
    </div>
  );
}

RankingStars.propTypes = {
  rate: PropTypes.number,
  type: PropTypes.string.isRequired,
  rateFunc: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

RankingStars.defaultProps = {
  rate: 0,
  disabled: false,
};

export default RankingStars;
