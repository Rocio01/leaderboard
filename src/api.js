import display from './display';

const gameId = 'kfdkP1FQT0NChZttPhkN';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;

const postScore = async (name, score) => {
  try {
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
    return message;
  } catch (error) {
    return error;
  }
};

const getScores = async () => {
  try {
    const response = await fetch(url);

    const data = await response.json();

    const { result } = data;

    display(result);
  } catch (error) {
    throw new Error(error.message);
  }
};

export { postScore, getScores };