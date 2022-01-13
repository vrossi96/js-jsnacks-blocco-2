/*
Crea due array che hanno un numero di elementi diversi.
Aggiungi elementi casuali all’array che ha meno elementi,
fino a quando ne avrà tanti quanti l’altro.
*/

let array1 = [15, 25, 75, 28, 33, 58];
let array2 = [15, 25, 75, 28, 33, 58, 85, 99, 69];

// Fin che sono di diversa lunghezza allora eseguo i comandi all'interno
while (array1.length !== array2.length) {
  // Creo un numero random
  const randomNumber = Math.floor(Math.random() * 333) +1;
  // Il numero casuale viene aggiunto all array più corto
  if (array1 < array2){
    array1.push(randomNumber);
  } else {
    array2.push(randomNumber);
  }
}

console.table(array1);
console.table(array2);