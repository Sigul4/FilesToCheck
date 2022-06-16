// // you
// const card_popup = document.querySelector('div.card')
// const card__img = document.querySelector('img.card__img')
// const card__name = document.querySelector('p.card__name')

const hidePersonalCard = () => {
  const cards = document.querySelectorAll('div.card');
  cards.forEach((card) => card.classList.remove('expanded'));
  // card_popup.style.position = ""
  // card_popup.style.width = ""
  // card_popup.style.left = ""
  // card_popup.style.top = ""
  // card_popup.style.height = ""
  // card_popup.style.flexDirection = ""
  // card_popup.style.backgroundColor = ""
  // card__img.style.width = ""
  // card__img.style.height = ""
  // card__name.style.fontSize = ""
};

const viewPersonalCard = (card) => {
  console.log(card);
  card.classList.add('expanded');
  //   card_popup.style.position = "absolute"
  //   card_popup.style.width = "80%"
  //   card_popup.style.left = "10%"
  //   card_popup.style.top = "10%"
  //   card_popup.style.height = "80%"
  //   card_popup.style.flexDirection = "column"
  //   card_popup.style.backgroundColor = "white"
  //   card__img.style.width = "350px"
  //   card__img.style.height = "350px"
  //   card__name.style.fontSize = "50px"
};

export {viewPersonalCard, hidePersonalCard};
