import display from "./display";
const gameId = 'ZDxIEZDwVgeQEcdrzL0c';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;

const postScore = async (name, score) => {
  const params = {};
  params.user = name.value;
  params.score = score.value;
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(params),
  });
  const message = await response.json();
  if (message.message === 'Error') {
    throw new Error(message.message);
  }
  console.log(message);
  return message;
};

const getScores = async () => {
  try {
    const response = await fetch(url);

    const data = await response.json();

    const { result } = data;

    display(result);
    console.log(result);
  } catch (error) {
    throw new Error(error.message);
  }
};

export{postScore, getScores}