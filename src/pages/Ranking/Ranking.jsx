import React, { useEffect, useState } from 'react';

import startupApi from '../../services/startups';

import { Wrapper } from './styled';

// components
import RankingList from '../../components/RankingList';

function Ranking() {
  const api = startupApi();

  const [ranks, setRanks] = useState({});

  useEffect(() => {
    (async () => {
      const res = await api.getRankingList();
      console.log(res);
      setRanks(res);
    })();
  }, []);

  return (
    <Wrapper>
      <div className="content-rank">
        <h2>
          Apresentação:
        </h2>
        <RankingList list={ranks.pitch} type="pitch" />
      </div>
      <div className="content-rank">
        <h2>
          Proposta:
        </h2>
        <RankingList list={ranks.proposta} type="proposta" />
      </div>
      <div className="content-rank">
        <h2>
          Desenvolvimento:
        </h2>
        <RankingList list={ranks.dev} type="dev" />
      </div>
    </Wrapper>
  );
}

export default Ranking;
