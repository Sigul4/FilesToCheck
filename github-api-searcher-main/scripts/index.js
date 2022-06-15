/**
 * 1. Form handling -> search query
 * 2. Request to api
 * 3. Handle server response -> data
 * 4. Render users list
 */
import api from './api/index.js';
import addCardToList from './utils/addCardToList.js';
import viewPersonalCard from './utils/viewPersonalCard.js';

const {searchUsers} = api;

const searchUsersForm = document.forms['search-users'];

searchUsersForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = event.target.elements.username.value;

  console.log(query);

  const users = await searchUsers(query);

  console.log(users);

  addCardToList(users);
});


