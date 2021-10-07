
const gameId = 'QfNkZXiPVZCc1yppKEof';
const URL = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;

const postScore = async (name, score) => {
    try {
      await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "aplication/json"
        },
        body: JSON.stringify({
          "user": `${name.value}`,
          "score": `${score.value}`
        })
      })
    } catch (err){
      throw new Error(err.message);
    }
}




