import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// api
import startUpApi from '../../services/startups';

// components
import Modal from '../Modal';
import RankingStars from '../RankingStars';

// import { Container } from './styles';

function StartupModal({ startupId, open, closeModal }) {
  const [startup, setStartup] = useState({});

  const api = startUpApi();
  const ratefunc = async (type, rate) => api.rateStartup(startup.id, type, rate);

  useEffect(() => {
    (async () => {
      const res = await api.getStartup(startupId);
      setStartup(res);
    })();
  }, []);

  return (
    <Modal closeModal={closeModal} open={open} title={startup.startup_name}>
      <div style={{ padding: 30 }}>
        <div style={{
          color: 'black',
          display: 'flex',
          justifyContent: 'flex-start',
          marginBottom: 15,
        }}
        >
          {startup.startup_name}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', fontSize: 15 }}>
          {startup.description}
        </div>
        {/* ESTRELAS RATE */}

        <div>
          <h3>
            <b>Vote clicando nas estrelas da categoria desejada! </b>
          </h3>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <span style={{ display: 'flex', justifyContent: 'center', width: '50%' }}> Apresentação: </span>
          <div style={{ display: 'flex', justifyContent: 'flex-starts', width: '50%' }}>
            <RankingStars rate={2} rateFunc={ratefunc} type="pitch" />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <span style={{ display: 'flex', justifyContent: 'center', width: '50%' }}> Proposta: </span>
          <div style={{ display: 'flex', justifyContent: 'flex-starts', width: '50%' }}>
            <RankingStars rate={2} rateFunc={ratefunc} type="proposta" />
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <span style={{ display: 'flex', justifyContent: 'center', width: '50%' }}> Desenvolvimento: </span>
          <div style={{ display: 'flex', justifyContent: 'flex-starts', width: '50%' }}>
            <RankingStars rate={2} rateFunc={ratefunc} type="dev" />
          </div>
        </div>
      </div>
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
