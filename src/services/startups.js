export default () => {
  const url = 'http://localhost:3001';

  const getStartupList = async () => {
    const res = await fetch(url);
    return res.json();
  };

  const getStartup = async (startupId) => {
    const res = await fetch(`${url}/${startupId}`, {
      headers: {
        'Content-Type': 'application/json',
        mode: 'cors',
      },
    });
    return res.json();
  };

  const rateStartup = async (startupId, type, rate) => {
    const res = await fetch(`${url}/${startupId}/rate`, {
      headers: {
        'Content-Type': 'application/json',
        mode: 'cors',
      },
      method: 'POST',
      body: JSON.stringify({ rate, type }),
    });

    return res.json();
  };

  return {
    getStartupList,
    getStartup,
    rateStartup,
  };
};

// talvez fazer essa 'classe' ser instanciada pelo id e n ficar passando...
