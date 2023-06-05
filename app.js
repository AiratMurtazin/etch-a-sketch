'use strict';

const container = document.querySelector('.container');
const btn = document.querySelector('.btn');

let banger = 1;

const changeColor = e => {
	e.target.classList.add('brick');
};

const populateCells = size => {
	container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
	container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

	for (let i = 0; i < size * size; i++) {
		const cell = document.createElement('div');
		cell.classList.add(banger++);
		container.insertAdjacentElement('beforeend', cell);
		cell.addEventListener('mouseover', changeColor);
	}
};

populateCells(16);

btn.addEventListener('click', () => {
	let answer = prompt('Choose how many cells you need');
	populateCells(+answer);
});
