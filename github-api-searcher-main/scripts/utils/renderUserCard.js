/**
 * {
 * avatar_url
 * login
 * url
 * }
 */
const renderUserCard = (user) => {
  const {avatar_url, login, url} = user;

  return `<li class="list__item">
              <div class="card">
                <img class="card__img" src="${avatar_url}" alt="${login}" />
                <p class="card__name">${login}</p>
              </div>
            </li>`;
};

export default renderUserCard;
