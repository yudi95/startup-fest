import React, { useEffect, useState } from 'react';
import API from '../../services/startups';

// components
import Carousel from '../../components/Carousel';
import StartupCard from '../../components/StartupCard';

// TODO: implementar resposta cacheada?

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
        if (res.message) {
          setLoading(false);
        } else {
          setStartups(res);
          setLoading(false);
        }
      } catch (er) {
        console.log(er);
        setLoading(false);
        setError(true);
      }
    })();
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '50px 0px' }}>
        <h3> Escolha uma Startup para votar! </h3>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Carousel wheel width="80vw" height="250" smooth>
          {startups.map((s, i) => <StartupCard startup={{ ...s, id: `${i}` }} key={s.startup_name} />)}
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
