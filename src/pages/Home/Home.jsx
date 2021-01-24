import React, { useEffect, useState } from 'react';
import API from '../../api/startups';
import StartupCard from '../../components/StartupCard';

function Home() {
  const startUpApi = API();
  const [startups, setStartups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await startUpApi.getStartupList();
        console.log(res);
        setStartups(res);
        setLoading(false);
      } catch (er) {
        console.log(er);
        setLoading(false);
        setError(true);
      }
    })();
  }, []);

  return (
    <div>
      {error && (
        <h3>
          Alguma coisa aconteceu. Tente novamente mais tarde
        </h3>
      )}

      <div style={{ display: 'flex' }}>
        {startups.map((s) => <StartupCard startup={s} />)}
      </div>
    </div>
  );
}

export default Home;
