/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

import { Card } from './styled';

import RankingStars from '../RankingStars';

function RankingList({ list, type }) {
  if (!list.length) {
    return (
      <div>
        Nenhuma startup foi votada para essa categoria.
      </div>
    );
  }

  return (
    list?.map((p, i) => (
      <Card key={p.startup_name} src={p.thumbnail}>
        <span className="position">
          {i + 1}
          º
        </span>
        <div className="image" />

        <div className="infos">
          <span className="title">
            {p.startup_name}
          </span>

          <div className="subtitle">
            {p.category}
          </div>

          <RankingStars rate={p.classification[type]} disabled />
        </div>
      </Card>
    ))
  );
}

RankingList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
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
  })),
  type: PropTypes.string,
};

RankingList.defaultProps = {
  list: [],
  type: '',
};

export default RankingList;
