import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Star from './Star';

function RankingStars({ rate, rateFunc }) {
  const aux = [1, 2, 3, 4, 5];
  const [rateAux, setRateAux] = useState(() => rate);
  const isHalf = (v) => {
    if (v < -1) return false;
    const n = Math.abs(v);
    const decimal = n - Math.floor(n);
    return decimal < 1 && decimal > 0;
  };

  const handleOnClick = (rating) => {
    console.log(rating);
    setRateAux(rating);
    rateFunc(rating);
  };

  return (
    <div styled={{ display: 'flex' }}>
      {aux.map((b) => (
        <Star
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
  rateFunc: PropTypes.func.isRequired,
};

RankingStars.defaultProps = {
  rate: 0,
};

export default RankingStars;
