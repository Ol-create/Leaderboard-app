/* eslint-disable import/extensions */
import { getData, postData, gameScore } from './controller';

const scoreList = document.querySelector('.recent-scores__list');
const refreshBtn = document.querySelector('.refresh-btn');
const ul = document.createElement('ul');

// Create dom elements
const createElement = (element = '', className = '', text = '') => {
  const newElement = document.createElement(element);
  newElement.classList.add(className);
  newElement.textContent = text;
  return newElement;
};

// Display score
const displayScore = async () => {
  const data = await getData().then((res) => res.result);
  data.forEach((e) => {
    const li = createElement('li', 'list-item');
    const nameSpan = createElement('span', 'name', `${e.user}: `);
    const scoreSpan = createElement('span', 'score', `${e.score}`);
    li.append(nameSpan, scoreSpan);
    ul.appendChild(li);
  });
  scoreList.appendChild(ul);
};

// Add a new score
const addNewScore = (form) => {
  form.addEventListener('submit', (event) => {
    const user = form.elements.user.value;
    const score = form.elements.score.value;
    gameScore.user = user;
    gameScore.score = score;
    postData(gameScore);
    form.elements.user.value = '';
    form.elements.score.value = '';
    event.preventDefault();
  });
};

// Referesh page
const referesh = () => {
  refreshBtn.addEventListener('click', () => {
    window.location.reload();
  });
};

export { addNewScore, displayScore, referesh };
