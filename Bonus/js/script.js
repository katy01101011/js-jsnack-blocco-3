// * Crea due tag div con due id diversi.
// * Un div avrà il testo colorato di rosso mentre l’altro di verde.
// * Partendo da un array di numeri,
// * stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.

const numbers = [];
const oddNumbers = [];
const evenNumbers = [];
const numbersArrayLength = randomNumber();
const oddDiv = document.getElementById('odd');
oddDiv.style.color = 'red';
const evenDiv = document.getElementById('even');
evenDiv.style.color = 'green';

for (let i = 0; i < numbersArrayLength; i++) {
    let newNumber = randomNumber();
    numbers.push(newNumber)
}

console.log(numbers);

numbers.forEach( element => {
    if (element % 2 === 0) {
        evenNumbers.push(element);
        evenDiv.innerHTML += `${element} `;
    } else {
        oddNumbers.push(element)
        oddDiv.innerHTML += `${element} `;
    }
});

console.log(oddNumbers);
console.log(evenNumbers);


// FUNCTIONS

/**
 * Description // Generate a random integer number
 * @returns {Number} // Random number
 */
function randomNumber() {
    const number = Math.floor(Math.random() * 100);
    return number
}