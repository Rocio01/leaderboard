import { getScores, postScore } from './api';

const user = document.querySelector('#name');
const score = document.querySelector('#score');

const formButton = document.querySelector('#button-submit');
const refresh = document.querySelector('.refresh');

const loadEventListeners = () => {
  window.addEventListener('DOMContentLoaded', getScores());
  formButton.onclick = () => {
    postScore(user, score);
  };

  refresh.addEventListener('click', getScores);
};

export { loadEventListeners as default };