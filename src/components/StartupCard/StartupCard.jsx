/* eslint-disable camelcase */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { Card, ImageWrapper } from './styled';
// import StartupPage from '../../pages/StartupPage';
import StartupModal from '../StartupModal';

// eslint-disable-next-line object-curly-newline
function StartupCard({ startup }) {
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const redirectToStartupPage = () => {
    // history.push(`/startup/${startup.id}`);
    setOpen(true);
    // history.goBack();
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      {open && <StartupModal startupId={startup.id} closeModal={closeModal} open={open} />}
      <Card onClick={redirectToStartupPage}>
        <ImageWrapper>
          <img
            src={startup.thumbnail}
            alt={startup.startup_name}
            style={{
              boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)',
              width: '100%',
              height: 175,
              borderRadius: 10,
            }}
          />
        </ImageWrapper>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
          <b style={{ fontSize: 23 }}>
            {startup.startup_name}
          </b>
        </div>
        <span>
          {startup.category}
        </span>
        <span style={{
          display: 'absolute', bottom: 0, right: 0, width: 50, height: 50, backgroundColor: 'red',
        }}
        />
      </Card>
    </>
  );
}

StartupCard.propTypes = {
  startup: PropTypes.shape({
    id: PropTypes.string,
    thumbnail: PropTypes.string,
    startup_name: PropTypes.string,
    description: PropTypes.string,
    city: PropTypes.string,
    category: PropTypes.string,
    classification: PropTypes.shape({
      proposta: PropTypes.number,
      pitch: PropTypes.number,
      dev: PropTypes.number,
    }),
  }),
};

StartupCard.defaultProps = {
  startup: {
    id: '',
    thumbnail: '',
    startup_name: '',
    description: '',
    city: '',
    category: '',
    classification: {
      proposta: 0,
      pitch: 0,
      dev: 0,
    },
  },
};

export default StartupCard;
