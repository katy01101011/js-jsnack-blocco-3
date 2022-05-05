// * Crea due tag div con due id diversi.
// * Un div avrà il testo colorato di rosso mentre l’altro di verde.
// * Partendo da un array di numeri,
// * stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const numbers = [];
const numbersArrayLength = randomNumber();
const oddDiv = document.getElementById('odd');
oddDiv.style.color = 'red';
const evenDiv = document.getElementById('even');
evenDiv.style.color = 'green';

for (let i = 0; i < numbersArrayLength; i++) {
    let newNumber = randomNumber();
    numbers.push(newNumber)
}

numbers.forEach( element => {
    (element % 2 === 0) ? evenDiv.innerHTML += `${element} ` : oddDiv.innerHTML += `${element} `;
});

// FUNCTIONS

/**
 * Description // Generate a random integer number
 * @returns {Number} // Random number
 */
function randomNumber() {
    const number = Math.floor(Math.random() * 100);
    return number
}