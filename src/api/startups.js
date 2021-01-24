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

  return {
    getStartupList,
    getStartup,
  };
};
