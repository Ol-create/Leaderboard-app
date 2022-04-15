/* eslint-disable import/extensions */
import { getData, postData, gameScore } from './controller';

const scoreList = document.querySelector('.recent-scores__list');
const refreshBtn = document.querySelector('.refresh-btn');
const ul = document.createElement('ul');

//Create dom elements
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
