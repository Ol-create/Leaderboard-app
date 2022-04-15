/* eslint-disable import/extensions */
import './main.scss';
import { addNewScore, displayScore, referesh } from './moudles/scores';

const form = document.querySelector('.form');

//Add score
addNewScore(form);

//Display score
displayScore();

// Refresh Page
referesh();
