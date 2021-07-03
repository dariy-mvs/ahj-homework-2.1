import img from '../img/goblin.png';
const cells = [...document.querySelectorAll('.cell')];

const character = document.createElement('img');
let position = 0;

export default function getPosition() {
  let number = Math.round(0 - 0.5 + Math.random() * (16 + 1));
  number = Math.abs(number);
  return number;
}
console.log(img);
//character.setAttribute('src', 'https://github.com/netology-code/ahj-homeworks/raw/simplification/dom/pic/goblin.png');
character.src = img;
character.className = 'character';
setInterval(() => {
  let number;
  do {
    number = getPosition();
  } while (number === position);
  position = number;
  cells[position].appendChild(character);
}, 2000);
