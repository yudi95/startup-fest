/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';

import './star.css';

// TODO: Poder votar rate quebrado, e.g: 3.5, 4.5 etc...

function RankingStars({ half, filled, onClick }) {
  if (half && !filled) {
    return (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        className="star-ranking"
        onClick={onClick}
      >
        <defs>
          <linearGradient id="color_svg">
            <stop offset="50%" stopColor="#fbff00" />
            <stop offset="50%" stopColor="#e0e0e0" stopOpacity="1" />
          </linearGradient>

        </defs>
        <path
          d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,
         31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,
         12.118l11.547-1.2L16.026,0.6L20.388,10.918z"
          fill="url(#color_svg)"
        />
      </svg>
    );
  }
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      className="star-ranking"
      fill={filled ? '#fbff00' : '#e0e0e0'}
      onClick={onClick}
    >
      <path
        d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,
             31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,
             12.118l11.547-1.2L16.026,0.6L20.388,10.918z"
      />
    </svg>
  );
}

RankingStars.propTypes = {
  filled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  half: PropTypes.bool,
};

RankingStars.defaultProps = {
  half: false,
};

export default RankingStars;
