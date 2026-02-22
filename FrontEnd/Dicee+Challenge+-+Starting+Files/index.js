const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

const randomImgDice1 = './images/dice' + randomNumber1 + '.png';
const randomImgDice2 = './images/dice' + randomNumber2 + '.png';

document.querySelector('.img1').setAttribute('src', randomImgDice1);
document.querySelector('.img2').setAttribute('src', randomImgDice2);

if (randomImgDice1 > randomImgDice2) {
  document.querySelector('h1').textContent = 'Player1 1 Wins!';
} else if (randomImgDice2 > randomImgDice1) {
  document.querySelector('h1').textContent = 'Player1 2 Wins!';
} else {
  document.querySelector('h1').textContent = 'Draw!';
}
