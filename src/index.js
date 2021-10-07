import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import loadEventListeners from './load';

// loadEventListeners();

// fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/",{
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     name: "Final game"
//   })
// }).then(res => {
//   return res.json()
// })
// .then(data => console.log(data))
// .catch(error=> console.log("error"))

// {result: 'Game with ID: ZDxIEZDwVgeQEcdrzL0c added.'}
const displayContainer = document.querySelector('.display');
const table = document.createElement('table');
table.className = 'table';

const display = (arr) => {
  table.innerHTML = '';
  arr.forEach((obj) => {
    const { user, score } = obj;
    const tbody = document.createElement('tbody');
    tbody.className = 'px-4';
    table.appendChild(tbody);
    tbody.innerHTML = `
                           <tr scope="row">      
                              <td> ${user}: </td>
                              <td> ${score} </td>
                            </tr>
                      
                      `;

    displayContainer.appendChild(table);
  });
};

const gameId = 'ZDxIEZDwVgeQEcdrzL0c';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;
const user = document.querySelector('#name');
const score = document.querySelector('#score');

const formButton = document.querySelector('#button-submit');
const refresh = document.querySelector('.refresh');

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

formButton.onclick = function(){
  postScore(user, score);
} 

refresh.addEventListener("click", getScores)
