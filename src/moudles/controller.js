const gameId = 'Zl4d7IVkemOTTVg2fUdzzoluyemipaul'; 
const baseUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;

// Initialize Game Score Object
const gameScore = { user: '', score: 0 };

// Post request 
const postData = async (data = {}) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  return response.json();
};

// Get requested data
const getData = async () => {
  const response = await fetch(baseUrl);
  return response.json();
};

export { gameScore, postData, getData };
