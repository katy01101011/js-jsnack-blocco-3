// * 2. Crea un array vuoto
// * e chiedi all’utente un numero da inserire nell’array.
// Continua a chiedere i numeri all’utente e a inserirli nell’array
// fino a quando la somma degli elementi è minore di 50.

const userNumbers = [];
let userNumber;
// console.log(userNumber);
let sum = 0;
do {
    userNumber = parseInt(prompt('Inserisci un numero'));
    userNumbers.push(userNumber);
    sum += userNumber;
} while (
    sum < 50
);

if (sum > 50) {
    userNumbers.pop()
};
console.log(userNumbers);