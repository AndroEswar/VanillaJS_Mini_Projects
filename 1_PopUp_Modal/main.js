const openCTA = document.getElementById('open');
const closeCTA = document.getElementById('close');
const modal = document.getElementById('modal');

openCTA.addEventListener('click', function() {
  openCTA.style.display = 'none';
  modal.style.display = 'flex';
})

closeCTA.addEventListener('click', function() {
  openCTA.style.display = 'block';
  modal.style.display = 'none';
})