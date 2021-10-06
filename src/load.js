import display from './display';
import managerArr from './manager';

const arr = [];
const loadEventListeners = () => {
  window.addEventListener('DOMContentLoaded', managerArr(arr, display));
};

export { loadEventListeners as default };