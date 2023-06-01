'use strict';

const container = document.querySelector('.container');
let amount = 16;
for (let i = 0; i < amount * amount; i++) {
	const cell = document.createElement('div');
	cell.classList.add('brick');
	container.appendChild(cell);
}
