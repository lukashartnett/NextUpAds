function purchase(amount) {
  document.getElementById('thanks-message').textContent =
    `Thanks for purchasing for ${amount}!`;
  document.getElementById('home').style.display = 'none';
  document.getElementById('thanks').style.display = 'block';
}

function returnHome() {
  document.getElementById('thanks').style.display = 'none';
  document.getElementById('home').style.display = 'block';
}
