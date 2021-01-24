import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import startupApi from '../../api/startups';

function Startup() {
  const api = startupApi();
  const { sid } = useParams();

  const [startup, setStartup] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.getStartup(sid);
        setStartup(res);
        setLoading(false);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div>
      <h1>
        {`startup: ${sid}`}
      </h1>
    </div>
  );
}

export default Startup;
