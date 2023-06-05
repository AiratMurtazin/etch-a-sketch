'use strict';

const container = document.querySelector('.container');
container.style.gridTemplateColumns = 'repeat(16, 1fr)';
container.style.gridTemplateRows = 'repeat(16, 1fr)';
let amount = 16;
let banger = 1;
const changeColor = e => {
	e.target.classList.add('brick');
};

for (let i = 0; i < amount * amount; i++) {
	const cell = document.createElement('div');
	cell.classList.add(banger++);
	container.insertAdjacentElement('beforeend', cell);
	cell.addEventListener('mouseover', changeColor);
}
