// 1. Crea due array che hanno un numero di elementi diversi.
// Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

let arrays = []; // Creo un nuovo array
const firstArray = [56, 7, 34, 61, 4, 9, 49, 12];
const secondArray = [3, 67, 84, 2, 89];
const randomNumber = randomIntNumber();
arrays.push(firstArray, secondArray); // Pusho gli array in un nuovo array
// console.log(arrays);
let sortArrays = arrays.sort(function(firstArray, secondArray) { // Ordino gli array dal più corto al più lungo
    return firstArray.length - secondArray.length;
});
while (arrays[0].length < arrays[1].length) {
    arrays[0].push(randomNumber);
}
console.log(firstArray);
console.log(secondArray);

// FUNCTIONS
/**
 * Description // Generate a random number from 0 to 99
 * @returns {Number}
 */
function randomIntNumber() {
    const random = Math.floor(Math.random() * 99);
    return random
}