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

const card_popup = document.querySelector('div.card')

const html = document.querySelector('html')

viewPersonalCard()

card_popup.addEventListener("click", (e) => {
  e.stopPropagation()
  viewPersonalCard()
})
html.addEventListener("click", () => {hidePersonalCard()})


searchUsersForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = event.target.elements.username.value;

  console.log(query);

  const users = await searchUsers(query);

  console.log(users);

  addCardToList(users);
});
