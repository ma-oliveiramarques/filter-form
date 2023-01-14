const filterElement = document.querySelector('header input');
const cards = document.querySelectorAll('.cards li');

filterElement.addEventListener('input', filterCards);

function filterCards() {
  if (filterElement.value != ''){

    cards.forEach(card => {
      let title = card.querySelector('h2');
      title = title.textContent.toLowerCase();
      let filterText = filterElement.value.toLowerCase();

      card.style.display = (!title.includes(filterText)) ? 'none' : 'block';
    })

  } else {
    cards.forEach(card => {
      card.style.display = 'block';
    })
  }
}
