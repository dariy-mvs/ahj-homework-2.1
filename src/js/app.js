const cells = [...document.querySelectorAll('.cell')];

const character = document.createElement('img');
let position = 0;

export default function getPosition() {
  let number = Math.round(0 - 0.5 + Math.random() * (16 + 1));
  number = Math.abs(number);
  return number;
}
character.setAttribute('src', '/src/img/goblin.png');
character.className = 'character';
setInterval(() => {
  let number;
  do {
    number = getPosition();
  } while (number === position);
  position = number;
  cells[position].appendChild(character);
}, 2000);
