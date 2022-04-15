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
