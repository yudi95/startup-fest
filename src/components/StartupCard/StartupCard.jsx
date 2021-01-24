/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';

// eslint-disable-next-line object-curly-newline
function StartupCard({ startup }) {
  return (
    <div style={{
      height: 200,
      width: 300,
      // border: '1px solid gray',
      padding: 5,
      margin: 5,
      boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
      position: 'relative',
    }}
    >
      <img
        src={startup.thumbnail}
        alt={startup.startup_name}
        style={{
          // position: 'absolute',
          // top: 5,
          // left: 5,
          // border: '1px solid gray',
          width: 150,
          height: 100,
        }}
      />
      {startup.thumbnail}
    </div>
  );
}

StartupCard.propTypes = {
  startup: PropTypes.shape({
    thumbnail: PropTypes.string,
    startup_name: PropTypes.string,
    description: PropTypes.string,
    city: PropTypes.string,
    category: PropTypes.string,
  }),
};

StartupCard.defaultProps = {
  startup: {
    thumbnail: '',
    startup_name: '',
    description: '',
    city: '',
    category: '',
  },
};

export default StartupCard;
