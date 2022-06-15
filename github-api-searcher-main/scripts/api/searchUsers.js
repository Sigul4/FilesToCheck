import fetchData from './fetchData.js';
import {SEARCH_USERS_URL} from './constants.js';

const searchUsers = async (query) => {
  // logic
  if (!query) {
    console.log('Empty query');
    return;
  }

  const users = await fetchData(`${SEARCH_USERS_URL}?q=${query}`);

  return users.items;
};

export default searchUsers;
