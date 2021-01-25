/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// api
import startUpApi from '../../services/startups';

// components
import Modal from '../Modal';
import RankingStars from '../RankingStars';

import { ModalRating } from './styled';

function StartupModal({ startupId, open, closeModal }) {
  const [startup, setStartup] = useState({});

  const api = startUpApi();
  const ratefunc = async (type, rate) => api.rateStartup(startupId, type, rate);

  useEffect(() => {
    (async () => {
      const res = await api.getStartup(startupId);
      setStartup(res);
    })();
  }, []);

  return (
    <Modal closeModal={closeModal} open={open} title="Votação">
      <ModalRating>
        <span className="startup-name">
          {startup.startup_name}
        </span>

        <span className="description">
          {startup.description}
        </span>

        <h3 className="voting-text">
          Vote clicando nas estrelas da categoria desejada!
        </h3>

        <div className="stars-container">

          <div className="stars-item">
            <span> Apresentação: </span>
            <RankingStars rate={startup?.classification?.pitch} rateFunc={ratefunc} type="pitch" />
          </div>

          <div className="stars-item">
            <span> Proposta: </span>
            <RankingStars rate={startup?.classification?.proposta} rateFunc={ratefunc} type="proposta" />
          </div>

          <div className="stars-item">
            <span> Desenvolvimento: </span>
            <RankingStars rate={startup?.classification?.dev} rateFunc={ratefunc} type="dev" />
          </div>

        </div>

        <div className="btn-startup">
          <button type="button" onClick={closeModal}>
            Ok
          </button>
        </div>
      </ModalRating>
    </Modal>
  );
}

StartupModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  startupId: PropTypes.string.isRequired,
  // startup: PropTypes.shape({
  //   id: PropTypes.string,
  //   thumbnail: PropTypes.string,
  //   startup_name: PropTypes.string,
  //   description: PropTypes.string,
  //   city: PropTypes.string,
  //   category: PropTypes.string,
  //   classification: PropTypes.shape({
  //     proposta: PropTypes.number,
  //     pitch: PropTypes.number,
  //     dev: PropTypes.number,
  //   }),
  // }),
};

// StartupModal.defaultProps = {
//   startup: {
//     id: '',
//     thumbnail: '',
//     startup_name: '',
//     description: '',
//     city: '',
//     category: '',
//     classification: {
//       proposta: 0,
//       pitch: 0,
//       dev: 0,
//     },
//   },
// };

export default StartupModal;
