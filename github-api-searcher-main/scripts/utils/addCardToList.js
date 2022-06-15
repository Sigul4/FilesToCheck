import renderUserCard from './renderUserCard.js';

const usersList = document.getElementById('usersList');

const addCardToList = (users) => {
  if (!users.length) {
    usersList.innerHTML = 'No user for searched query';
    return;
  }

  usersList.innerHTML = users.reduce((acc, user) => {
    acc += renderUserCard(user);
    return acc;
  }, '');
};

export default addCardToList;
