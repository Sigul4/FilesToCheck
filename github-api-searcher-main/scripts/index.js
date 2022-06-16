/**
 * 1. Form handling -> search query
 * 2. Request to api
 * 3. Handle server response -> data
 * 4. Render users list
 */
import api from './api/index.js';
import addCardToList from './utils/addCardToList.js';
import {viewPersonalCard, hidePersonalCard} from './utils/changePersonalCard.js';

const {searchUsers} = api;

const searchUsersForm = document.forms['search-users'];

// you have to get all cards
const cards = document.querySelectorAll('div.card');

// // better to add events to <body>
// const body = document.querySelector('body');

// add event listener to all cards
cards.forEach((card) =>
  card.addEventListener('click', (e) => {
    e.stopPropagation();
    hidePersonalCard();
    viewPersonalCard(e.currentTarget);
  })
);

document.body.addEventListener('click', () => {
  hidePersonalCard();
});

searchUsersForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = event.target.elements.username.value;

  console.log(query);

  const users = await searchUsers(query);

  console.log(users);

  addCardToList(users);
});
