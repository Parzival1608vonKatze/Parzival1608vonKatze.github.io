

let printInConsole ='🛑Felix Stinkt!🛑';
console.clear()
console.log(printInConsole);

// js console thx Rico Kahler (https://stackoverflow.com/a/40091811)
const consoleElm = document.querySelector('#console');
const clearButton = document.querySelector('#clear');

clearButton.addEventListener('click', (event) => {
	consoleElm.innerHTML = '';
});

const consoleForm = document.querySelector('#console-form');
consoleForm.addEventListener('submit', (event) => {
	event.preventDefault();
  const command = event.target.querySelector('#command').value;
  const value = eval(command);
  consoleElm.innerHTML += (value === undefined ? 'undefined' : value) + '\n';
});

