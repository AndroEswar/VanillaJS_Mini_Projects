const stars = document.querySelectorAll('.star');
const rating = document.querySelector('.rating');

function reset() {
  rating.innerHTML = `0 / 5 Rating`;

  stars.forEach((star, index) => {
    star.innerHTML = '&#9734';
  });
}

function test(ind) {
  rating.innerHTML = `${ind + 1} / 5 Rating`;

  stars.forEach((star, index) => {
    if (index <= ind) {
      star.innerHTML = '&#9733';
    } else {
      star.innerHTML = '&#9734';
    }
  });
}

stars.forEach((star, index) => {
  star.onclick = () => test(index)
})