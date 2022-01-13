/*
Crea un array di numeri interi
e fai la somma di tutti gli elementi che sono in posizione dispari
*/

const numbers = [15, 25, 2, 28, 33, 58, 85, 99, 69];

let i = 0;
let sum = 0;

// Contatore funziona fin che è inferiore alla lunghezza dell array
while (i < numbers.length) {
  sum += numbers[i];
  // Contatore che parte dal primo numero e passa tutti i numeri dispari
  i += 2; 
}

console.log(sum);